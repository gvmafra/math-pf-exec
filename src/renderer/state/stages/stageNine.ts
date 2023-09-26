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
  // first two challenges are eighths
  let challengesEighthsFirst = genRandomChallengeCanvases({
    numCellsFilter: [8],
    difficultyFilter: ['easy', 'medium', 'hard'],
    toggleRatio: 1 / 4,
    numberofChallenges: 2,
  });
  challengesEighthsFirst = challengesEighthsFirst.concat(
    genRandomChallengeCanvases({
      numCellsFilter: [8],
      difficultyFilter: ['easy', 'medium', 'hard'],
      toggleRatio: 2 / 4,
      numberofChallenges: 2,
    })
  );
  challengesEighthsFirst = challengesEighthsFirst.concat(
    genRandomChallengeCanvases({
      numCellsFilter: [8],
      difficultyFilter: ['easy', 'medium', 'hard'],
      toggleRatio: 3 / 4,
      numberofChallenges: 2,
    })
  );

  // Next two challenges are eighths
  let challengesEighthsSecond = genRandomChallengeCanvases({
    numCellsFilter: [8],
    difficultyFilter: ['easy', 'medium', 'hard'],
    toggleRatio: 1 / 4,
    numberofChallenges: 2,
  });
  challengesEighthsSecond = challengesEighthsSecond.concat(
    genRandomChallengeCanvases({
      numCellsFilter: [8],
      difficultyFilter: ['easy', 'medium', 'hard'],
      toggleRatio: 2 / 4,
      numberofChallenges: 2,
    })
  );
  challengesEighthsSecond = challengesEighthsSecond.concat(
    genRandomChallengeCanvases({
      numCellsFilter: [8],
      difficultyFilter: ['easy', 'medium', 'hard'],
      toggleRatio: 3 / 4,
      numberofChallenges: 2,
    })
  );

  // next two challenges are halves
  let challengesHalvesFirst = genRandomChallengeCanvases({
    numCellsFilter: [2],
    difficultyFilter: ['easy', 'medium', 'hard'],
    toggleRatio: 1 / 2,
    numberofChallenges: 2,
  });

  // next two challenges are eighths
  let challengesEighthsThird = genRandomChallengeCanvases({
    numCellsFilter: [8],
    difficultyFilter: ['easy', 'medium', 'hard'],
    toggleRatio: 1 / 4,
    numberofChallenges: 2,
  });
  challengesEighthsThird = challengesEighthsThird.concat(
    genRandomChallengeCanvases({
      numCellsFilter: [8],
      difficultyFilter: ['easy', 'medium', 'hard'],
      toggleRatio: 2 / 4,
      numberofChallenges: 2,
    })
  );
  challengesEighthsThird = challengesEighthsThird.concat(
    genRandomChallengeCanvases({
      numCellsFilter: [8],
      difficultyFilter: ['easy', 'medium', 'hard'],
      toggleRatio: 3 / 4,
      numberofChallenges: 2,
    })
  );

  // final two challenges are fourths
  let challengesFourthsFirst = genRandomChallengeCanvases({
    numCellsFilter: [4],
    difficultyFilter: ['easy', 'medium', 'hard'],
    toggleRatio: 1 / 4,
    numberofChallenges: 2,
  });
  challengesFourthsFirst = challengesFourthsFirst.concat(
    genRandomChallengeCanvases({
      numCellsFilter: [4],
      difficultyFilter: ['easy', 'medium', 'hard'],
      toggleRatio: 2 / 4,
      numberofChallenges: 2,
    })
  );
  challengesFourthsFirst = challengesFourthsFirst.concat(
    genRandomChallengeCanvases({
      numCellsFilter: [4],
      difficultyFilter: ['easy', 'medium', 'hard'],
      toggleRatio: 3 / 4,
      numberofChallenges: 2,
    })
  );

  let challenges = getRandomOptions(challengesEighthsFirst, 4);

  // first two canvases are eighths
  let canvases = concatArrays<GameCanvas>([
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
    ),
  ]);
  // next two canvases are halves
  canvases = canvases.concat(
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
      ),
    ])
  );
  // next two canvases are eighths
  canvases = canvases.concat(
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
      ),
    ])
  );
  // next two canvases are fourths
  canvases = canvases.concat(
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
      ),
    ])
  );
  // next two canvases are eighths
  canvases = canvases.concat(
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
      ),
    ])
  );

  const initialLevels = initializeLevels(challenges, canvases);

  return {
    levels: [...initialLevels],
    metadata: initialStageMetadata(),
  };
};

export default genStageNine;

/* 
* stageNine.ts consists of the following:

* Levels 1 and 2 will be:
*   challenge: random eighths, easy medium and hard
*   canvas: random eighths, easy medium and hard

* Levels 3 and 4 will be:
*   challenge: random eighths, easy medium and hard
*   canvas: random halves, easy medium and hard

* Levels 5 and 6 will be:
*   challenge: random halves, easy medium and hard
*   canvas: random eighths, easy medium and hard

* Levels 7 and 8 will be:
*   challenge: random eighths, easy medium and hard
*   canvas: random fourths, easy medium and hard

* Levels 9 and 10 will be:
*   challenge: random fourths, easy medium and hard
*   canvas: random eighths, easy medium and hard

*/
