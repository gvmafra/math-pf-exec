import {
  Cell,
  Cells,
  GameCanvas,
  Level,
  GameState,
  StageMetadata,
  LevelMetadata,
} from 'renderer/state/types';
import cloneDeep from 'lodash/cloneDeep';
import { initialState } from 'renderer/state/constants';

// State helper
export const updateState = (
  state: GameState,
  newState: Partial<GameState>
): GameState => {
  const cloneState = cloneDeep(state);
  return { ...cloneState, ...newState };
};

// Stage helpers
export const updateCurrentStage = (
  state: GameState,
  stageIndex: number
): GameState => {
  if (stageIndex < 0 || stageIndex >= state.stages.length) {
    throw new Error('Invalid stage index');
  }
  const cloneState = cloneDeep(state);
  cloneState.currentStage = stageIndex;
  return cloneState;
};
// Level helpers
export const updateCurrentLevel = (
  state: GameState,
  stageIndex: number,
  levelIndex: number
): GameState => {
  if (
    stageIndex < 0 ||
    stageIndex >= state.stages.length ||
    levelIndex < 0 ||
    levelIndex >= state.stages[stageIndex].levels.length
  ) {
    throw new Error('Invalid stage or level index');
  }
  const cloneState = cloneDeep(state);
  cloneState.stages[stageIndex].metadata.currentLevel = levelIndex;
  return cloneState;
};

export const incrementAttemptLevel = (
  state: GameState,
  stageIndex: number,
  levelIndex: number
): GameState => {
  if (
    stageIndex < 0 ||
    stageIndex >= state.stages.length ||
    levelIndex < 0 ||
    levelIndex >= state.stages[stageIndex].levels.length
  ) {
    throw new Error('Invalid stage or level index');
  }
  const cloneState = cloneDeep(state);
  cloneState.stages[stageIndex].levels[levelIndex].metadata.attempts += 1;
  return cloneState;
};

// GameCanvas helpers
export const updateGameCanvas = (
  state: GameState,
  stageIndex: number,
  levelIndex: number,
  gameCanvas: GameCanvas
): GameState => {
  if (
    stageIndex < 0 ||
    stageIndex >= state.stages.length ||
    levelIndex < 0 ||
    levelIndex >= state.stages[stageIndex].levels.length
  ) {
    throw new Error('Invalid stage or level index');
  }
  const cloneState = cloneDeep(state);
  cloneState.stages[stageIndex].levels[levelIndex].gameCanvas = gameCanvas;
  return cloneState;
};

// Cells helpers
export const updateCells = (
  state: GameState,
  stageIndex: number,
  levelIndex: number,
  cells: Cells
): GameState => {
  if (
    stageIndex < 0 ||
    stageIndex >= state.stages.length ||
    levelIndex < 0 ||
    levelIndex >= state.stages[stageIndex].levels.length
  ) {
    throw new Error('Invalid stage or level index');
  }
  const cloneState = cloneDeep(state);
  cloneState.stages[stageIndex].levels[levelIndex].gameCanvas.cells = cells;
  return cloneState;
};

export const updateCell = (
  state: GameState,
  stageIndex: number,
  levelIndex: number,
  cellIndex: number,
  cell: Cell
): GameState => {
  if (
    stageIndex < 0 ||
    stageIndex >= state.stages.length ||
    levelIndex < 0 ||
    levelIndex >= state.stages[stageIndex].levels.length ||
    cellIndex < 0 ||
    cellIndex >=
      state.stages[stageIndex].levels[levelIndex].gameCanvas.cells.cells.length
  ) {
    throw new Error('Invalid stage, level or cell index');
  }
  const cloneState = cloneDeep(state);
  cloneState.stages[stageIndex].levels[levelIndex].gameCanvas.cells.cells[
    cellIndex
  ] = cell;
  return cloneState;
};

export const updateStageMetadata = (
  state: GameState,
  stageIndex: number,
  metadata: StageMetadata
): GameState => {
  if (stageIndex < 0 || stageIndex >= state.stages.length) {
    throw new Error('Invalid stage index');
  }
  const cloneState = cloneDeep(state);
  cloneState.stages[stageIndex].metadata = {
    ...cloneState.stages[stageIndex].metadata,
    ...metadata,
  };
  return cloneState;
};

export const incrementStageNum = (
  state: GameState,
  stageIndex: number
): GameState => {
  if (stageIndex < 0 || stageIndex >= state.stages.length) {
    return state;
  }
  const cloneState = cloneDeep(state);
  // set the current stage to completed
  cloneState.stages[stageIndex].metadata.completed = true;
  // increment the current stage
  cloneState.currentStage += 1;
  return cloneState;
};

export const incrementLevelNum = (
  state: GameState,
  stageIndex: number,
  levelIndex: number
): GameState => {
  const stageLastIndex = state.stages.length - 1;
  const levelLastIndex = state.stages[stageIndex].levels.length - 1;

  if (
    stageIndex < 0 ||
    stageIndex > stageLastIndex ||
    levelIndex < 0 ||
    levelIndex > levelLastIndex
  ) {
    return state;
  }

  const cloneState = cloneDeep(state); //! Note how I am cloning the state

  ///------

  cloneState.stages[stageIndex].levels[levelIndex].metadata.completed = true;

  // check if next index is out of bounds for the current stage
  if (levelIndex + 1 > levelLastIndex) {

    // check if there is not next stage to move to
    if (stageIndex + 1 > stageLastIndex) {
      return cloneState;
    }

    // if you have a stage to move to, increment the stage + set the level to 0
    cloneState.stages[stageIndex].metadata.completed = true;
    cloneState.currentStage += 1;
    cloneState.stages[stageIndex].metadata.currentLevel = 0;

    // toggle justAdvancedStage
    cloneState.justAdvancedStage = true;
    console.log(
      `Stage ${stageIndex} completed. Moving to next stage: ${stageIndex + 1}`
    );
  } else {
    // increment the current level
    cloneState.stages[stageIndex].metadata.currentLevel += 1;
    console.log(
      `Incrementing current level of stage ${stageIndex} to ${cloneState.stages[stageIndex].metadata.currentLevel}`
    );
  }
  return cloneState;
};

export const updateLevelMetadata = (
  state: GameState,
  stageIndex: number,
  levelIndex: number,
  metadata: LevelMetadata
): GameState => {
  if (stageIndex < 0 || stageIndex >= state.stages.length) {
    return state;
  }
  if (levelIndex < 0 || levelIndex >= state.stages[stageIndex].levels.length) {
    // update stage metadata
    return incrementStageNum(state, stageIndex);
  }
  const cloneState = cloneDeep(state);
  cloneState.stages[stageIndex].levels[levelIndex].metadata = {
    ...cloneState.stages[stageIndex].levels[levelIndex].metadata,
    ...metadata,
  };
  return cloneState;
};

export const revertLevel = (
  state: GameState,
  stageIndex: number,
  levelIndex: number
): GameState => {
  if (
    stageIndex < 0 ||
    stageIndex >= state.stages.length ||
    levelIndex < 0 ||
    levelIndex >= state.stages[stageIndex].levels.length
  ) {
    throw new Error('Invalid stage or level index');
  }
  const cloneState = cloneDeep(state);
  cloneState.stages[stageIndex].levels[levelIndex] = cloneDeep(
    initialState.stages[stageIndex].levels[levelIndex]
  );
  return cloneState;
};

/// -----

export const getChallengeRatio = (level: Level): number => {
  const numToggledChallengeCells = level.challenge.cells.cells.filter(
    (cell) => cell.selected
  ).length;
  const totalChallengeCells = level.challenge.details.numCells;
  return numToggledChallengeCells / totalChallengeCells;
};

export const getRatio = (cells: Cell[]): number => {
  const numToggledCells = cells.filter((cell) => cell.selected).length;
  const totalCells = cells.length;
  return numToggledCells / totalCells;
};

export const getCanvasRatio = (level: Level): number => {
  const numCanvasCellsSelected = level.gameCanvas.cells.cells.filter(
    (cell) => cell.selected
  ).length;
  const numCanvasCells = level.gameCanvas.cells.cells.length;
  return numCanvasCellsSelected / numCanvasCells;
};

// GameCanvas helpers
export const divideSquare = (
  state: GameState,
  stageIndex: number,
  levelIndex: number,
  direction: 'horizontal' | 'vertical'
): GameState => {
  if (
    stageIndex < 0 ||
    stageIndex >= state.stages.length ||
    levelIndex < 0 ||
    levelIndex >= state.stages[stageIndex].levels.length
  ) {
    throw new Error('Invalid stage or level index');
  }

  const cloneState = cloneDeep(state);
  const { gameCanvas } = cloneState.stages[stageIndex].levels[levelIndex];

  if (gameCanvas.type !== 'grid') {
    return cloneState;
  }

  const {
    max: { rows: maxRows, columns: maxColumns },
    min: { rows: minRows, columns: minColumns },
    current: { rows: oldNumRows, columns: oldNumColumns },
  } = gameCanvas.grid;

  let numRows = oldNumRows;
  let numColumns = oldNumColumns;

  if (
    direction === 'horizontal' &&
    (numRows <= (maxRows || 4) || numRows >= (minRows || 0))
  ) {
    numRows += 1;
  } else if (
    direction === 'vertical' &&
    (numColumns <= (maxColumns || 4) || numColumns >= (minColumns || 0))
  ) {
    numColumns += 1;
  } else {
    // Reached the maximum limit for this direction
    return cloneState;
  }

  const newCells = Array(numRows * numColumns).fill({
    selected: false,
  }) as Cell[];

  for (let i = 0; i < oldNumRows; i += 1) {
    for (let j = 0; j < oldNumColumns; j += 1) {
      const oldCellIndex = i * oldNumColumns + j;
      if (gameCanvas.cells.cells[oldCellIndex]) {
        newCells[i * numColumns + j] = gameCanvas.cells.cells[oldCellIndex];
      }
    }
  }

  cloneState.stages[stageIndex].levels[levelIndex].gameCanvas = {
    ...gameCanvas,
    grid: {
      ...gameCanvas.grid,
      current: {
        rows: numRows,
        columns: numColumns,
      },
    },
    cells: {
      cells: newCells,
      ratio: getRatio(newCells),
    },
  };

  return cloneState;
};
