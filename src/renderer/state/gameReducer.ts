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
  | { type: 'ADVANCE_TO_NEXT_STAGE'; payload?: undefined }
  | {
      type: 'INCREMENT_CLICK_COUNT';
      payload: { stageIndex: number; levelIndex: number };
    }
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

        // implement the logic for removing points from the score
        // 1st step: get the current level
        const currentLevel = draft.stages[stageIndex].levels[levelIndex];
        // 2nd step: get the current challenge and game canvas
        const { challenge, canvas } = currentLevel;
        // 3d step: get the current ratio of the challenge
        const challengeRatio = getToggledRatio(challenge);

        // 4th step: get the current number of segments in the game canvas;
        // get the length of the toggled array for challenge canvas
        const numberOfSegments = canvas.toggled.length;

        /*
        The algorithm for calculating the score is as follows:
        1. Get the current ratio of the challenge
        2. Get the current number of segments in the game canvas
        3. Use the matching ratio to get the number of segments that should be toggled
        4. That number is the minimum number of clicks required to complete the level
        5. Any number of clicks above that number should reduce the score 
            (i.e., if the minimum number of clicks is 4, 
            then 5 clicks should reduce the score by 1, 6 clicks should reduce the score by 2, etc.)
        6. The score should be a number between 0 and 3.
        7. Clicks include both toggling and untoggling cells, and clicking on the buttons that divide the canvas.

        here's what I have so far, It doesn't work because it isn't accounting for the buttons that divide the canvas. 
        It also doesn't account for the fact that the number of segments in the canvas can change.

        //  const minimumNumberOfClicks = Math.ceil(
        //    challengeRatio * numberOfSegments
        //  );
        //  const currentNumberOfClicks = currentLevel.metadata.clickCount;
        //  const difference = currentNumberOfClicks - minimumNumberOfClicks;
        //  const score = Math.max(3 - difference, 0);

        //  currentLevel.metadata.score = score as 1 | 2 | 3;

        what I need to do is to get the number of segments in the canvas after the canvas is divided, 
        and then use that number to calculate the minimum number of clicks required to complete the level.
        I also need to account for the fact that the number of segments in the canvas can change. 
        As of now, when the canvas is divided, the number of points increases. I need to account for that.

        So I tried this:
        */

        // 1. Get the current ratio of the challenge
        const currentChallengeRatio = getToggledRatio(challenge);
        // 2. Get the current number of segments in the game canvas
        const currentNumberOfSegments = canvas.toggled.length;
        // 3. Use the matching ratio to get the number of segments that should be toggled
        const minimumNumberOfSegments = Math.ceil(
          currentChallengeRatio * currentNumberOfSegments
        );
        // 4. That number is the minimum number of clicks required to complete the level
        const minimumNumberOfClicks = minimumNumberOfSegments;
        // 5. Any number of clicks above that number should reduce the score
        const currentNumberOfClicks = currentLevel.metadata.clickCount;
        const difference = currentNumberOfClicks - minimumNumberOfClicks;
        const score = Math.max(3 - difference, 0);
        // 6. The score should be a number between 0 and 3.
        currentLevel.metadata.score = score as 1 | 2 | 3;

        /*
        This works fine for the challenge canvas, but not for the grid canvas.
        I need to account for the fact that the number of points should never exceed 3.
        The required minimum number of clicks should equal the number of cells toggled required to equal the challenge ratio, 
        plus the amount of clicks required to divide the canvas.

        i.e.: 
        If the challenge ratio is 0.5, and the canvas is divided into 2 cells, 
        then the minimum number of clicks required to complete the level with 3 points is 3. 
        (1 click to divide the canvas, and 2 clicks to toggle the cells).
        If the challenge ratio is 0.5, and the canvas is blank, then the minimum number of clicks required to complete the level with 3 points is 2. 
        (1 click to divide the canvas, and 1 click to toggle the cells).
        If the challenge ratio is 2/3, and the canvas is divided into 2 cells, the minimum number of clicks required to complete the level with 3 points is 3. 
        (1 click to divide the canvas, and 2 clicks to toggle the cells).

        In addition, canvas.numberOfDivisions should take care of the number of clicks required to divide the canvas.
        If the user clicks the divide button, then canvas.numberOfDivisions should increase by 1. 
        That should reflect the score, considering that the user should aim for the most efficient way of reaching the desired ratio.
        */

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
          break;
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

      // // Add a new case in your reducer
      // case 'ADVANCE_TO_NEXT_STAGE': {
      //   const stageLastIndex = draft.stages.length - 1;
      //   if (draft.currentStage >= stageLastIndex) {
      //     // If you're on the last stage, you might not do anything
      //     // Or you could potentially set finishedGame to true,
      //     // or take any other action that makes sense in your game context
      //     draft.finishedGame = true;
      //     return;
      //   }

      //   // Advance to the next stage
      //   draft.currentStage += 1;
      //   // Assuming that advancing to the next stage should
      //   // also reset the level counter of this new stage, set it to 0 or to whatever makes sense in your game context
      //   draft.stages[draft.currentStage].metadata.currentLevel = 0;
      //   // Reset the justAdvancedStage flag
      //   draft.justAdvancedStage = false;
      //   break;
      // }

      default: {
        break;
      }
    }
  });
}

export function useGameState() {
  return useReducer(gameStateReducer, genInitialState());
}
