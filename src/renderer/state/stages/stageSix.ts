import { GameCanvas, Stage } from '../types';
import {
  initializeLevels,
  initializeLevelChallenges,
  filterChallenges,
  concatArrays,
  initialStageMetadata,
  genRandomChallengeCanvases,
  getRandomOptions,
} from './utils';

const genStageSix = (): Stage => {
  const initialLevels = initializeLevels(
    genRandomChallengeCanvases({
      numCellsFilter: [3, 6],
      difficultyFilter: ['easy', 'medium'],
      toggleRatio: .5,
      numberofChallenges: 6,
    }),
    concatArrays<GameCanvas>([
      initializeLevelChallenges(
        getRandomOptions(
          filterChallenges({
            numCellsFilter: [3, 6],
            difficultyFilter: ['easy', 'medium'],
          }).map((challengeId) => ({
            challengeId,
          })),
          6
        )
      )
    ])
  );

  const finalLevels = initializeLevels(
    genRandomChallengeCanvases({
      numCellsFilter: [2, 6],
      difficultyFilter: ['easy', 'medium'],
      toggleRatio: .5,
      numberofChallenges: 4,
    }),
    concatArrays<GameCanvas>([
      initializeLevelChallenges(
        getRandomOptions(
          filterChallenges({
            numCellsFilter: [2, 6],
            difficultyFilter: ['easy', 'medium'],
          }).map((challengeId) => ({
            challengeId,
          })),
          4
        )
      )
    ])
  );

  return {
    levels: [...initialLevels, ...finalLevels],
    metadata: initialStageMetadata(),
  };
};

export default genStageSix;

/* 
* stageSix.ts consists of the following:

* from level 1 to 6, challenges will be randomly selected from the following:
*    - thirds, within easy and medium difficulties
*    - sixths, within easy and medium difficulties
* canvases will be randomly selected from the following:
*    - thirds: square3a, square3b
*    - sixths: square6a, square6b

* from level 7 to 10, challenges will be randomly selected from the following:
*    - halves, within easy and medium difficulties
*    - sixths, within easy and medium difficulties
* canvases will be randomly selected from the following:
*    - halves: square2a, square2b
*    - sixths: square6a, square6b

* need to use the following functions:
*    - genRandomChallengeCanvases
*    - getRandomOptions
*    - filterChallenges
*    - concatArrays
*    - initializeLevels
*    - initializeLevelChallenges
*    - initialStageMetadata
*/