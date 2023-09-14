import { GameCanvas, Stage } from '../types';
import {
  initializeLevels,
  initializeLevelChallenges,
  initialStageMetadata,
  concatArrays,
  genGridCanvas,
} from './utils';

// ------------- NIVEL CINCO PRONTO ------------- //

const genStageFive = (): Stage => ({
  levels: initializeLevels(
    initializeLevelChallenges([
      {
        challengeId: 'Circle3b', // challenge 1 --
        toggles: [false, true, false],
      },
      {
        challengeId: 'Circle3c', // challenge 2 --
        toggles: [true, true, false],
      },
      {
        challengeId: 'Diamond3c', // challenge 3 --
        toggles: [true, false, true],
      },
      {
        challengeId: 'Triangle3c', // challenge 4 --
        toggles: [false, true, true],
      },
      {
        challengeId: 'Square6b', // challenge 5 --
        toggles: [true, false, false, true, false, false],
      },
      {
        challengeId: 'Square6b', // challenge 6 --
        toggles: [true, false, false, false, false, true],
      },
      {
        challengeId: 'Square6a', // challenge 7 --
        toggles: [true, true, false, true, true, false],
      },
      {
        challengeId: 'Square6a', // challenge 8 --
        toggles: [true, false, false, true, true, true],
      },
      {
        challengeId: 'Square6a', // challenge 9 --
        toggles: [false, false, false, true, true, true],
      },
      {
        challengeId: 'Square6a', // challenge 10 --
        toggles: [false, false, true, false, true ,true],
      },
    ]),
    
    concatArrays<GameCanvas>([
      [
        genGridCanvas({ rows: 2, columns: 1 }, { rows: 2, columns: 3 }), // challenge canvas 1
        genGridCanvas({ rows: 2, columns: 1 }, { rows: 2, columns: 3 }), // challenge canvas 2
        genGridCanvas({ rows: 1, columns: 2 }, { rows: 3, columns: 2 }), // challenge canvas 3
        genGridCanvas({ rows: 1, columns: 2 }, { rows: 3, columns: 2 }), // challenge canvas 4
      ],
      initializeLevelChallenges([
        { challengeId: 'Square3b' }, // challenge canvas 5
        { challengeId: 'Square3b' }, // challenge canvas 6
        { challengeId: 'Square3a' }, // challenge canvas 7
        { challengeId: 'Square3a' }, // challenge canvas 8
        { challengeId: 'Square2a' }, // challenge canvas 9
        { challengeId: 'Square2g' }, // challenge canvas 10
      ]),
    ])
  ),

  metadata: initialStageMetadata(),
});

export default genStageFive;
