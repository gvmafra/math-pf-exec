import type { GameCanvas } from 'renderer/state/types';

type ChallengeProps = {
  gameCanvas: GameCanvas;
  handleToggle: (index: number) => void;
};

function Challenge({ gameCanvas, handleToggle }: ChallengeProps) {
  if (gameCanvas.type !== 'challenge') {
    throw new Error('Invalid canvas type');
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
          className={cellInfo.toggled ? 'fill-orange-300' : 'fill-white'}
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => handleToggle(index)}
        />
      ))}
    </svg>
  );
}

export default Challenge;
