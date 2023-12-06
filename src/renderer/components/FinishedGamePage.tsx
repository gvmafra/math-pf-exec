import { Action } from 'renderer/state/gameReducer';
import { Dispatch } from 'react';
import { GameState } from 'renderer/state/types';
import { useNavigate } from 'react-router-dom';
import StagesCompletedList from './StagesCompletedList';
import CircleButton from './CircleButton';
import FratixBackground from './FratixBackground';

interface FinishedGameProps {
  state: GameState;
  dispatch: Dispatch<Action>;
}

function FinishedGame({ state, dispatch }: FinishedGameProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: 'RESET_GAME' });
    navigate('/');
  };

  return (
    <div className="flex h-screen items-center text-[#6c5353]">
      <FratixBackground color="yellow" />

      <div className="flex items-center m-auto gap-8 mt-12">
        <div className="flex flex-col items-center gap-4">
          <img
            src={require('../img/logoFratixSm.svg').default}
            alt="Logo Fratix"
            className="flex justify-center w-[200px]"
          />
          <p className="text-2xl text-[#6c5353] text-center font-bold">
            FIM DO JOGO
          </p>
        </div>
      </div>

      <div className="flex flex-col bg-[#fdffee] h-screen w-1/2 px-20 items-center justify-center gap-10 mr-24 shadow-lg">
        <h1 className="text-2xl font-bold text-center">
          Parabéns, <br/> você terminou o jogo!
        </h1>
        <StagesCompletedList stages={state.stages} />
        <button
          className="flex items-center justify-center h-16 w-auto bg-white hover:bg-amber-100 text-[#6c5353] text-2xl font-bold py-4 px-6 border border-[#ecdbdb] shadow-md hover:shadow-md hover:shadow-amber-300 rounded-full"
          onClick={handleClick}
          aria-label="move to start of the game"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

export default FinishedGame;
