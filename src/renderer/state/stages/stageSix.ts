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

  let canvases = concatArrays<GameCanvas>([
    initializeLevelChallenges(
      getRandomOptions(
        filterChallenges({
          numCellsFilter: [6],
          difficultyFilter: ['easy', 'medium'],
        }).map((challengeId) => ({
          challengeId,
        })),
        3
      )
    ),
  ]);
  canvases = canvases.concat(
    concatArrays<GameCanvas>([
      initializeLevelChallenges(
        getRandomOptions(
          filterChallenges({
            numCellsFilter: [3],
            difficultyFilter: ['easy', 'medium'],
          }).map((challengeId) => ({
            challengeId,
          })),
          3
        )
      ),
    ])
  );
  canvases = canvases.concat(
    concatArrays<GameCanvas>([
      initializeLevelChallenges(
        getRandomOptions(
          filterChallenges({
            numCellsFilter: [2],
            difficultyFilter: ['easy', 'medium'],
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
            numCellsFilter: [6],
            difficultyFilter: ['easy', 'medium'],
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
