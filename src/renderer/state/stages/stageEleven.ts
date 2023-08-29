import { GameCanvas, Stage } from '../types';
import {
  initializeLevels,
  initializeLevelChallenges,
  initialStageMetadata,
  concatArrays,
  genGridCanvas,
} from './utils';

const genStageEleven = (): Stage => ({
  levels: initializeLevels(
    initializeLevelChallenges([
      {
        challengeId: 'Circle6c', // challenge 8
        toggles: [true, false, false, false, false, false],
      },
      {
        challengeId: 'Square9a', // challenge 1
        toggles: [true, true, true, false, false, false, false, false, false],
      },
      {
        challengeId: 'Triangle9c', // challenge 4
        toggles: [true, true, false, true, true, false, true, false, true],
      },
      {
        challengeId: 'Diamond9c', // challenge 2
        toggles: [true, true, true, false, false, false, false, false, false],
      },
      {
        challengeId: 'Circle9g', // challenge 3
        toggles: [false, true, false, false, false, true, true, false, false],
      },
      {
        challengeId: 'Diamond9c', // challenge 5
        toggles: [true, true, true, true, true, true, false, false, false],
      },
      {
        challengeId: 'Square6b', // challenge 6
        toggles: [true, false, false, true, false, false],
      },
      {
        challengeId: 'Diamond6d', // challenge 7
        toggles: [true, false, false, false, true, false],
      },
      {
        challengeId: 'Triangle6d', // challenge 9
        toggles: [true, true, false, true, true, false],
      },
      {
        challengeId: 'Circle6g', // challenge 10
        toggles: [true, false, false, true, false, false],
      },
    ]),

    concatArrays<GameCanvas>([
      initializeLevelChallenges([
        { challengeId: 'Square6a' }, // challenge canvas 1
        { challengeId: 'Square6b' }, // challenge canvas 2
      ]),
      [
        genGridCanvas({ rows: 2, columns: 1 }, { rows: 2, columns: 3 }), // challenge canvas 3
        genGridCanvas({ rows: 1, columns: 2 }, { rows: 3, columns: 2 }), // challenge canvas 4
        genGridCanvas({ rows: 1, columns: 1 }, { rows: 2, columns: 3 }), // challenge canvas 5
        genGridCanvas({ rows: 3, columns: 3 }, { rows: 3, columns: 3 }), // challenge canvas 6
      ],
      initializeLevelChallenges([
        { challengeId: 'Circle9g' }, // challenge canvas 7
      ]),
      [
        genGridCanvas({ rows: 3, columns: 1 }, { rows: 3, columns: 3 }), // challenge canvas 8
        genGridCanvas({ rows: 1, columns: 3 }, { rows: 3, columns: 3 }), // challenge canvas 9
        genGridCanvas({ rows: 1, columns: 1 }, { rows: 3, columns: 3 }), // challenge canvas 10
      ],
    ])
  ),

  metadata: initialStageMetadata(),
});

export default genStageEleven;
