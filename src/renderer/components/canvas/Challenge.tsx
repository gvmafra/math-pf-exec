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

  // anon function to return the correct fill color
  const fillColor = () => {
    switch (gameCanvas.toggled.length) {
      case 2:
        return 'fill-yellow-300';
      case 3:
        return 'fill-blue-600';
      case 4:
        return 'fill-green-500';
      case 6:
        return 'fill-orange-700';
      case 8:
        return 'fill-red-500';
      case 9:
        return 'fill-purple-500';
      default:
        return 'fill-yellow-300';
    }
  }

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
          className={cellInfo.toggled ? fillColor() : 'fill-white'}
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
