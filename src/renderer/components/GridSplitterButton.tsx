// import { FC } from 'react';
// import { Dispatch } from 'react';
// import { Action, Direction } from 'renderer/state/gameReducer';
// import CircleButton from './CircleButton';

// interface GridSplitterButtonProps {
//   dispatch: Dispatch<Action>;
//   direction: Direction;
//   disabled?: boolean;
//   stageIndex: number;
//   levelIndex: number;
// }

// const GridSplitterButton: FC<GridSplitterButtonProps> = ({
//   dispatch,
//   direction,
//   disabled,
//   stageIndex,
//   levelIndex,
// }) => {
//   const handleClick = () => {
//     // divide square + increment click count
//     dispatch({
//       type: 'DIVIDE_SQUARE',
//       payload: { direction },
//     });
//     dispatch({
//       type: 'INCREMENT_CLICK_COUNT',
//       payload: { stageIndex, levelIndex },
//     });
//   };
//   return (
//     <div className="relative">
//       <CircleButton
//         disabled={disabled}
//         onClick={() => handleClick()}
//         ariaLabel={`Divide Square in the ${direction} direction`}
//         size="large"
//       >
//         {direction === 'horizontal' ? (
//           <div>
//             <img src={require('../img/iconHorizontal.svg').default} alt="horizontal" className='w-full h-auto' />
//           </div>
//         ) : (
//           <div>
//             <img src={require('../img/iconVertical.svg').default} alt="vertical" className='w-full h-auto' />
//           </div>
//         )}
//       </CircleButton>
//     </div>
//   );
// };

// export default GridSplitterButton;

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
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 2,
          }}
        ></div>
        {direction === 'horizontal' ? (
          <div>
            <img
              src={require('../img/iconHorizontal.svg').default}
              alt="horizontal"
              className="w-full h-auto"
              style={{ zIndex: 1 }}
            />
          </div>
        ) : (
          <div>
            <img
              src={require('../img/iconVertical.svg').default}
              alt="vertical"
              className="w-full h-auto"
              style={{ zIndex: 1 }}
            />
          </div>
        )}
      </CircleButton>
    </div>
  );
};

export default GridSplitterButton;
