import { Stage } from '../types';
import {
  initializeLevels,
  initializeLevelChallenges,
  initialStageMetadata,
  genGridCanvas,
} from './utils';

const genStageFour = (): Stage => ({
  levels: initializeLevels(
    initializeLevelChallenges([
      {
        challengeId: 'Square3a',
        toggles: [true, false, true],
      },
      {
        challengeId: 'Circle3b',
        toggles: [false, true, false],
      },
      {
        challengeId: 'Circle3b',
        toggles: [true, false, false],
      },
      {
        challengeId: 'Triangle3c',
        toggles: [true, false, false],
      },
      {
        challengeId: 'Circle3b',
        toggles: [false, false, true],
      },
      {
        challengeId: 'Square3b',
        toggles: [true, false, false],
      },
      {
        challengeId: 'Square3b',
        toggles: [true, true, false],
      },
      {
        challengeId: 'Square3a',
        toggles: [false, true, false],
      },
      {
        challengeId: 'Square3a',
        toggles: [false, false, true],
      },
      {
        challengeId: 'Square3a',
        toggles: [true, false, false],
      },
    ]),

    [
      genGridCanvas({ rows: 1, columns: 3 }, { rows: 1, columns: 3 }), // challenge canvas 1
      genGridCanvas({ rows: 1, columns: 3 }, { rows: 1, columns: 3 }), // challenge canvas 2
      genGridCanvas({ rows: 1, columns: 1 }, { rows: 3, columns: 1 }), // challenge canvas 3
      genGridCanvas({ rows: 1, columns: 1 }, { rows: 3, columns: 1 }), // challenge canvas 4
      genGridCanvas({ rows: 1, columns: 1 }, { rows: 1, columns: 3 }), // challenge canvas 5
      genGridCanvas({ rows: 2, columns: 1 }, { rows: 2, columns: 3 }), // challenge canvas 6
      genGridCanvas({ rows: 3, columns: 2 }, { rows: 3, columns: 2 }), // challenge canvas 7
      genGridCanvas({ rows: 2, columns: 3 }, { rows: 2, columns: 3 }), // challenge canvas 8
      genGridCanvas({ rows: 2, columns: 1 }, { rows: 2, columns: 3 }), // challenge canvas 9
      genGridCanvas({ rows: 2, columns: 1 }, { rows: 2, columns: 3 }), // challenge canvas 10
    ]
  ),
  metadata: initialStageMetadata(),
});

export default genStageFour;
