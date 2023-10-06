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
  // first three challenges are thirds, with 1/3, 2/3
  let challengesThirdsFirst = genRandomChallengeCanvases({
    numCellsFilter: [3],
    difficultyFilter: ['easy', 'medium'],
    toggleRatio: 1 / 3,
    numberofChallenges: 3,
  });
  challengesThirdsFirst = challengesThirdsFirst.concat(
    genRandomChallengeCanvases({
      numCellsFilter: [3],
      difficultyFilter: ['easy', 'medium'],
      toggleRatio: 2 / 3,
      numberofChallenges: 3,
    })
  );
  // next three challenges are sixths, with 1/3, 2/3
  let challengesThirdsSecond = genRandomChallengeCanvases({
    numCellsFilter: [6],
    difficultyFilter: ['easy', 'medium'],
    toggleRatio: 1 / 3,
    numberofChallenges: 3,
  });
  challengesThirdsSecond = challengesThirdsSecond.concat(
    genRandomChallengeCanvases({
      numCellsFilter: [6],
      difficultyFilter: ['easy', 'medium'],
      toggleRatio: 2 / 3,
      numberofChallenges: 3,
    })
  );

  let challenges = getRandomOptions(challengesThirdsFirst, 3);
  challenges = challenges.concat(getRandomOptions(challengesThirdsSecond, 3));

  challenges = challenges.concat(
    genRandomChallengeCanvases({
      numCellsFilter: [6],
      difficultyFilter: ['easy', 'medium'],
      toggleRatio: 0.5,
      numberofChallenges: 2,
    })
  );
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
    // the first three challenges inside GameCanvas are a random selection of the shapeIds Square6a and Square6b
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
