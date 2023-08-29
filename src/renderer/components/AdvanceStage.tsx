// src/renderer/components/AdvanceStage.tsx
import { Action } from 'renderer/state/gameReducer';
import { Dispatch } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import { GameState } from 'renderer/state/types';
import StagesCompletedList from './StagesCompletedList';
import CircleButton from './CircleButton';

interface AdvanceStageProps {
  state: GameState;
  dispatch: Dispatch<Action>;
}

function AdvanceStage({ state, dispatch }: AdvanceStageProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: 'CLEAR_JUST_ADVANCED_STAGE' });
    navigate('/');
  };

  return (
    <section className="bg-white flex flex-col gap-16 justify-center items-center fixed z-10 inset-0 overflow-y-auto">
      <h1 className="text-black text-xl">Parabéns! você passou de estágio!</h1>
      <StagesCompletedList stages={state.stages} />
      <CircleButton onClick={handleClick} ariaLabel="Move to next stage">
        Próximo Estágio
      </CircleButton>
    </section>
  );
}

export default AdvanceStage;
