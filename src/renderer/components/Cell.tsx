interface CellProps {
  toggled: boolean;
  handleToggle: (index: number) => void;
  cellIndex: number;
}

export default function Cell({ toggled, handleToggle, cellIndex }: CellProps) {
  return (
    <div
      role="button"
      id={`cell-inner-${cellIndex}`}
      tabIndex={0}
      onClick={() => handleToggle(cellIndex)}
      onKeyDown={() => handleToggle(cellIndex)}
      className={`${
        toggled ? 'bg-orange-300' : 'bg-white'
      } w-full h-full border-2 border-black`}
    >
      <label htmlFor={`cell-inner-${cellIndex}`} className="sr-only">
        {toggled ? 'on' : 'off'}
      </label>
    </div>
  );
}
