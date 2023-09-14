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

const genStageTwelve = (): Stage => {
  const stages = [
    { numCellsFilter: [9], numberOfLevels: 2 },
    { numCellsFilter: [9, 3], numberOfLevels: 2 },
    { numCellsFilter: [3, 9], numberOfLevels: 2 },
    { numCellsFilter: [9, 6], numberOfLevels: 2 },
    { numCellsFilter: [6, 9], numberOfLevels: 2 },
  ];
  
  const difficultyFilter = ['easy', 'medium', 'hard'];

  let levels = [];
  
  stages.forEach(stage => {
    let generatedLevels = initializeLevels(
      genRandomChallengeCanvases({
        numCellsFilter: stage.numCellsFilter,
        difficultyFilter: difficultyFilter,
        toggleRatio: .5,
        numberofChallenges: stage.numberOfLevels,
      }),
      concatArrays<GameCanvas>([
        initializeLevelChallenges(
          getRandomOptions(
            filterChallenges({
              numCellsFilter: stage.numCellsFilter,
              difficultyFilter: difficultyFilter,
            }).map((challengeId) => ({
              challengeId,
            })),
            stage.numberOfLevels
          )
        )
      ])
    );

    levels = [...levels, ...generatedLevels];
  });

  return {
    levels,
    metadata: initialStageMetadata(),
  };
};

export default genStageTwelve;


/* 
* stageTwelve.ts consists of the following:

* Levels 1 and 2 will be:
*   challenge: random /9s, easy medium and hard
*   canvas: random /9s, easy medium and hard

* Levels 3 and 4 will be:
*   challenge: random /9s, easy medium and hard
*   canvas: random /3s, easy medium and hard

* Levels 5 and 6 will be:
*   challenge: random /3s, easy medium and hard
*   canvas: random /9s, easy medium and hard

* Levels 7 and 8 will be:
*   challenge: random /9s, easy medium and hard
*   canvas: random /6s, easy medium and hard

* Levels 9 and 10 will be:
*   challenge: random /6s, easy medium and hard
*   canvas: random /9s, easy medium and hard

* need to use the following functions:
*    - genRandomChallengeCanvases
*    - getRandomOptions
*    - filterChallenges
*    - concatArrays
*    - initializeLevels
*    - initializeLevelChallenges
*    - initialStageMetadata
*/