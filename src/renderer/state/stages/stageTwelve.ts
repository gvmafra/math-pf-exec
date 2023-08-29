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
      genRandomChallengeCanvases({
        numCellsFilter: [3],
        difficultyFilter: ['easy', 'medium'],
        toggleRatio: 0.3,
        numberofChallenges: 3,
      }),

      concatArrays<GameCanvas>([
        initializeLevelChallenges(
          getRandomOptions(
            { challengeId: 'Square6a' },
            { challengeId: 'Square6b' },
            { challengeId: 'Square4c' },
          )
        ),
      ])
    ),
    metadata: initialStageMetadata(),
  };
};

export default genStageSix;


/*

        initializeLevelChallenges([
          { challengeId: 'Square4c' },
          { challengeId: 'Square4c' },
          { challengeId: 'Square4c' },
          { challengeId: 'Square4c' },
        ]),

*/