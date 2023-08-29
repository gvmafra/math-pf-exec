import genStageOne from './stages/stageOne';
import genStageTwo from './stages/stageTwo';
import genStageThree from './stages/stageThree';
import genStageFour from './stages/stageFour';
import genStageFive from './stages/stageFive';
import genStageSix from './stages/stageSix';
import genStageSeven from './stages/stageSeven';
import genStageEight from './stages/stageEight';
import genStageNine from './stages/stageNine';
import genStageTen from './stages/stageTen';
import genStageEleven from './stages/stageEleven';
import genStageTwelve from './stages/stageTwelve';

import { GameState } from './types';

// Generate a new initialState
const genInitialState = (): GameState => ({
  currentStage: 0,
  justAdvancedStage: false,
  finishedGame: false,
  stages: [
    genStageOne(),
    genStageTwo(),
    genStageThree(),
    genStageFour(),
    genStageFive(),
    // genStageSix(),    60% done
    genStageSeven(),
    genStageEight(),
    // genStageNine(),    to do
    genStageTen(),
    genStageEleven(),
    // genStageTwelve(),    to do
  ],
});

export default genInitialState;

// initializeLevelGrids([
//   { current: { rows: 2, columns: 1 }, max: { rows: 2, columns: 1 } },
//   { current: { rows: 2, columns: 2 }, max: { rows: 4, columns: 4 } },
//   { current: { rows: 2, columns: 2 }, max: { rows: 4, columns: 4 } },
//   { current: { rows: 2, columns: 2 }, max: { rows: 4, columns: 4 } },
//   { current: { rows: 2, columns: 2 }, max: { rows: 4, columns: 4 } },
// ])

// export function initializeStage({
//   numberOfLevels,
//   shapeFilter,
//   numCellsFilter,
//   letterFilter,
//   difficultyFilter,
//   excludeChallenges,
// }: {
//   numberOfLevels: number;
//   shapeFilter?: Shape[];
//   numCellsFilter?: NumCells[];
//   letterFilter?: Letter[];
//   difficultyFilter?: Difficulty[];
//   excludeChallenges?: shapeIds[];
// }): { levels: Level[]; metadata: StageMetadata } {
//   // remove excludeChallenges from challengeDetailsMap
//   if (excludeChallenges) {
//     for (let i = 0; i < excludeChallenges.length; i += 1) {
//       delete challenges[excludeChallenges[i]];
//     }
//   }

//   // Define filters in an array
//   const filters: ((challenge: Challenge) => boolean)[] = [];

//   // Filter on shape
//   if (shapeFilter) {
//     filters.push((challenge) => shapeFilter.includes(challenge.shape));
//   }

//   // Filter on numCells
//   if (numCellsFilter) {
//     filters.push((challenge) => numCellsFilter.includes(challenge.numCells));
//   }

//   // Filter on letter
//   if (letterFilter) {
//     filters.push((challenge) => letterFilter.includes(challenge.letter));
//   }

//   // Filter on difficulty
//   if (difficultyFilter) {
//     filters.push((challenge) =>
//       difficultyFilter.includes(challenge.difficulty)
//     );
//   }

//   // Apply all filters
//   const allChallenges = Object.values(challenges).filter((challenge) =>
//     filters.every((filter) => filter(challenge))
//   );

//   if (allChallenges.length < numberOfLevels) {
//     throw new Error(
//       'Not enough challenges to meet the requested number of levels with the provided filters.'
//     );
//   }

//   // Shuffle the filtered challenges
//   const shuffledChallenges = allChallenges.sort(() => 0.5 - Math.random());

//   // Initialize the levels
//   const levels: Level[] = [];
//   for (let i = 0; i < numberOfLevels; i += 1) {
//     const challengeCanvas: ChallengeCanvas = {
//       type: 'challenge',
//       challenge: shuffledChallenges[i],
//       toggled: [false, true],
//     };

//     const gridCanvas: GridCanvas = {
//       type: 'grid',
//       grid: { current: { rows: 2, columns: 1 }, max: { rows: 4, columns: 4 } },
//       toggled: [false, false],
//     };

//     const level: Level = {
//       challenge: challengeCanvas,
//       canvas: gridCanvas,
//       metadata: initialLevelMetadata(),
//     };

//     levels.push(level);
//   }

//   // Initialize the stage metadata
//   const metadata: StageMetadata = initialStageMetadata();

//   return { levels, metadata };
// }
