export type ShapeIds =
  | 'Square2a'
  | 'Square2b'
  | 'Square2c'
  | 'Square2d'
  | 'Square2e'
  | 'Square2f'
  | 'Square3a'
  | 'Square3b'
  | 'Square4a'
  | 'Square4b'
  | 'Square4c'
  | 'Square4d'
  | 'Square4e'
  | 'Square4g'
  | 'Square4h'
  | 'Square8c'
  | 'Square8b'
  | 'Square8a'
  | 'Square6b'
  | 'Square6a'
  | 'Square8e'
  | 'Square8g'
  | 'Square8h'
  | 'Square8i'
  | 'Square8j'
  | 'Square9a'
  | 'Circle2a'
  | 'Circle2b'
  | 'Circle2c'
  | 'Circle2f'
  | 'Circle3b'
  | 'Circle4a'
  | 'Circle9g'
  | 'Circle8c'
  | 'Circle6g'
  | 'Circle6c'
  | 'Circle4g'
  | 'Circle4c'
  | 'Circle3c'
  | 'Circle3a'
  | 'Circle2e'
  | 'Circle2d'
  | 'Diamond2a'
  | 'Diamond2b'
  | 'Diamond2c'
  | 'Diamond4b'
  | 'Diamond8i'
  | 'Diamond8h'
  | 'Diamond8g'
  | 'Diamond8f'
  | 'Diamond8e'
  | 'Diamond8d'
  | 'Diamond8c'
  | 'Diamond6d'
  | 'Diamond6c'
  | 'Diamond4h'
  | 'Diamond4g'
  | 'Diamond4f'
  | 'Diamond4d'
  | 'Diamond4c'
  | 'Diamond4a'
  | 'Diamond3d'
  | 'Diamond3c'
  | 'Diamond2g'
  | 'Diamond2f'
  | 'Diamond2d'
  | 'Triangle2a'
  | 'Triangle2b'
  | 'Triangle3c'
  | 'Triangle2c'
  | 'Triangle3d'
  | 'Triangle3e'
  | 'Triangle3f'
  | 'Triangle4c'
  | 'Triangle4d'
  | 'Triangle4e'
  | 'Triangle6d'
  | 'Triangle8d'
  | 'Triangle8e'
  | 'Triangle9c';

// Enum litrals, used for indexing
export type Shape = 'square' | 'diamond' | 'triangle' | 'circle';
export type NumCells = 2 | 3 | 4 | 6 | 8 | 9;
export type Letter = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j';
export type Difficulty = 'easy' | 'medium' | 'hard';

export type Challenge = {
  shape: Shape;
  letter: Letter;
  difficulty: Difficulty;
  numCells: NumCells;
  paths: string[];
};

export type ChallengeCanvas = {
  type: 'challenge';
  challenge: Challenge;
  toggled: boolean[];
};

export type gridSpecs = {
  current: { rows: number; columns: number };
  max: {
    rows?: number;
    columns?: number;
  };
};

export type GridCanvas = {
  type: 'grid';
  grid: gridSpecs;
  toggled: boolean[];
};

export type GameCanvas = GridCanvas | ChallengeCanvas;

/// -----
/// Game state types
/// -----

export type LevelMetadata = {
  clickCount: number; // number of times user clicked on any cell
  attempts: number; // number of times user attempted to move to the next level but failed
  time: number;
  completed: boolean;
  challengesAlreadyCompleted: ShapeIds[]; // array of challenge ids to prevent duplicates
};

// a level is a challenge with a canvas, if a user selects the right ratio of cells, the level is completed
export type Level = {
  challenge: ChallengeCanvas;
  canvas: GameCanvas;
  metadata: LevelMetadata;
};

export type StageMetadata = {
  currentLevel: number;
  completed: boolean;
};

// stages are a collection of levels or similar difficulty, they allow the game to have milestones
export type Stage = {
  levels: Level[];
  metadata: StageMetadata;
};

// state is the current state of the game, it contains the current stage and the stages
export type GameState = {
  currentStage: number;
  stages: Stage[];
  justAdvancedStage: boolean;
  finishedGame: boolean;
};
