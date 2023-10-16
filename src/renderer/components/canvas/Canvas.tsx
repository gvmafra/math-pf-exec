import { Dispatch } from 'react';
import type { GameCanvas } from 'renderer/state/types';
import { Action } from 'renderer/state/gameReducer';
import Grid from './Grid';

type canvasProps = {
  currentStage: number;
  currentLevel: number;
  gameCanvas: GameCanvas;
  dispatch: Dispatch<Action>;
};

function Canvas({
  gameCanvas,
  dispatch,
  currentStage,
  currentLevel,
}: canvasProps) {
  const handleToggle = (index: number) => {
    dispatch({
      type: 'TOGGLE_CELL',
      payload: {
        stageIndex: currentStage,
        levelIndex: currentLevel,
        cellIndex: index,
      },
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleToggle(index);
    }
  };

  if (gameCanvas.type === 'grid') {
    return <Grid grid={gameCanvas} handleToggle={handleToggle} />;
  }

  const toggledPaths = gameCanvas.challenge.paths.map((path, index) => ({
    path,
    toggled: gameCanvas.toggled[index],
  }));

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      viewBox="0 0 100 100"
    >
      {toggledPaths.map((cellInfo, index) => (
        <path
          key={`path-${cellInfo.path}`}
          d={cellInfo.path}
          fill={cellInfo.toggled ? 'orange' : 'white'}
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => handleToggle(index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          role="button"
          tabIndex={0}
          className="focus:stroke-red-600 focus:outline-none focus:stroke-[1px] focus:ring-2 focus:z-10"
        />
      ))}
    </svg>
  );
}

export default Canvas;