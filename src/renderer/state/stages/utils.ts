import { challenges } from '../challengeData';
import {
  Level,
  LevelMetadata,
  StageMetadata,
  gridSpecs,
  GridCanvas,
  ChallengeCanvas,
  GameCanvas,
  Shape,
  NumCells,
  Letter,
  Difficulty,
  Challenge,
  ShapeIds,
} from '../types';

export const initialLevelMetadata = (): LevelMetadata => ({
  clickCount: 0,
  attempts: 0,
  score: 3,
  completed: false,
  challengesAlreadyCompleted: [],
});

export const initialStageMetadata = (): StageMetadata => ({
  currentLevel: 0,
  completed: false,
});

// function is used to initialize a list of grids from array of current and max rows and columns
export function initializeLevelGrids(
  gridCanvasSpecs: gridSpecs[]
): GridCanvas[] {
  // initialize grids
  const grids: GridCanvas[] = [];
  for (let i = 0; i < gridCanvasSpecs.length; i += 1) {
    const gridCanvas: GridCanvas = {
      type: 'grid',
      grid: gridCanvasSpecs[i],
      toggled: new Array(
        gridCanvasSpecs[i].current.rows * gridCanvasSpecs[i].current.columns
      ).fill(false),
    };
    grids.push(gridCanvas);
  }

  return grids;
}

// function is used to initialize a list of challenges from array of challenge ids
export function initializeLevelChallenges(
  challengeSpecs: {
    challengeId: ShapeIds;
    toggles?: boolean[];
  }[]
): ChallengeCanvas[] {
  // initialize challenges
  const levelChallenges: ChallengeCanvas[] = [];

  challengeSpecs.forEach((challengeSpec) => {
    const levelChallenge = challenges[challengeSpec.challengeId];
    const challengeCanvas: ChallengeCanvas = {
      type: 'challenge',
      challenge: levelChallenge,
      toggled:
        challengeSpec.toggles || Array(levelChallenge.numCells).fill(false),
    };
    levelChallenges.push(challengeCanvas);
  });
  return levelChallenges;
}

// function takes in a list of challenges and a list of canvas and merges them into a list of levels with metadata
export function initializeLevels(
  levelChallenges: ChallengeCanvas[],
  levelCanvases: GameCanvas[]
): Level[] {
  // verfity tha the length of challenges and canvases are the same
  if (levelChallenges.length !== levelCanvases.length) {
    throw new Error(
      'initializeLevels: challenges and canvases must have the same length'
    );
  }

  // initialize levels
  const levels: Level[] = [];
  for (let i = 0; i < levelChallenges.length; i += 1) {
    const level: Level = {
      challenge: levelChallenges[i],
      canvas: levelCanvases[i],
      metadata: initialLevelMetadata(),
    };
    levels.push(level);
  }

  return levels;
}

// function to filter challenges by shape, numCells, letter, and difficulty and return a list of challenge ids
export function filterChallenges({
  shapeFilter,
  numCellsFilter,
  letterFilter,
  difficultyFilter,
}: {
  shapeFilter?: Shape[];
  numCellsFilter?: NumCells[];
  letterFilter?: Letter[];
  difficultyFilter?: Difficulty[];
}): ShapeIds[] {
  const filters: ((challenge: Challenge) => boolean)[] = [];

  if (shapeFilter) {
    filters.push((challenge) => shapeFilter.includes(challenge.shape));
  }

  if (numCellsFilter) {
    filters.push((challenge) => numCellsFilter.includes(challenge.numCells));
  }

  if (letterFilter) {
    filters.push((challenge) => letterFilter.includes(challenge.letter));
  }

  if (difficultyFilter) {
    filters.push((challenge) =>
      difficultyFilter.includes(challenge.difficulty)
    );
  }

  const allChallenges = Object.entries(challenges).filter((challenge) =>
    filters.every((filter) => filter(challenge[1]))
  );

  return allChallenges.map((challenge) => challenge[0] as ShapeIds);
}
export function concatArrays<T>(arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => [...acc, ...curr], []);
}

// function that randomized the order of an array and returns a specified number of elements
export function getRandomOptions<T>(array: T[], count: number): T[] {
  if (count > array.length || count < 0) {
    throw new Error('Invalid count specified');
  }

  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray.slice(0, count);
}

export function getRandomToggles(length: number, count: number): boolean[] {
  if (length < 0) {
    throw new Error('Length must be non-negative');
  }

  if (count > length || count < 0) {
    throw new Error('Invalid count specified');
  }

  const toggles = Array(length).fill(false);

  for (let i = 0; i < count; i += 1) {
    toggles[i] = true;
  }

  return getRandomOptions(toggles, length);
}

export const genRandomChallengeCanvases = ({
  numCellsFilter,
  difficultyFilter,
  shapeFilter,
  letterFilter,
  toggleRatio,
  numberofChallenges = 10,
}: {
  numCellsFilter?: NumCells[];
  difficultyFilter?: Difficulty[];
  shapeFilter?: Shape[];
  letterFilter?: Letter[];
  toggleRatio: number;
  numberofChallenges?: number;
}): ChallengeCanvas[] => {
  const challengesIds = filterChallenges({
    numCellsFilter,
    difficultyFilter,
    shapeFilter,
    letterFilter,
  });

  const canvasOptions = challengesIds.map((challengeId) => ({
    challengeId,
    toggles: getRandomToggles(
      challenges[challengeId].numCells,
      Math.floor(challenges[challengeId].numCells * toggleRatio)
    ),
  }));

  return initializeLevelChallenges(
    getRandomOptions(canvasOptions, numberofChallenges)
  );
};

export function genGridCanvas(
  current: { rows: number; columns: number },
  options: { rows: number[]; columns: number[] }
): GridCanvas {
  return {
    type: 'grid',
    grid: {
      current,
      options,
    },
    toggled: Array(current.rows * current.columns).fill(false),
  };
}
