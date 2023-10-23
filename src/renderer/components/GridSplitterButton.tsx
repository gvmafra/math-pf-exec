import { FC } from 'react';
import { Dispatch } from 'react';
import { Action, Direction } from 'renderer/state/gameReducer';
import CircleButton from './CircleButton';

interface GridSplitterButtonProps {
  dispatch: Dispatch<Action>;
  direction: Direction;
  disabled?: boolean;
}

const GridSplitterButton: FC<GridSplitterButtonProps> = ({
  dispatch,
  direction,
  disabled,
}) => {
  return (
    <CircleButton
      disabled={disabled}
      onClick={() =>
        dispatch({
          type: 'DIVIDE_SQUARE',
          payload: { direction },
        })
      }
      ariaLabel={`Divide Square in the ${direction} direction`}
      size="large"
    >
      {direction === 'horizontal' ? (
        <div className='w-[90px] h-3 bg-black' />
      ) : (
        <div className='w-3 h-[90px] bg-black' />
      )}
    </CircleButton>
  );
};

export default GridSplitterButton;
