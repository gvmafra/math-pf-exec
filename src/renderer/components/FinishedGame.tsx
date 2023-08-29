import { Action } from 'renderer/state/gameReducer';
import { Dispatch } from 'react';
import { GameState } from 'renderer/state/types';
import { useNavigate } from 'react-router-dom';
import StagesCompletedList from './StagesCompletedList';
import CircleButton from './CircleButton';

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
    <section className="bg-white flex flex-col gap-16 justify-center items-center fixed z-10 inset-0 overflow-y-auto">
      <h1 className="text-black text-xl">Parabéns, você terminou o jogo!</h1>
      <StagesCompletedList stages={state.stages} />
      <CircleButton onClick={handleClick} ariaLabel="Move to start of game">
        Começar de novo
      </CircleButton>
    </section>
  );
}

export default FinishedGame;
