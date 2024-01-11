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

// ------------- NIVEL SEIS PRONTO  ------------- //

const genStageSix = (): Stage => {
  // challenges
  // first two challenges are thirds, with 1/3
  let challengesThirdsFirst = genRandomChallengeCanvases({
    numCellsFilter: [3],
    difficultyFilter: ['easy', 'medium'],
    toggleRatio: 1 / 3,
    numberofChallenges: 2,
  });
  // next challenge is thirds, with 2/3
  let challengesThirdsFirstTwo = genRandomChallengeCanvases({
    numCellsFilter: [3],
    difficultyFilter: ['easy', 'medium'],
    toggleRatio: 2 / 3,
    numberofChallenges: 1,
  });
  // next two challenges are sixths, with 1/3
  let challengesThirdsSecond = genRandomChallengeCanvases({
    numCellsFilter: [6],
    difficultyFilter: ['easy', 'medium'],
    toggleRatio: 1 / 3,
    numberofChallenges: 3,
  });
  // next challenge is a sixth, with 2/3
  let challengesThirdsSecondTwo = genRandomChallengeCanvases({
    numCellsFilter: [6],
    difficultyFilter: ['easy', 'medium'],
    toggleRatio: 2 / 3,
    numberofChallenges: 1,
  });

  let challenges = getRandomOptions(challengesThirdsFirst, 2);
  challenges = challenges.concat(challengesThirdsFirstTwo);
  challenges = challenges.concat(getRandomOptions(challengesThirdsSecond, 2));
  challenges = challenges.concat(challengesThirdsSecondTwo);

  // next two challenges are sixths, with 1/2
  challenges = challenges.concat(
    genRandomChallengeCanvases({
      numCellsFilter: [6],
      difficultyFilter: ['easy', 'medium'],
      toggleRatio: 0.5,
      numberofChallenges: 2,
    })
  );
  // next two challenges are halves, with 1/2
  challenges = challenges.concat(
    genRandomChallengeCanvases({
      numCellsFilter: [2],
      difficultyFilter: ['easy', 'medium'],
      toggleRatio: 0.5,
      numberofChallenges: 2,
    })
  );

  // canvases
  // first three canvases are a random selection of the shapeIds Square6a and Square6b
  let canvases = concatArrays<GameCanvas>([
    initializeLevelChallenges(
      getRandomOptions(
        filterChallenges({
          numCellsFilter: [6],
          shapeFilter: ['square'],
          letterFilter: ['a', 'b'],
        }).map((challengeId) => ({
          challengeId,
        })),
        2
      )
    ),
  ]);
  canvases = canvases.concat(
    concatArrays<GameCanvas>([
      initializeLevelChallenges(
        getRandomOptions(
          filterChallenges({
            numCellsFilter: [6],
            shapeFilter: ['square'],
            letterFilter: ['a', 'b'],
          }).map((challengeId) => ({
            challengeId,
          })),
          1
        )
      ),
    ])
  );
  // next three canvases are a random selection of the shapeIds Square3a and Square3b
  canvases = canvases.concat(
    concatArrays<GameCanvas>([
      initializeLevelChallenges(
        getRandomOptions(
          filterChallenges({
            numCellsFilter: [3],
            shapeFilter: ['square'],
            letterFilter: ['a', 'b'],
          }).map((challengeId) => ({
            challengeId,
          })),
          2
        )
      ),
    ])
  );
  canvases = canvases.concat(
    concatArrays<GameCanvas>([
      initializeLevelChallenges(
        getRandomOptions(
          filterChallenges({
            numCellsFilter: [3],
            shapeFilter: ['square'],
            letterFilter: ['a', 'b'],
          }).map((challengeId) => ({
            challengeId,
          })),
          1
        )
      ),
    ])
  );
  // the next two canvases are a random selection of the shapeIds Square2a and Square2b
  canvases = canvases.concat(
    concatArrays<GameCanvas>([
      initializeLevelChallenges(
        getRandomOptions(
          filterChallenges({
            numCellsFilter: [2],
            shapeFilter: ['square'],
            letterFilter: ['a', 'b'],
          }).map((challengeId) => ({
            challengeId,
          })),
          2
        )
      ),
    ])
  );
  // the final two canvases are a random selection of the shapeIds Square6a and Square6b
  canvases = canvases.concat(
    concatArrays<GameCanvas>([
      initializeLevelChallenges(
        getRandomOptions(
          filterChallenges({
            numCellsFilter: [6],
            shapeFilter: ['square'],
            letterFilter: ['a', 'b'],
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

export default genStageSix;
