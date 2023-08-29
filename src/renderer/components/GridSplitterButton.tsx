import { Dispatch } from 'react';
import { Action, Direction } from 'renderer/state/gameReducer';
import CircleButton from './CircleButton';

function GridSplitterButton(dispatch: Dispatch<Action>, direction: Direction) {
  return (
    <CircleButton
      onClick={() =>
        dispatch({
          type: 'DIVIDE_SQUARE',
          payload: { direction },
        })
      }
      ariaLabel={`Divide Square in the ${direction} direction`}
      size="large"
    >
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {direction.charAt(0).toUpperCase()}
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {direction.slice(1)}
    </CircleButton>
  );
}

export default GridSplitterButton;
