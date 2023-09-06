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

const genStageNine = (): Stage => {
  const levelOneAndTwo = initializeLevels(
    genRandomChallengeCanvases({
      numCellsFilter: [8],
      difficultyFilter: ['easy', 'medium', 'hard'],
      toggleRatio: .5,
      numberofChallenges: 2,
    }),
    concatArrays<GameCanvas>([
      initializeLevelChallenges(
        getRandomOptions(
          filterChallenges({
            numCellsFilter: [8],
            difficultyFilter: ['easy', 'medium', 'hard'],
          }).map((challengeId) => ({
            challengeId,
          })),
          2
        )
      )
    ])
  );

  const levelThreeAndFour = initializeLevels(
    genRandomChallengeCanvases({
      numCellsFilter: [2],
      difficultyFilter: ['easy', 'medium', 'hard'],
      toggleRatio: .5,
      numberofChallenges: 2,
    }),
    concatArrays<GameCanvas>([
      initializeLevelChallenges(
        getRandomOptions(
          filterChallenges({
            numCellsFilter: [8],
            difficultyFilter: ['easy', 'medium', 'hard'],
          }).map((challengeId) => ({
            challengeId,
          })),
          2
        )
      )
    ])
  );

  const levelFiveAndSix = initializeLevels(
    genRandomChallengeCanvases({
      numCellsFilter: [8],
      difficultyFilter: ['easy', 'medium', 'hard'],
      toggleRatio: .5,
      numberofChallenges: 2,
    }),
    concatArrays<GameCanvas>([
      initializeLevelChallenges(
        getRandomOptions(
          filterChallenges({
            numCellsFilter: [2],
            difficultyFilter: ['easy', 'medium', 'hard'],
          }).map((challengeId) => ({
            challengeId,
          })),
          2
        )
      )
    ])
  );

  const levelSevenAndEight = initializeLevels(
    genRandomChallengeCanvases({
      numCellsFilter: [4],
      difficultyFilter: ['easy', 'medium', 'hard'],
      toggleRatio: .5,
      numberofChallenges: 2,
    }),
    concatArrays<GameCanvas>([
      initializeLevelChallenges(
        getRandomOptions(
          filterChallenges({
            numCellsFilter: [8],
            difficultyFilter: ['easy', 'medium', 'hard'],
          }).map((challengeId) => ({
            challengeId,
          })),
          2
        )
      )
    ])
  );

  const levelNineAndTen = initializeLevels(
    genRandomChallengeCanvases({
      numCellsFilter: [8],
      difficultyFilter: ['easy', 'medium', 'hard'],
      toggleRatio: .5,
      numberofChallenges: 2,
    }),
    concatArrays<GameCanvas>([
      initializeLevelChallenges(
        getRandomOptions(
          filterChallenges({
            numCellsFilter: [4],
            difficultyFilter: ['easy', 'medium', 'hard'],
          }).map((challengeId) => ({
            challengeId,
          })),
          2
        )
      )
    ])
  );

  return {
    levels: [...levelOneAndTwo, ...levelThreeAndFour, ...levelFiveAndSix, ...levelSevenAndEight, ...levelNineAndTen],
    metadata: initialStageMetadata(),
  };
};

export default genStageNine;


/* 
* stageNine.ts consists of the following:

* Levels 1 and 2 will be:
*   challenge: random /8s, easy medium and hard
*   canvas: random /8s, easy medium and hard

* Levels 3 and 4 will be:
*   challenge: random /8s, easy medium and hard
*   canvas: random /2s, easy medium and hard

* Levels 5 and 6 will be:
*   challenge: random /2s, easy medium and hard
*   canvas: random /8s, easy medium and hard

* Levels 7 and 8 will be:
*   challenge: random /8s, easy medium and hard
*   canvas: random /4s, easy medium and hard

* Levels 9 and 10 will be:
*   challenge: random /4s, easy medium and hard
*   canvas: random /8s, easy medium and hard

* need to use the following functions:
*    - genRandomChallengeCanvases
*    - getRandomOptions
*    - filterChallenges
*    - concatArrays
*    - initializeLevels
*    - initializeLevelChallenges
*    - initialStageMetadata
*/
