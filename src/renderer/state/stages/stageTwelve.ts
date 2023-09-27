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
  // first 2 challenges are ninths, with 2/9, 4/9, 6/9, 8/9 - easy, medium and hard
  let challengesNinthsFirst = genRandomChallengeCanvases({
    numCellsFilter: [9],
    difficultyFilter: ['easy', 'medium', 'hard'],
    toggleRatio: 2 / 9,
    numberofChallenges: 2,
  });
  challengesNinthsFirst = challengesNinthsFirst.concat(
    genRandomChallengeCanvases({
      numCellsFilter: [9],
      difficultyFilter: ['easy', 'medium', 'hard'],
      toggleRatio: 4 / 9,
      numberofChallenges: 2,
    }),
    genRandomChallengeCanvases({
      numCellsFilter: [9],
      difficultyFilter: ['easy', 'medium', 'hard'],
      toggleRatio: 6 / 9,
      numberofChallenges: 2,
    }),
    genRandomChallengeCanvases({
      numCellsFilter: [9],
      difficultyFilter: ['easy', 'medium', 'hard'],
      toggleRatio: 8 / 9,
      numberofChallenges: 2,
    })
  );
  // next 2 challenges are ninths, with 1/3, 2/3 - easy, medium and hard
  let challengesNinthsSecond = genRandomChallengeCanvases({
    numCellsFilter: [9],
    difficultyFilter: ['easy', 'medium', 'hard'],
    toggleRatio: 1 / 3,
    numberofChallenges: 2,
  });
  challengesNinthsSecond = challengesNinthsSecond.concat(
    genRandomChallengeCanvases({
      numCellsFilter: [9],
      difficultyFilter: ['easy', 'medium', 'hard'],
      toggleRatio: 2 / 3,
      numberofChallenges: 2,
    })
  );
  // next 2 challenges are thirds, with 1/3, 2/3 - easy, medium and hard
  let challengesThirdsFirst = genRandomChallengeCanvases({
    numCellsFilter: [3],
    difficultyFilter: ['easy', 'medium', 'hard'],
    toggleRatio: 1 / 3,
    numberofChallenges: 2,
  });
  challengesThirdsFirst = challengesThirdsFirst.concat(
    genRandomChallengeCanvases({
      numCellsFilter: [3],
      difficultyFilter: ['easy', 'medium', 'hard'],
      toggleRatio: 2 / 3,
      numberofChallenges: 2,
    })
  );
  // next 2 challenges are ninths, with 1/3, 2/3 - easy, medium and hard
  let challengesThirdsSecond = genRandomChallengeCanvases({
    numCellsFilter: [3],
    difficultyFilter: ['easy', 'medium', 'hard'],
    toggleRatio: 1 / 3,
    numberofChallenges: 2,
  });
  challengesThirdsSecond = challengesThirdsSecond.concat(
    genRandomChallengeCanvases({
      numCellsFilter: [3],
      difficultyFilter: ['easy', 'medium', 'hard'],
      toggleRatio: 2 / 3,
      numberofChallenges: 2,
    })
  );
  // final 2 challenges are sixths, with 1/3, 2/3 - easy, medium and hard
  let challengesSixthsFirst = genRandomChallengeCanvases({
    numCellsFilter: [6],
    difficultyFilter: ['easy', 'medium', 'hard'],
    toggleRatio: 1 / 3,
    numberofChallenges: 2,
  });
  challengesSixthsFirst = challengesSixthsFirst.concat(
    genRandomChallengeCanvases({
      numCellsFilter: [6],
      difficultyFilter: ['easy', 'medium', 'hard'],
      toggleRatio: 2 / 3,
      numberofChallenges: 2,
    })
  );

  let challenges = getRandomOptions(challengesNinthsFirst, 2);
  challenges = challenges.concat(getRandomOptions(challengesNinthsSecond, 2));
  challenges = challenges.concat(getRandomOptions(challengesThirdsFirst, 2));
  challenges = challenges.concat(getRandomOptions(challengesThirdsSecond, 2));
  challenges = challenges.concat(getRandomOptions(challengesSixthsFirst, 2));

  // canvases
  // first 2 canvases are ninths - easy, medium and hard
  let canvases = concatArrays<GameCanvas>([
    initializeLevelChallenges(
      getRandomOptions(
        filterChallenges({
          numCellsFilter: [9],
          difficultyFilter: ['easy', 'medium', 'hard'],
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
          difficultyFilter: ['easy', 'medium', 'hard'],
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
          difficultyFilter: ['easy', 'medium', 'hard'],
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
          difficultyFilter: ['easy', 'medium', 'hard'],
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
          difficultyFilter: ['easy', 'medium', 'hard'],
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