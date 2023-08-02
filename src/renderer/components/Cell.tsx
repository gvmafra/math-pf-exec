import React, { useCallback } from 'react';
import { Action } from '../state/gameReducer';

interface CellProps {
  cell: { selected: boolean };
  stageIndex: number;
  levelIndex: number;
  cellIndex: number;
  dispatch: React.Dispatch<Action>;
}

export default function Cell({
  cell,
  stageIndex: currentStage,
  levelIndex: currentLevel,
  cellIndex: currentCell,
  dispatch,
}: CellProps) {
  const handleDispatch = useCallback(
    () =>
      dispatch({
        type: 'TOGGLE_CELL',
        payload: {
          stageIndex: currentStage,
          levelIndex: currentLevel,
          cellIndex: currentCell,
        },
      }),
    [dispatch, currentStage, currentLevel, currentCell]
  );

  const handleKeyDown = () => {
    handleDispatch();
  };

  const handleClick = () => {
    handleDispatch();
  };

  return (
    <div
      role="button"
      id={`cell-inner-${currentStage}-${currentLevel}-${currentCell}`}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`${
        cell.selected ? 'bg-green-500' : 'bg-red-500'
      } w-full h-full border-2 border-white`}
    >
      <label
        htmlFor={`cell-inner-${currentStage}-${currentLevel}-${currentCell}`}
        className="sr-only"
      >
        {cell.selected ? 'selected' : 'unselected'}
      </label>
    </div>
  );
}
