import { Stage } from '../types';
import {
  initializeLevels,
  initializeLevelChallenges,
  initialStageMetadata,
  genGridCanvas,
} from './utils';

// ------------- NIVEL QUATRO PRONTO  ------------- //

const genStageFour = (): Stage => ({
  levels: initializeLevels(
    initializeLevelChallenges([
      // 1
      {
        challengeId: 'Square3a',
        toggles: [true, false, false],
      },
      // 2
      {
        challengeId: 'Circle3b',
        toggles: [false, true, false],
      },
      // 3
      {
        challengeId: 'Circle3b',
        toggles: [true, false, true],
      },
      // 4
      {
        challengeId: 'Triangle3c',
        toggles: [false, true, true],
      },
      // 5
      {
        challengeId: 'Circle3b',
        toggles: [true, false, true],
      },
      // 6
      {
        challengeId: 'Square3b',
        toggles: [true, false, true],
      },
      // 7
      {
        challengeId: 'Square3b',
        toggles: [false, false, true],
      },
      // 8
      {
        challengeId: 'Square3a',
        toggles: [false, true, true],
      },
      // 9
      {
        challengeId: 'Square3a',
        toggles: [true, false, false],
      },
      // 10
      {
        challengeId: 'Square3a',
        toggles: [true, false, true],
      },
    ]),

    [
      genGridCanvas({ rows: 1, columns: 3 }, { rows: [1], columns: [3] }), // challenge canvas 1
      genGridCanvas({ rows: 1, columns: 3 }, { rows: [1], columns: [3] }), // challenge canvas 2
      genGridCanvas({ rows: 1, columns: 1 }, { rows: [1, 2, 3], columns: [1] }), // challenge canvas 3
      genGridCanvas({ rows: 1, columns: 1 }, { rows: [1, 2, 3], columns: [1] }), // challenge canvas 4
      genGridCanvas({ rows: 1, columns: 1 }, { rows: [1], columns: [1, 2, 3] }), // challenge canvas 5
      genGridCanvas({ rows: 1, columns: 1 }, { rows: [1], columns: [1, 2, 3] }), // challenge canvas 6
      genGridCanvas({ rows: 3, columns: 2 }, { rows: [3], columns: [2] }), // challenge canvas 7
      genGridCanvas({ rows: 2, columns: 3 }, { rows: [2], columns: [3] }), // challenge canvas 8
      genGridCanvas({ rows: 2, columns: 1 }, { rows: [2], columns: [1, 2, 3] }), // challenge canvas 9
      genGridCanvas({ rows: 2, columns: 1 }, { rows: [2], columns: [1, 2, 3] }), // challenge canvas 10
    ]
  ),
  metadata: initialStageMetadata(),
});

export default genStageFour;
