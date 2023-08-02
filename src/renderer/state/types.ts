// Enum litrals, used for indexing
export type Shape = 'square' | 'diamond' | 'triangle' | 'circle';
export type NumCells = 2 | 3 | 4 | 6 | 8 | 9;
export type Letter = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j';
export type Difficulty = 'easy' | 'medium' | 'hard';

// Challenges are what the game hope the user passes
export type ChallengeDetails = {
  shape: Shape;
  numCells: NumCells;
  letter: Letter;
  difficulty: Difficulty;
  imageUrl: string; // TODO: replace with dynamically generated SVGs
};

// Cells are either used to display the challenge ratio or are selected in the game canva to beat the challenge
export type Cell = { selected: boolean };
export type Cells = {
  cells: Cell[];
  ratio: number; // should be computed each time the cells are updated (selectedCells / totalCells).toFixed(10)
};

export type Challenge = {
  details: ChallengeDetails;
  cells: Cells;
};

// The game has two types of challenges: grid and challenge
// the grid can be expanded to either add rows or columns
// a challenge canvas is a fixed size but the cells can be selected
export type Canvas = {
  type: 'grid' | 'challenge';
  cells: Cells;
};

export type GridCanvas = Canvas & {
  type: 'grid';
  grid: {
    current: { rows: number; columns: number };
    max: {
      rows?: number;
      columns?: number;
    };
    min: {
      rows?: number;
      columns?: number;
    };
  };
};

export type ChallengeCanvas = ChallengeDetails &
  Canvas & {
    type: 'challenge';
  };

export type GameCanvas = GridCanvas | ChallengeCanvas;

export type LevelMetadata = {
  clickCount: number; // number of times user clicked on any cell
  attempts: number; // number of times user attempted to move to the next level but failed
  time: number;
  completed: boolean;
};

// a level is a challenge with a canvas, if a user selects the right ratio of cells, the level is completed
export type Level = {
  challenge: Challenge;
  gameCanvas: GridCanvas | ChallengeCanvas;
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
};

/// -----

export type shapeIds =
  | 'Circle_2_a'
  | 'Circle_2_b'
  | 'Circle_2_c'
  | 'Circle_2_d'
  | 'Circle_2_e'
  | 'Circle_2_f'
  | 'Circle_3_a'
  | 'Circle_3_b'
  | 'Circle_3_c'
  | 'Circle_4_a'
  | 'Circle_4_c'
  | 'Circle_4_g'
  | 'Circle_6_c'
  | 'Circle_6_g'
  | 'Circle_8_c'
  | 'Circle_9_g'
  | 'Square_2_a'
  | 'Square_2_b'
  | 'Square_2_c'
  | 'Square_2_d'
  | 'Square_2_e'
  | 'Square_2_f'
  | 'Square_3_a'
  | 'Square_3_b'
  | 'Square_4_a'
  | 'Square_4_b'
  | 'Square_4_c'
  | 'Square_4_d'
  | 'Square_4_e'
  | 'Square_4_g'
  | 'Square_4_h'
  | 'Square_6_a'
  | 'Square_6_b'
  | 'Square_8_a'
  | 'Square_8_b'
  | 'Square_8_c'
  | 'Square_8_e'
  | 'Square_8_g'
  | 'Square_8_h'
  | 'Square_8_i'
  | 'Square_8_j'
  | 'Square_9_a'
  | 'Triangle_2_a'
  | 'Triangle_2_b'
  | 'Triangle_2_c'
  | 'Triangle_3_c'
  | 'Triangle_3_d'
  | 'Triangle_3_e'
  | 'Triangle_3_f'
  | 'Triangle_4_c'
  | 'Triangle_4_d'
  | 'Triangle_4_e'
  | 'Triangle_6_d'
  | 'Triangle_8_d'
  | 'Triangle_8_e'
  | 'Triangle_9_c'
  | 'Diamond_2_a'
  | 'Diamond_2_b'
  | 'Diamond_2_c'
  | 'Diamond_2_d'
  | 'Diamond_2_f'
  | 'Diamond_2_g'
  | 'Diamond_3_c'
  | 'Diamond_3_d'
  | 'Diamond_4_a'
  | 'Diamond_4_b'
  | 'Diamond_4_c'
  | 'Diamond_4_d'
  | 'Diamond_4_f'
  | 'Diamond_4_g'
  | 'Diamond_4_h'
  | 'Diamond_6_c'
  | 'Diamond_6_d'
  | 'Diamond_8_c'
  | 'Diamond_8_d'
  | 'Diamond_8_e'
  | 'Diamond_8_f'
  | 'Diamond_8_g'
  | 'Diamond_8_h'
  | 'Diamond_8_i'
  | 'Diamond_8_j'
  | 'Diamond_9_c';
