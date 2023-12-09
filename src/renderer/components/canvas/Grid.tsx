import React from 'react';
import { GridCanvas } from 'renderer/state/types';
import Cell from '../Cell';

interface GridCanvasProps {
  grid: GridCanvas;
  handleToggle: (index: number) => void;
}

export default function Grid({ grid, handleToggle }: GridCanvasProps) {
  const { current: gridDimentions } = grid.grid;

  const gridStyle = {
    gridTemplateColumns: `repeat(${gridDimentions.columns}, 1fr)`,
    gridTemplateRows: `repeat(${gridDimentions.rows}, 1fr)`,
  };

  const cells = grid.toggled;

  return (
    <div
      className="w-[180px] h-[180px] border-2 border-black grid grid-flow-dense justify-center items-center"
      style={gridStyle}
    >
      {cells.map((cell, i) => {
        const cellIndex = i;
        return (
          <Cell
            key={`cell-outer-${cellIndex}`}
            cellIndex={cellIndex}
            toggled={cell}
            handleToggle={handleToggle}
          />
        );
      })}
    </div>
  );
}
