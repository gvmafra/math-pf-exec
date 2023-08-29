import { GameCanvas, Stage } from '../types';
import {
  initializeLevels,
  initializeLevelChallenges,
  initialStageMetadata,
  concatArrays,
  genGridCanvas,
} from './utils';

const genStageTen = (): Stage => ({
  levels: initializeLevels(
    initializeLevelChallenges([
      {
        challengeId: 'Square9a', // challenge 1
        toggles: [true, false, false, false, false, false, false, false, false],
      },
      {
        challengeId: 'Diamond9c', // challenge 2
        toggles: [true, true, true, false, false, false, false, false, false],
      },
      {
        challengeId: 'Circle9g', // challenge 3
        toggles: [true, true, true, true, false, false, false, false, false],
      },
      {
        challengeId: 'Triangle9c', // challenge 4
        toggles: [true, true, true, true, true, false, false, false, false],
      },
      {
        challengeId: 'Square9a', // challenge 5
        toggles: [true, false, false, true, false, false, true, false, false],
      },
      {
        challengeId: 'Square9a', // challenge 6
        toggles: [true, false, false, true, false, false, true, false, false],
      },
      {
        challengeId: 'Square9a', // challenge 7
        toggles: [true, false, false, false, true, false, false, false, true],
      },
      {
        challengeId: 'Circle9g', // challenge 8
        toggles: [true, true, true, false, false, false, false, false, false],
      },
      {
        challengeId: 'Square3a', // challenge 9
        toggles: [true, false, false],
      },
      {
        challengeId: 'Circle3c', // challenge 10
        toggles: [true, false, false],
      },
    ]),

    concatArrays<GameCanvas>([
      initializeLevelChallenges([
        { challengeId: 'Square9a' }, // challenge canvas 3
        { challengeId: 'Square9a' }, // challenge canvas 4
      ]),
      [
        genGridCanvas({ rows: 1, columns: 3 }, { rows: 3, columns: 3 }), // challenge canvas 1
        genGridCanvas({ rows: 1, columns: 1 }, { rows: 3, columns: 3 }), // challenge canvas 2
        genGridCanvas({ rows: 1, columns: 3 }, { rows: 1, columns: 3 }), // challenge canvas 5
        genGridCanvas({ rows: 1, columns: 1 }, { rows: 1, columns: 3 }), // challenge canvas 6
        genGridCanvas({ rows: 1, columns: 1 }, { rows: 1, columns: 3 }), // challenge canvas 7
      ],
      initializeLevelChallenges([
        { challengeId: 'Triangle3d' }, // challenge canvas 7
        { challengeId: 'Diamond9c' }, // challenge canvas 8
        { challengeId: 'Triangle9c' }, // challenge canvas 9
      ]),
    ])
  ),

  metadata: initialStageMetadata(),
});

export default genStageTen;
