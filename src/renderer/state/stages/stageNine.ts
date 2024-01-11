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

// ------------- NIVEL NOVE PRONTO  ------------- //

const genStageNine = (): Stage => {

  // challenges
  // first challenge is eighths, with 1/4
  let challengesEighthsFirst = genRandomChallengeCanvases({
    numCellsFilter: [8],
    difficultyFilter: ['medium', 'hard'],
    toggleRatio: 1 / 4,
    numberofChallenges: 1,
  });
  // second challenge is eighths, with 3/4
  let challengesEighthsFirstTwo = genRandomChallengeCanvases({
    numCellsFilter: [8],
    difficultyFilter: ['medium', 'hard'],
    toggleRatio: 3 / 4,
    numberofChallenges: 1,
  });
  // next 2 challenges are eighths, but with only 1/2
  let challengesEighthsSecond = genRandomChallengeCanvases({
    numCellsFilter: [8],
    difficultyFilter: ['medium', 'hard'],
    toggleRatio: 1 / 2,
    numberofChallenges: 2,
  });
  // next 2 challenges are halves, only 1/2
  let challengesHalvesFirst = genRandomChallengeCanvases({
    numCellsFilter: [2],
    difficultyFilter: ['medium', 'hard'],
    toggleRatio: 1 / 2,
    numberofChallenges: 2,
  });
  // next challenge is eighths, with 3/4
  let challengesEighthsThird = genRandomChallengeCanvases({
    numCellsFilter: [8],
    difficultyFilter: ['medium', 'hard'],
    toggleRatio: 3 / 4,
    numberofChallenges: 1,
  });
  // next challenge is eighths, with 1/4
  let challengesEighthsThirdTwo = genRandomChallengeCanvases({
    numCellsFilter: [8],
    difficultyFilter: ['medium', 'hard'],
    toggleRatio: 1 / 4,
    numberofChallenges: 1,
  });

  // next challenge is fourths, with 1/4
  let challengesFourthsFirst = genRandomChallengeCanvases({
    numCellsFilter: [4],
    difficultyFilter: ['medium', 'hard'],
    toggleRatio: 1 / 4,
    numberofChallenges: 1,
  });
  // next challenge is fourths, with 3/4
  let challengesFourthsTwo = genRandomChallengeCanvases({
    numCellsFilter: [4],
    difficultyFilter: ['medium', 'hard'],
    toggleRatio: 3 / 4,
    numberofChallenges: 1,
  });

  let challenges = (getRandomOptions(challengesEighthsFirst, 1)).concat(
    getRandomOptions(challengesEighthsFirstTwo, 1),
    getRandomOptions(challengesEighthsSecond, 2),
    getRandomOptions(challengesHalvesFirst, 2),
    getRandomOptions(challengesEighthsThird, 1),
    getRandomOptions(challengesEighthsThirdTwo, 1),
    getRandomOptions(challengesFourthsFirst, 1),
    getRandomOptions(challengesFourthsTwo, 1)
  );

  // canvases
  // first two canvases are eighths
  let canvases = concatArrays<GameCanvas>([
    initializeLevelChallenges(
      getRandomOptions(
        filterChallenges({
          numCellsFilter: [8],
          difficultyFilter: ['medium', 'hard'],
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
            difficultyFilter: ['medium', 'hard'],
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
            difficultyFilter: ['medium', 'hard'],
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
            difficultyFilter: ['medium', 'hard'],
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
            difficultyFilter: ['medium', 'hard'],
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