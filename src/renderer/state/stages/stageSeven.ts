import { GameCanvas, Stage } from '../types';
import {
  initializeLevels,
  initializeLevelChallenges,
  initialStageMetadata,
  concatArrays,
  genGridCanvas,
} from './utils';

const genStageSeven = (): Stage => ({
  levels: initializeLevels(
    initializeLevelChallenges([
      {
        challengeId: 'Square8a', // challenge 1
        toggles: [true, false, false, false, false, false, false, false],
      },
      {
        challengeId: 'Square8b', // challenge 2
        toggles: [true, false, false, false, true, false, false, false],
      },
      {
        challengeId: 'Square8c', // challenge 3
        toggles: [true, true, false, false, true, false, false, false],
      },
      {
        challengeId: 'Square8c', // challenge 4
        toggles: [false, true, false, true, true, false, true, false],
      },
      {
        challengeId: 'Square8e', // challenge 5
        toggles: [true, true, true, true, false, false, false, false],
      },
      {
        challengeId: 'Square8e', // challenge 6
        toggles: [false, true, false, true, true, false, true, false],
      },
      {
        challengeId: 'Square8a', // challenge 7
        toggles: [false, true, false, true, true, false, true, false],
      },
      {
        challengeId: 'Circle8c', // challenge 8
        toggles: [false, true, false, true, true, false, true, false],
      },
      {
        challengeId: 'Circle8c', // challenge 9
        toggles: [false, true, false, true, true, false, true, false],
      },
      {
        challengeId: 'Square8h', // challenge 10
        toggles: [false, true, false, true, true, false, true, false],
      },
    ]),

    concatArrays<GameCanvas>([
      initializeLevelChallenges([
        { challengeId: 'Square8a' }, // challenge canvas 1
        { challengeId: 'Square8a' }, // challenge canvas 2
        { challengeId: 'Square8a' }, // challenge canvas 3
        { challengeId: 'Square8a' }, // challenge canvas 4
        { challengeId: 'Square8a' }, // challenge canvas 5
        { challengeId: 'Square8a' }, // challenge canvas 6
      ]),
      [
        genGridCanvas({ rows: 1, columns: 2 }, { rows: 1, columns: 2 }), // challenge canvas 7
        genGridCanvas({ rows: 1, columns: 2 }, { rows: 1, columns: 2 }), // challenge canvas 8
        genGridCanvas({ rows: 2, columns: 1 }, { rows: 2, columns: 3 }), // challenge canvas 9
        genGridCanvas({ rows: 1, columns: 2 }, { rows: 3, columns: 2 }), // challenge canvas 10
      ],
    ])
  ),

  metadata: initialStageMetadata(),
});

export default genStageSeven;
