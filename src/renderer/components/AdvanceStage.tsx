// src/renderer/components/AdvanceStage.tsx
import { Action } from 'renderer/state/gameReducer';
import { Dispatch } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { GameState } from 'renderer/state/types';
import StagesCompletedList from './StagesCompletedList';

interface AdvanceStageProps {
  state: GameState;
  dispatch: Dispatch<Action>;
}

function AdvanceStage({ state, dispatch }: AdvanceStageProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: 'CLEAR_JUST_ADVANCED_STAGE' });
    navigate('/AllStagesPage');
  };

  return (
    <div className="flex h-screen bg-cyan-200">
      <div className="flex flex-col p-6 gap-12 items-center content-center m-auto">
        <h1 className="text-black text-2xl font-bold text-center">
          Parabéns! Você passou de estágio!
        </h1>

        <div className='w-[300px] flex bg-amber-100 rounded-2xl border-2 border-black'>
          <StagesCompletedList stages={state.stages} />
        </div>

        <button
          className="w-[300px] bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold py-2 px-8 border-2 border-black rounded-xl"
          onClick={handleClick}
          aria-label="Move to next stage"
        >
          Próximo Estágio
        </button>
      </div>
    </div>
  );
}

export default AdvanceStage;
