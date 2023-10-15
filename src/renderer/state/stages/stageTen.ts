import { GameCanvas, Stage } from '../types';
import {
  initializeLevels,
  initializeLevelChallenges,
  initialStageMetadata,
  concatArrays,
  genGridCanvas,
} from './utils';

// ------------- NIVEL DEZ PRONTO ------------- //

const genStageTen = (): Stage => ({
  levels: initializeLevels(
    initializeLevelChallenges([
      {
        challengeId: 'Square9a', // challenge 1 --
        toggles: [true, false, false, false, false, false, false, false, false],
      },
      {
        challengeId: 'Diamond9c', // challenge 2 --
        toggles: [true, true, true, false, false, false, false, false, false],
      },
      {
        challengeId: 'Circle9g', // challenge 3 --
        toggles: [false, false, false, false, false, false, true, true, true],
      },
      {
        challengeId: 'Triangle9c', // challenge 4 --
        toggles: [true, true, true, true, false, false, true, false, false],
      },
      {
        challengeId: 'Square9a', // challenge 5 --
        toggles: [true, false, false, true, false, false, true, false, false],
      },
      {
        challengeId: 'Square9a', // challenge 6 --
        toggles: [true, false, false, true, false, false, true, false, false],
      },
      {
        challengeId: 'Square9a', // challenge 7 --
        toggles: [true, false, false, false, true, false, false, false, true],
      },
      {
        challengeId: 'Circle9g', // challenge 8 --
        toggles: [false, false, false, false, false, false, true, true, true],
      },
      {
        challengeId: 'Square3a', // challenge 9 --
        toggles: [true, false, false],
      },
      {
        challengeId: 'Circle3c', // challenge 10 --
        toggles: [true, true, false],
      },
    ]),

    concatArrays<GameCanvas>([
      initializeLevelChallenges([
        { challengeId: 'Square9a' }, // challenge canvas 1
        { challengeId: 'Square9a' }, // challenge canvas 2
      ]),
      [
        genGridCanvas({ rows: 1, columns: 3 }, { rows: [1, 3], columns: [3] }), // challenge canvas 3
        genGridCanvas({ rows: 1, columns: 1 }, { rows: [1, 3], columns: [1, 3] }), // challenge canvas 4
        genGridCanvas({ rows: 1, columns: 3 }, { rows: [1], columns: [3] }), // challenge canvas 5
        genGridCanvas({ rows: 1, columns: 1 }, { rows: [1], columns: [1, 3] }), // challenge canvas 6
        genGridCanvas({ rows: 1, columns: 1 }, { rows: [1], columns: [1, 3] }), // challenge canvas 7
      ],
      initializeLevelChallenges([
        { challengeId: 'Triangle3d' }, // challenge canvas 8
        { challengeId: 'Diamond9c' }, // challenge canvas 9
        { challengeId: 'Triangle9c' }, // challenge canvas 10
      ]),
    ])
  ),

  metadata: initialStageMetadata(),
});

export default genStageTen;
