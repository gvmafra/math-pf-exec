import React, { FC } from 'react';
import { Dispatch } from 'react';
import { Action, Direction } from 'renderer/state/gameReducer';
import CircleButton from './CircleButton';
import IconHorizontal from '../img/iconHorizontal.svg';
import IconVertical from '../img/iconVertical.svg';

interface GridSplitterButtonProps {
  dispatch: Dispatch<Action>;
  direction: Direction;
  disabled?: boolean;
  image?: SVGAElement;
}

const GridSplitterButton: FC<GridSplitterButtonProps> = ({ dispatch, direction, disabled, image}) => {
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
      {direction.charAt(0).toUpperCase()}
      {direction.slice(1)}
    </CircleButton>
  );
};

export default GridSplitterButton;
