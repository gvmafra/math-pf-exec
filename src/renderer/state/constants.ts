import { challenges } from 'renderer/state/data';
import {
  Cell,
  Cells,
  Challenge,
  ChallengeDetails,
  GameState,
  GridCanvas,
  LevelMetadata,
  StageMetadata,
} from 'renderer/state/types';

export const initialLevelMetadata: LevelMetadata = {
  clickCount: 0,
  attempts: 0,
  time: 0,
  completed: false,
};

export const initialStageMetadata: StageMetadata = {
  currentLevel: 0,
  completed: false,
};

export const generateCellsFromRatio = (
  ratio: number,
  numCells: number
): Cell[] => {
  if (ratio < 0 || ratio > 1 || numCells < 0 || !Number.isInteger(numCells)) {
    throw new Error('Invalid inputs');
  }

  const numSelectedCells = Math.floor(ratio * numCells);
  const cells = Array(numCells).fill({ selected: false }) as Cell[];

  for (let i = 0; i < numSelectedCells; i += 1) {
    cells[i] = { selected: true };
  }

  return cells;
};

const buildChallenge = (
  details: ChallengeDetails,
  ratio: number
): Challenge => ({
  details,
  cells: {
    cells: generateCellsFromRatio(ratio, details.numCells),
    ratio,
  },
});

const defaultMaxMinGrid = {
  max: { rows: undefined, columns: undefined },
  min: { rows: 0, columns: 0 },
};

const buildCellsFromCurrentGrid = (rows: number, columns: number): Cells => ({
  cells: Array(rows * columns).fill({ selected: false }) as Cell[],
  ratio: 1,
});

const gridCanvasBuilder = (
  type: 'grid',
  current: { rows: number; columns: number },
  max: { rows?: number; columns?: number } = defaultMaxMinGrid.max,
  min: { rows?: number; columns?: number } = defaultMaxMinGrid.min
): GridCanvas => {
  const cells = buildCellsFromCurrentGrid(current.rows, current.columns);
  return {
    type,
    cells,
    grid: {
      current,
      max,
      min,
    },
  };
};

export const initialState: GameState = {
  currentStage: 0,
  justAdvancedStage: false,
  stages: [
    {
      levels: [
        {
          challenge: buildChallenge(challenges.Square_2_a, 0.5),
          gameCanvas: gridCanvasBuilder('grid', { rows: 2, columns: 1 }),
          metadata: initialLevelMetadata,
        },
        {
          challenge: buildChallenge(challenges.Square_2_b, 0.5),
          gameCanvas: gridCanvasBuilder('grid', { rows: 2, columns: 1 }),
          metadata: initialLevelMetadata,
        },
        {
          challenge: buildChallenge(challenges.Square_2_d, 0.5),
          gameCanvas: gridCanvasBuilder('grid', { rows: 2, columns: 1 }),
          metadata: initialLevelMetadata,
        },
        {
          challenge: buildChallenge(challenges.Circle_2_b, 0.5),
          gameCanvas: gridCanvasBuilder('grid', { rows: 2, columns: 1 }),
          metadata: initialLevelMetadata,
        },
        {
          challenge: buildChallenge(challenges.Diamond_2_b, 0.5),
          gameCanvas: gridCanvasBuilder('grid', { rows: 2, columns: 1 }),
          metadata: initialLevelMetadata,
        },
        {
          challenge: buildChallenge(challenges.Triangle_2_b, 0.5),
          gameCanvas: gridCanvasBuilder('grid', { rows: 2, columns: 1 }),
          metadata: initialLevelMetadata,
        },
        {
          challenge: buildChallenge(challenges.Square_2_a, 0.5),
          gameCanvas: gridCanvasBuilder('grid', { rows: 2, columns: 2 }),
          metadata: initialLevelMetadata,
        },
        {
          challenge: buildChallenge(challenges.Square_2_b, 0.5),
          gameCanvas: gridCanvasBuilder('grid', { rows: 2, columns: 2 }),
          metadata: initialLevelMetadata,
        },
        {
          challenge: buildChallenge(challenges.Diamond_2_a, 0.5),
          gameCanvas: gridCanvasBuilder('grid', { rows: 2, columns: 2 }),
          metadata: initialLevelMetadata,
        },
        {
          challenge: buildChallenge(challenges.Triangle_2_a, 0.5),
          gameCanvas: gridCanvasBuilder('grid', { rows: 2, columns: 2 }),
          metadata: initialLevelMetadata,
        },
      ],
      metadata: initialStageMetadata,
    },
    {
      levels: [
        {
          challenge: buildChallenge(challenges.Triangle_2_a, 0.5),
          gameCanvas: gridCanvasBuilder('grid', {
            rows: 1,
            columns: 1,
          }),
          metadata: initialLevelMetadata,
        },
        {
          challenge: buildChallenge(challenges.Triangle_2_b, 0.5),
          gameCanvas: gridCanvasBuilder('grid', {
            rows: 1,
            columns: 2,
          }),
          metadata: initialLevelMetadata,
        },
      ],
      metadata: initialStageMetadata,
    },
  ],
};
