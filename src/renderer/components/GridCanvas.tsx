import React, { Dispatch } from 'react';
import type { GameState } from 'renderer/state/types';
import Cell from './Cell';
import { Action } from '../state/gameReducer';

interface GridCanvasProps {
  state: GameState;
  dispatch: Dispatch<Action>;
}

export default function Grid({ state, dispatch }: GridCanvasProps) {
  const currentStage = state.stages[state.currentStage];
  const currentLevel = currentStage.levels[currentStage.metadata.currentLevel];

  if (currentLevel.gameCanvas.type !== 'grid') {
    return null; // or some placeholder when it's not a grid type canvas
  }

  const { current: gridDimentions } = currentLevel.gameCanvas.grid;

  const gridStyle = {
    gridTemplateColumns: `repeat(${gridDimentions.columns}, 1fr)`,
    gridTemplateRows: `repeat(${gridDimentions.rows}, 1fr)`,
  };

  const { cells } = currentLevel.gameCanvas.cells;
  const stageIndex = state.currentStage;
  const levelIndex = currentStage.metadata.currentLevel;
  return (
    <div
      className="w-[200px] h-[200px] grid grid-flow-dense justify-center items-center"
      style={gridStyle}
    >
      {cells.map((cell, i) => {
        const cellIndex = i;
        return (
          <Cell
            key={`cell-outer-${stageIndex}-${levelIndex}-${cellIndex}`}
            cellIndex={cellIndex}
            cell={cell}
            dispatch={dispatch}
            stageIndex={state.currentStage}
            levelIndex={currentStage.metadata.currentLevel}
          />
        );
      })}
    </div>
  );
}
