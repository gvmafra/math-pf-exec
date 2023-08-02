/* eslint-disable no-console */
// gameReducer.ts
import cloneDeep from 'lodash/cloneDeep';
import { useReducer } from 'react';
import { initialState } from 'renderer/state/constants';
import { GameState } from 'renderer/state/types';
import {
  updateCell,
  getChallengeRatio,
  getCanvasRatio,
  updateCurrentLevel,
  revertLevel,
  updateGameCanvas,
  getRatio,
  incrementLevelNum,
} from 'renderer/state/helpers';

export type Action =
  | {
      type: 'TOGGLE_CELL';
      payload: { stageIndex: number; levelIndex: number; cellIndex: number };
    }
  | { type: 'NEXT_LEVEL'; payload: { stageIndex: number; levelIndex: number } }
  | { type: 'PREV_LEVEL'; payload?: undefined }
  | { type: 'DIVIDE_SQUARE'; payload: { direction: 'horizontal' | 'vertical' } }
  | {
      type: 'RESET_SQUARE';
      payload: { stageIndex: number; levelIndex: number };
    }
  | { type: 'RESET_GAME'; payload?: undefined }
  | { type: 'CLEAR_JUST_ADVANCED_STAGE'; payload?: undefined };

export default function gameStateReducer(state: GameState, action: Action) {
  switch (action.type) {
    case 'TOGGLE_CELL': {
      const { stageIndex, levelIndex, cellIndex } = action.payload;

      // Get current cell
      const currentCell =
        state.stages[stageIndex].levels[levelIndex].gameCanvas.cells.cells[
          cellIndex
        ];

      // Toggle cell selection
      const newCell = { ...currentCell, selected: !currentCell.selected };

      // Update state using helper function
      return updateCell(state, stageIndex, levelIndex, cellIndex, newCell);
    }
    case 'CLEAR_JUST_ADVANCED_STAGE': {
      return {
        ...state,
        justAdvancedStage: false,
      } as GameState;
    }

    case 'NEXT_LEVEL': {
      const { stageIndex: currentStage, levelIndex: currentLevel } =
        action.payload;

      const currentLevelRef = state.stages[currentStage].levels[currentLevel];

      const challengeRatio = getChallengeRatio(currentLevelRef);
      const canvasRatio = getCanvasRatio(currentLevelRef);

      if (challengeRatio === canvasRatio) {
        console.log('Level completed');

        const newState = incrementLevelNum(state, currentStage, currentLevel);
        return newState;
      }
      return state;
    }

    case 'PREV_LEVEL': {
      const { currentStage } = state;
      const { currentLevel } = state.stages[currentStage].metadata;
      // if level one do nothing
      if (currentLevel === 0) {
        return state;
      }

      let updatedState = state;
      // revert current level to its initial state
      updatedState = revertLevel(updatedState, currentStage, currentLevel);
      // set previous level as the current level
      updatedState = updateCurrentLevel(
        updatedState,
        currentStage,
        currentLevel - 1
      );

      return updatedState;
    }

    case 'DIVIDE_SQUARE': {
      const { direction } = action.payload;

      const { currentStage } = state;
      const { currentLevel } = state.stages[currentStage].metadata;

      return {
        ...state,
        stages: state.stages.map((stage, stageIndex) => {
          if (stageIndex !== currentStage) {
            return stage;
          }

          return {
            ...stage,
            levels: stage.levels.map((level, levelIndex) => {
              if (levelIndex !== currentLevel) {
                return level;
              }

              const { gameCanvas } = level;

              if (gameCanvas.type !== 'grid') {
                console.log('Cannot divide a non-grid canvas');
                return level;
              }

              const {
                max: { rows: maxRows, columns: maxColumns },
                min: { rows: minRows, columns: minColumns },
                current: { rows: oldNumRows, columns: oldNumColumns },
              } = gameCanvas.grid;

              let numRows = oldNumRows;
              let numColumns = oldNumColumns;

              if (
                direction === 'horizontal' &&
                (numRows <= (maxRows || 4) || numRows >= (minRows || 1))
              ) {
                numRows += 1;
              } else if (
                direction === 'vertical' &&
                (numColumns <= (maxColumns || 4) ||
                  numColumns >= (minColumns || 1))
              ) {
                numColumns += 1;
              } else {
                // Reached the maximum limit for this direction
                return level;
              }

              const newCells = Array(numRows * numColumns).fill({
                selected: false,
              });

              for (let i = 0; i < oldNumRows; i += 1) {
                for (let j = 0; j < oldNumColumns; j += 1) {
                  const oldCellIndex = i * oldNumColumns + j;
                  if (gameCanvas.cells.cells[oldCellIndex]) {
                    newCells[i * numColumns + j] =
                      gameCanvas.cells.cells[oldCellIndex];
                  }
                }
              }

              return {
                ...level,
                gameCanvas: {
                  ...gameCanvas,
                  grid: {
                    ...gameCanvas.grid,
                    current: {
                      rows: numRows,
                      columns: numColumns,
                    },
                  },
                  cells: {
                    cells: newCells,
                    ratio: getRatio(newCells),
                  },
                },
              };
            }),
          };
        }),
      } as GameState;
    }

    case 'RESET_SQUARE': {
      const { stageIndex, levelIndex } = action.payload;

      // Use initial canvas to reset the square
      const { gameCanvas: initialCanvas } =
        initialState.stages[stageIndex].levels[levelIndex];

      return updateGameCanvas(
        state,
        stageIndex,
        levelIndex,
        initialCanvas
      ) as GameState;
    }

    case 'RESET_GAME': {
      return cloneDeep(initialState);
    }
    default:
      return state;
  }
}

export function useGameState() {
  return useReducer(gameStateReducer, cloneDeep(initialState));
}
