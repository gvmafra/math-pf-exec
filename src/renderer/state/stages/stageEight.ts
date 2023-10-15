import { GameCanvas, Stage } from '../types';
import {
  initializeLevels,
  initializeLevelChallenges,
  initialStageMetadata,
  concatArrays,
  genGridCanvas,
} from './utils';

// ------------- NIVEL OITO PRONTO ------------- //

const genStageEight = (): Stage => ({
  levels: initializeLevels(
    initializeLevelChallenges([
      {
        challengeId: 'Square2b', // challenge 1 --
        toggles: [true, false],
      },
      {
        challengeId: 'Circle2d', // challenge 2 --
        toggles: [false, true],
      },
      {
        challengeId: 'Square2e', // challenge 3 --
        toggles: [true, false],
      },
      {
        challengeId: 'Triangle2c', // challenge 4 --
        toggles: [false, true],
      },
      {
        challengeId: 'Diamond8d', // challenge 5 --
        toggles: [false, false, true, true, false, false, false, false],
      },
      {
        challengeId: 'Diamond8e', // challenge 6 --
        toggles: [false, true, true, true, false, true, true, true],
      },
      {
        challengeId: 'Circle8c', // challenge 7 --
        toggles: [true, true,false, false, true, true, true, true],
      },
      {
        challengeId: 'Square4e', // challenge 8 --
        toggles: [true, false, false, true],
      },
      {
        challengeId: 'Square4h', // challenge 9 --
        toggles: [true, true, true, false],
      },
      {
        challengeId: 'Square4c', // challenge 10 --
        toggles: [true, false, false, false],
      },
    ]),

    concatArrays<GameCanvas>([
      [
        genGridCanvas({ rows: 4, columns: 1 }, { rows: [4], columns: [1, 2] }), // challenge canvas 1
        genGridCanvas({ rows: 1, columns: 4 }, { rows: [1, 2], columns: [4] }), // challenge canvas 2
      ],
      initializeLevelChallenges([
        { challengeId: 'Square8h' }, // challenge canvas 3
        { challengeId: 'Triangle8e' }, // challenge canvas 4
      ]),
      [
        genGridCanvas({ rows: 1, columns: 1 }, { rows: [1, 2], columns: [1, 2] }), // challenge canvas 5
        genGridCanvas({ rows: 1, columns: 1 }, { rows: [1, 2], columns: [1, 2] }), // challenge canvas 6
      ],
      initializeLevelChallenges([
        { challengeId: 'Square4h' }, // challenge canvas 7
        { challengeId: 'Square8h' }, // challenge canvas 8
        { challengeId: 'Diamond8e' }, // challenge canvas 9
      ]),
      [
        genGridCanvas({ rows: 2, columns: 1 }, { rows: [2], columns: [1, 4] }), // challenge canvas 10
      ],
    ])
  ),

  metadata: initialStageMetadata(),
});

export default genStageEight;
