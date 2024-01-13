//gameReducer.ts
import { produce } from 'immer';
import type { Draft } from 'immer';
import { useReducer } from 'react';
import { GameState } from 'renderer/state/types';
import { getToggledRatio } from './utils';
import genInitialState from './gameSetup';
import scoreData from './scoreData';
import { calculateStageScore } from './stages/utils';

export type Direction = 'horizontal' | 'vertical';
export type Action =
  | {
      type: 'TOGGLE_CELL';
      payload: {
        stageIndex: number;
        levelIndex: number;
        cellIndex: number;
      };
    }
  | { type: 'NEXT_LEVEL'; payload: { stageIndex: number; levelIndex: number } }
  | { type: 'PREV_LEVEL'; payload?: undefined }
  | { type: 'DIVIDE_SQUARE'; payload: { direction: Direction } }
  | { type: 'STAGE_COMPLETED'; payload: { stageIndex: number } }
  | {
      type: 'RESET_SQUARE';
      payload: { stageIndex: number; levelIndex: number };
    }
  | { type: 'RESET_GAME'; payload?: undefined }
  | { type: 'CLEAR_JUST_ADVANCED_STAGE'; payload?: undefined }
  | {
      type: 'INCREMENT_CLICK_COUNT';
      payload: { stageIndex: number; levelIndex: number };
    }
  | { type: 'REPLAY_STAGE'; payload?: undefined }
  | { type: 'PREVIOUS_STAGE_CHECK'; payload?: undefined }
  | { type: 'SET_STAGE'; payload: { stageIndex: number } };

function loopList<T>(list: T[], index: number): T {
  const lastIndex = list.length - 1;
  if (index < 0) {
    return list[lastIndex];
  }
  if (index > lastIndex) {
    return list[0];
  }
  return list[index];
}

export default function gameStateReducer(
  state: GameState,
  action: Action
): GameState {
  return produce(state, (draft: Draft<GameState>) => {
    switch (action.type) {
      case 'TOGGLE_CELL': {
        const { stageIndex, levelIndex, cellIndex } = action.payload;

        const currentCells =
          draft.stages[stageIndex].levels[levelIndex].canvas.toggled;
        currentCells[cellIndex] = !currentCells[cellIndex];
        break;
      }

      case 'INCREMENT_CLICK_COUNT': {
        const { stageIndex, levelIndex } = action.payload;
        draft.stages[stageIndex].levels[levelIndex].metadata.clickCount += 1;

        // UPDATED:
        // Access the clickMax for this particular level from the scoreData
        const clickMax = scoreData[stageIndex].levels[levelIndex].clickMax;
        // If the current clickCount exceeds the clickMax, decrease the score by the difference
        const currentClickCount =
          draft.stages[stageIndex].levels[levelIndex].metadata.clickCount;
        if (currentClickCount > clickMax) {
          let newScore = 3 - (currentClickCount - clickMax);
          newScore = newScore < 1 ? 1 : newScore; // Make sure the score never falls below 1
          // Update the score in the state
          draft.stages[stageIndex].levels[levelIndex].metadata.score =
            newScore as 1 | 2 | 3;
        }
        // reset the score to 3 if the user resets the square
        if (currentClickCount === 0) {
          draft.stages[stageIndex].levels[levelIndex].metadata.score = 3;
        }
        break;
      }

      case 'STAGE_COMPLETED': {
        const { stageIndex } = action.payload;
        draft.stages[stageIndex].metadata.completed = true;

        // when stage is completed, sum the score from all levels in the stage
        const stageScore = calculateStageScore(draft.stages[stageIndex].levels);
        draft.stages[stageIndex].metadata.stageScore = stageScore;

        // when a stage is comple

        break;
      }

      case 'DIVIDE_SQUARE': {
        const { direction } = action.payload;
        const { currentStage } = draft;
        const { currentLevel } = draft.stages[currentStage].metadata;
        const gameCanvasDraft =
          draft.stages[currentStage].levels[currentLevel].canvas;
        if (gameCanvasDraft.type != 'grid') {
          console.log('Cannot divide a non-grid canvas');
          return;
        }

        const {
          options: { rows: rowOptions, columns: colOptions },
          current: { rows: currNumRows, columns: currNumColumns },
        } = gameCanvasDraft.grid;

        let numRows = currNumRows;
        let numColumns = currNumColumns;

        const rowIndex = rowOptions.indexOf(currNumRows);
        const colIndex = colOptions.indexOf(currNumColumns);

        if (direction === 'horizontal') {
          numRows = loopList(rowOptions, rowIndex + 1);
        } else if (direction === 'vertical') {
          numColumns = loopList(colOptions, colIndex + 1);
        }

        gameCanvasDraft.grid.current = { rows: numRows, columns: numColumns };
        gameCanvasDraft.toggled = new Array(numRows * numColumns).fill(false);
        break;
      }

      case 'CLEAR_JUST_ADVANCED_STAGE': {
        draft.justAdvancedStage = false;
        break;
      }

      case 'PREV_LEVEL': {
        const { currentStage } = draft;
        const { currentLevel } = draft.stages[currentStage].metadata;

        if (currentLevel === 0) {
          return;
        }

        draft.stages[currentStage].metadata.currentLevel -= 1;
        break;
      }

      case 'NEXT_LEVEL': {
        const { stageIndex: currentStageIndex, levelIndex: currentLevelIndex } =
          action.payload;

        const stageLastIndex = draft.stages.length - 1;
        const levelLastIndex =
          draft.stages[currentStageIndex].levels.length - 1;

        if (
          currentStageIndex < 0 ||
          currentStageIndex > stageLastIndex ||
          currentLevelIndex < 0 ||
          currentLevelIndex > levelLastIndex
        ) {
          return;
        }

        const currentLevel =
          draft.stages[currentStageIndex].levels[currentLevelIndex];

        const challengeRatio = getToggledRatio(currentLevel.challenge);
        const canvasRatio = getToggledRatio(currentLevel.canvas);

        if (challengeRatio !== canvasRatio) {
          return;
        }

        draft.stages[currentStageIndex].levels[
          currentLevelIndex
        ].metadata.completed = true;

        if (currentLevelIndex + 1 > levelLastIndex) {
          if (currentStageIndex + 1 > stageLastIndex) {
            draft.stages[currentStageIndex].metadata.completed = true;
            draft.finishedGame = true;
            return;
          }
          draft.stages[currentStageIndex].metadata.completed = true;
          draft.currentStage = currentStageIndex + 1;
          draft.justAdvancedStage = true;
        } else {
          draft.stages[currentStageIndex].metadata.currentLevel += 1;
          draft.stages[currentStageIndex].levels[
            currentLevelIndex + 1
          ].metadata.completed = false;
          draft.stages[currentStageIndex].levels[
            currentLevelIndex
          ].metadata.clickCount = 0;
        }

        break;
      }

      case 'RESET_SQUARE': {
        const { stageIndex, levelIndex } = action.payload;
        draft.stages[stageIndex].levels[levelIndex].metadata.clickCount = 0;

        const gameCanvasDraft =
          draft.stages[stageIndex].levels[levelIndex].canvas;

        if (gameCanvasDraft.type !== 'grid') {
          gameCanvasDraft.toggled = new Array(
            gameCanvasDraft.toggled.length
          ).fill(false);
          // Reset the score to 3
          draft.stages[stageIndex].levels[levelIndex].metadata.score = 3;

          break;
        }
        
        const originalGridSize = 
          gameCanvasDraft.grid.original.rows * gameCanvasDraft.grid.original.columns;

        // Reset the toggled array back its original size and state
        gameCanvasDraft.toggled = new Array(originalGridSize).fill(false);

        // Reset the current grid to its original state
        gameCanvasDraft.grid.current = {...gameCanvasDraft.grid.original};

        // Reset the score to 3
        draft.stages[stageIndex].levels[levelIndex].metadata.score = 3;

        break;
      }

      case 'RESET_GAME': {
        // eslint-disable-next-line consistent-return
        return genInitialState();
      }

      case 'SET_STAGE': {
        const { stageIndex } = action.payload;
        const stageLastIndex = draft.stages.length - 1;

        if (stageIndex < 0 || stageIndex > stageLastIndex) {
          return;
        }

        draft.currentStage = stageIndex;
        break;
      }

      case 'PREVIOUS_STAGE_CHECK': {
        // check if the previous stages before the current stage are completed
        // if not, return
        const { currentStage } = draft;
        const stageLastIndex = draft.stages.length - 1;
        const currentLevel = draft.stages[currentStage].metadata.currentLevel;
        const levelLastIndex = draft.stages[currentStage].levels.length - 1;
      
        if (
          currentStage < 0 ||
          currentStage > stageLastIndex ||
          currentLevel < 0 ||
          currentLevel > levelLastIndex
        ) {
          return;
        }
      
        // get the current level metadata
        const currentLevelMetadata = draft.stages[currentStage].levels[currentLevel].metadata;
        
        // If the current level is completed, unblock the next stage.
        if (currentLevelMetadata.completed && currentStage < stageLastIndex) {
          draft.stages[currentStage + 1].metadata.blocked = false;
        } else {
          for (let i = currentStage + 1; i < stageLastIndex; i++) {
            draft.stages[i].metadata.blocked = true; 
          }
        }
      
        return;
      }

      case 'REPLAY_STAGE': {
        const { currentStage } = draft;
        const stageLastIndex = draft.stages.length - 1;
        const currentLevel = draft.stages[currentStage].metadata.currentLevel;
        const levelLastIndex = draft.stages[currentStage].levels.length - 1;
      
        if (
          currentStage < 0 ||
          currentStage > stageLastIndex ||
          currentLevel < 0 ||
          currentLevel > levelLastIndex
        ) {
          return;
        }
      
        const currentLevelMetadata = draft.stages[currentStage].levels[currentLevel].metadata;
        if (currentLevelMetadata.completed) {
          draft.stages[currentStage].metadata.stageScore = 0;
          draft.stages[currentStage].metadata.completed = false;
          draft.stages[currentStage].metadata.currentLevel = 0;
      
          draft.stages[currentStage].levels.forEach(level => {
            const levelIndex = draft.stages[currentStage].levels.indexOf(level);
            const gameCanvasDraft = draft.stages[currentStage].levels[levelIndex].canvas;
      
            level.metadata.completed = false;
            level.metadata.clickCount = 0;
            if (level.canvas.type === 'challenge' || level.canvas.type === 'grid') {
              level.canvas.toggled = new Array(level.canvas.toggled.length).fill(false);
            }
            
            if (gameCanvasDraft.type === 'grid') {
              const originalGridSize = 
                gameCanvasDraft.grid.original.rows * gameCanvasDraft.grid.original.columns;
      
              // Reset the toggled array back its original size and state
              gameCanvasDraft.toggled = new Array(originalGridSize).fill(false);
      
              // Reset the current grid to its original state
              gameCanvasDraft.grid.current = {...gameCanvasDraft.grid.original};
            }
      
            level.metadata.score = 3;
          });
        } else {
          return;
        }
      
        break;
      }

      default: {
        break;
      }
    }
  });
}

export function useGameState() {
  return useReducer(gameStateReducer, genInitialState());
}
