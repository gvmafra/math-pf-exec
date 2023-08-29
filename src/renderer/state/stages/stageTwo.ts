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

const genStageTwo = (): Stage => {
  return {
    levels: initializeLevels(
      genRandomChallengeCanvases({
        numCellsFilter: [2],
        difficultyFilter: ['easy'],
        toggleRatio: 0.5,
        numberofChallenges: 10,
      }),

      concatArrays<GameCanvas>([
        initializeLevelChallenges(
          getRandomOptions(
            filterChallenges({
              numCellsFilter: [2],
              difficultyFilter: ['easy'],
            }).map((challengeId) => ({
              challengeId,
            })),
            6
          )
        ),

        initializeLevelChallenges([
          { challengeId: 'Square4c' },
          { challengeId: 'Square4c' },
          { challengeId: 'Square4c' },
          { challengeId: 'Square4c' },
        ]),
      ])
    ),
    metadata: initialStageMetadata(),
  };
};

export default genStageTwo;
