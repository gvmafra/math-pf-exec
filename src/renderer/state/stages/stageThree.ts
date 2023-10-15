import { Stage } from '../types';
import {
  initializeLevels,
  initializeLevelChallenges,
  initialStageMetadata,
  genGridCanvas,
} from './utils';

const genStageThree = (): Stage => ({
  levels: initializeLevels(
    initializeLevelChallenges([
      {
        challengeId: 'Circle2c',
        toggles: [true, false],
      },
      {
        challengeId: 'Circle2f',
        toggles: [false, true],
      },
      {
        challengeId: 'Diamond2c',
        toggles: [true, false],
      },
      {
        challengeId: 'Square2e',
        toggles: [true, false],
      },
      {
        challengeId: 'Square4c',
        toggles: [false, false, true, true],
      },
      {
        challengeId: 'Square4c',
        toggles: [true, false, false, false],
      },
      {
        challengeId: 'Square4c',
        toggles: [true, true, true, false],
      },
      {
        challengeId: 'Diamond4b',
        toggles: [false, true, false, true],
      },
      {
        challengeId: 'Circle4a',
        toggles: [false, false, true, true],
      },
      {
        challengeId: 'Circle4a',
        toggles: [true, false, false, true],
      },
    ]),
    [
      genGridCanvas({ rows: 1, columns: 1 }, { rows: [1, 2], columns: [1] }),
      genGridCanvas({ rows: 1, columns: 1 }, { rows: [1, 2], columns: [1] }),
      genGridCanvas({ rows: 1, columns: 1 }, { rows: [1], columns: [1, 2] }),
      genGridCanvas({ rows: 1, columns: 1 }, { rows: [1], columns: [1, 2] }),
      genGridCanvas({ rows: 1, columns: 1 }, { rows: [1, 2], columns: [1, 2] }),
      genGridCanvas({ rows: 2, columns: 1 }, { rows: [1], columns: [1, 2] }),
      genGridCanvas({ rows: 1, columns: 2 }, { rows: [1, 2], columns: [1] }),
      genGridCanvas({ rows: 1, columns: 1 }, { rows: [1, 2], columns: [1, 2] }),
      genGridCanvas({ rows: 1, columns: 1 }, { rows: [1, 2], columns: [1] }),
      genGridCanvas({ rows: 1, columns: 1 }, { rows: [1, 2], columns: [1] }),
    ]
  ),
  metadata: initialStageMetadata(),
});

export default genStageThree;
