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
  // first 2 challenges are eighths, with 1/4, 2/4, 3/4
  let challengesEighthsFirst = genRandomChallengeCanvases({
    numCellsFilter: [8],
    difficultyFilter: ['medium', 'hard'],
    toggleRatio: 1 / 4,
    numberofChallenges: 2,
  });
  challengesEighthsFirst = challengesEighthsFirst.concat(
    genRandomChallengeCanvases({
      numCellsFilter: [8],
      difficultyFilter: ['medium', 'hard'],
      toggleRatio: 2 / 4,
      numberofChallenges: 2,
    }),
    genRandomChallengeCanvases({
      numCellsFilter: [8],
      difficultyFilter: ['medium', 'hard'],
      toggleRatio: 3 / 4,
      numberofChallenges: 2,
    })
  );
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
  // next 2 challenges are eighths, with 1/4, 2/4, 3/4
  let challengesEighthsThird = genRandomChallengeCanvases({
    numCellsFilter: [8],
    difficultyFilter: ['medium', 'hard'],
    toggleRatio: 1 / 4,
    numberofChallenges: 2,
  });
  challengesEighthsThird = challengesEighthsThird.concat(
    genRandomChallengeCanvases({
      numCellsFilter: [8],
      difficultyFilter: ['medium', 'hard'],
      toggleRatio: 2 / 4,
      numberofChallenges: 2,
    }),
    genRandomChallengeCanvases({
      numCellsFilter: [8],
      difficultyFilter: ['medium', 'hard'],
      toggleRatio: 3 / 4,
      numberofChallenges: 2,
    })
  );
  // final 2 challenges are fourths, with 1/4, 2/4, 3/4
  let challengesFourthsFirst = genRandomChallengeCanvases({
    numCellsFilter: [4],
    difficultyFilter: ['medium', 'hard'],
    toggleRatio: 1 / 4,
    numberofChallenges: 2,
  });
  challengesFourthsFirst = challengesFourthsFirst.concat(
    genRandomChallengeCanvases({
      numCellsFilter: [4],
      difficultyFilter: ['medium', 'hard'],
      toggleRatio: 2 / 4,
      numberofChallenges: 2,
    }),
    genRandomChallengeCanvases({
      numCellsFilter: [4],
      difficultyFilter: ['medium', 'hard'],
      toggleRatio: 3 / 4,
      numberofChallenges: 2,
    }),
  );

  let challenges = (getRandomOptions(challengesEighthsFirst, 2));
  challenges = challenges.concat(getRandomOptions(challengesEighthsSecond, 2));
  challenges = challenges.concat(getRandomOptions(challengesHalvesFirst, 2));
  challenges = challenges.concat(getRandomOptions(challengesEighthsThird, 2));
  challenges = challenges.concat(getRandomOptions(challengesFourthsFirst, 2));

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