/* eslint-disable no-param-reassign */
/* eslint-disable no-console */

//gameReducer.ts
import { produce } from 'immer';
import type { Draft } from 'immer';
import { useReducer } from 'react';
import { GameState } from 'renderer/state/types';
import { getToggledRatio } from './utils';
import genInitialState from './gameSetup';

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
  | {
      type: 'RESET_SQUARE';
      payload: { stageIndex: number; levelIndex: number };
    }
  | { type: 'RESET_GAME'; payload?: undefined }
  | { type: 'CLEAR_JUST_ADVANCED_STAGE'; payload?: undefined }
  | { type: 'SET_STAGE'; payload: { stageIndex: number } };

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
          max: { rows: maxRows, columns: maxColumns },
          current: { rows: oldNumRows, columns: oldNumColumns },
        } = gameCanvasDraft.grid;

        let numRows = oldNumRows;
        let numColumns = oldNumColumns;

        if (direction === 'horizontal') {
          if (oldNumRows !== maxRows) {
            numRows += 1;
          } else {
            numRows = 1;
          }
        } else if (direction === 'vertical') {
          if (oldNumColumns !== maxColumns) {
            numColumns += 1;
          } else {
            numColumns = 1;
          }
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
        const gameCanvasDraft =
          draft.stages[stageIndex].levels[levelIndex].canvas;

        if (gameCanvasDraft.type !== 'grid') {
          console.log('Cannot reset a non-grid canvas');
          return;
        }

        gameCanvasDraft.toggled = new Array(
          gameCanvasDraft.grid.current.rows *
            gameCanvasDraft.grid.current.columns
        ).fill(false);
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

      default: {
        break;
      } //break;
    }
  });
}

export function useGameState() {
  return useReducer(gameStateReducer, genInitialState());
}
