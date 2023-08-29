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
  return {
    levels: initializeLevels(

      // array containing the challenges above
      genRandomChallengeCanvases({
        numCellsFilter: [3],
        difficultyFilter: ['easy', 'medium', 'hard'],
        toggleRatio: 1,
        numberofChallenges: 10,
      }),

      // array containing the canvas below
      concatArrays<GameCanvas>([
        initializeLevelChallenges(
          getRandomOptions(
            filterChallenges({
              numCellsFilter: [2, 3, 6],
              difficultyFilter: ['easy', 'medium'],
            }).map((challengeId) => ({
              challengeId,
            })),
            6
          )
        ),
        initializeLevelChallenges([
          { challengeId: 'Square3b' },
          { challengeId: 'Square3b' },
          { challengeId: 'Square3b' },
          { challengeId: 'Square3b' },
        ]),
      ])

    ),
    metadata: initialStageMetadata(),
  };
};

export default genStageSix;
