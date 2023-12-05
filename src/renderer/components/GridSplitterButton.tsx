import { FC } from 'react';
import { Dispatch } from 'react';
import { Action, Direction } from 'renderer/state/gameReducer';
import CircleButton from './CircleButton';

interface GridSplitterButtonProps {
  dispatch: Dispatch<Action>;
  direction: Direction;
  disabled?: boolean;
  stageIndex: number;
  levelIndex: number;
}

const GridSplitterButton: FC<GridSplitterButtonProps> = ({
  dispatch,
  direction,
  disabled,
  stageIndex,
  levelIndex,
}) => {
  const handleClick = () => {
    // divide square + increment click count
    dispatch({
      type: 'DIVIDE_SQUARE',
      payload: { direction },
    });
    dispatch({
      type: 'INCREMENT_CLICK_COUNT',
      payload: { stageIndex, levelIndex },
    });
  };
  return (
    <div className="relative">
      <CircleButton
        disabled={disabled}
        onClick={() => handleClick()}
        ariaLabel={`Divide Square in the ${direction} direction`}
        size="large"
      >
        {direction === 'horizontal' ? (
          <div className="w-[90px] h-3 bg-black" />
        ) : (
          <div className="w-3 h-[90px] bg-black" />
        )}
      </CircleButton>
    </div>
  );
};

export default GridSplitterButton;
