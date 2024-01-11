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

// ------------- NIVEL DOZE PRONTO ------------- //

const genStageTwelve = (): Stage => {

  // challenges
  // first 2 challenges are ninths, with 4/9 and 7/9 - easy, medium and hard
  let challengesNinthsFirst = genRandomChallengeCanvases({
    numCellsFilter: [9],
    difficultyFilter: ['medium', 'hard'],
    toggleRatio: 4 / 9,
    numberofChallenges: 1,
  });
  let challengesNinthsFirstTwo = genRandomChallengeCanvases({
    numCellsFilter: [9],
    difficultyFilter: ['medium', 'hard'],
    toggleRatio: 7 / 9,
    numberofChallenges: 1,
  });

  // next 2 challenges are ninths, with 1/3, 2/3 - easy, medium and hard
  let challengesNinthsSecond = genRandomChallengeCanvases({
    numCellsFilter: [9],
    difficultyFilter: ['medium', 'hard'],
    toggleRatio: 1 / 3,
    numberofChallenges: 1,
  });
  let challengesNinthsSecondTwo = genRandomChallengeCanvases({
    numCellsFilter: [9],
    difficultyFilter: ['medium', 'hard'],
    toggleRatio: 2 / 3,
    numberofChallenges: 1,
  });

  // next 2 challenges are thirds, with 1/3, 2/3 - easy, medium and hard
  let challengesThirdsFirst = genRandomChallengeCanvases({
    numCellsFilter: [3],
    difficultyFilter: ['medium', 'hard'],
    toggleRatio: 1 / 3,
    numberofChallenges: 1,
  });
  let challengesThirdsFirstTwo = genRandomChallengeCanvases({
    numCellsFilter: [3],
    difficultyFilter: ['medium', 'hard'],
    toggleRatio: 2 / 3,
    numberofChallenges: 1,
  });

  // next 2 challenges are ninths, with 1/3, 2/3 - easy, medium and hard
  let challengesThirdsSecond = genRandomChallengeCanvases({
    numCellsFilter: [9],
    difficultyFilter: ['medium', 'hard'],
    toggleRatio: 1 / 3,
    numberofChallenges: 1,
  });
  let challengesThirdsSecondTwo = genRandomChallengeCanvases({
    numCellsFilter: [9],
    difficultyFilter: ['medium', 'hard'],
    toggleRatio: 2 / 3,
    numberofChallenges: 1,
  });

  // final 2 challenges are sixths, with 1/3, 2/3 - easy, medium and hard
  let challengesSixthsFirst = genRandomChallengeCanvases({
    numCellsFilter: [6],
    difficultyFilter: ['medium', 'hard'],
    toggleRatio: 2 / 3,
    numberofChallenges: 1,
  });
  let challengesSixthsFirstTwo = genRandomChallengeCanvases({
    numCellsFilter: [6],
    difficultyFilter: ['medium', 'hard'],
    toggleRatio: 1 / 3,
    numberofChallenges: 1,
  });

  let challenges = getRandomOptions(challengesNinthsFirst, 1);
  challenges = challenges.concat(getRandomOptions(challengesNinthsFirstTwo, 1))
  challenges = challenges.concat(getRandomOptions(challengesNinthsSecond, 1));
  challenges = challenges.concat(getRandomOptions(challengesNinthsSecondTwo, 1));
  challenges = challenges.concat(getRandomOptions(challengesThirdsFirst, 1));
  challenges = challenges.concat(getRandomOptions(challengesThirdsFirstTwo, 1));
  challenges = challenges.concat(getRandomOptions(challengesThirdsSecond, 1));
  challenges = challenges.concat(getRandomOptions(challengesThirdsSecondTwo, 1));
  challenges = challenges.concat(getRandomOptions(challengesSixthsFirst, 1));
  challenges = challenges.concat(getRandomOptions(challengesSixthsFirstTwo, 1));

  // canvases
  // first 2 canvases are ninths - easy, medium and hard
  let canvases = concatArrays<GameCanvas>([
    initializeLevelChallenges(
      getRandomOptions(
        filterChallenges({
          numCellsFilter: [9],
          difficultyFilter: ['medium', 'hard'],
        }).map((challengeId) => ({
          challengeId,
        })),
        2
      )
    ),
  ]);
  // next 2 canvases are thirds - easy, medium and hard
  canvases = canvases.concat(
    initializeLevelChallenges(
      getRandomOptions(
        filterChallenges({
          numCellsFilter: [3],
          difficultyFilter: ['medium', 'hard'],
        }).map((challengeId) => ({
          challengeId,
        })),
        2
      )
    )
  );
  // next 2 canvases are ninths - easy, medium and hard
  canvases = canvases.concat(
    initializeLevelChallenges(
      getRandomOptions(
        filterChallenges({
          numCellsFilter: [9],
          difficultyFilter: ['medium', 'hard'],
        }).map((challengeId) => ({
          challengeId,
        })),
        2
      )
    )
  );
  // next 2 canvases are sixths - easy, medium and hard
  canvases = canvases.concat(
    initializeLevelChallenges(
      getRandomOptions(
        filterChallenges({
          numCellsFilter: [6],
          difficultyFilter: ['medium', 'hard'],
        }).map((challengeId) => ({
          challengeId,
        })),
        2
      )
    )
  );
  // final 2 canvases are ninths - easy, medium and hard
  canvases = canvases.concat(
    initializeLevelChallenges(
      getRandomOptions(
        filterChallenges({
          numCellsFilter: [9],
          difficultyFilter: ['medium', 'hard'],
        }).map((challengeId) => ({
          challengeId,
        })),
        2
      )
    )
  );

  const initialLevels = initializeLevels(challenges, canvases);

  return {
    levels: [...initialLevels],
    metadata: initialStageMetadata(),
  };

};

export default genStageTwelve;