// src/renderer/components/AdvanceStage.tsx
import { Action } from 'renderer/state/gameReducer';
import { Dispatch } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
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

  // Inside your AdvanceStage component

  const handleAdvanceToNextStage = () => {
    // Dispatch the new action
    dispatch({ type: 'ADVANCE_TO_NEXT_STAGE' });

    // Navigate to the next stage
    const nextStageIndex = state.currentStage + 1;
    navigate(`/play/${nextStageIndex}`);
  };

  return (
    <div className="flex h-screen bg-cyan-200">
      <div className="flex flex-col gap-6 items-center content-center m-auto">
        <h1 className="text-black text-2xl font-bold text-center">
          Parabéns! Você passou de estágio!
        </h1>

        <div className="flex w-full bg-amber-100 rounded-2xl drop-shadow-md content-center items-center">
          <StagesCompletedList stages={state.stages} />
        </div>

        <div className="flex w-full gap-4 items-center justify-between">
          <button
            className="flex flex-auto bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold py-2 px-8 drop-shadow-md rounded-xl"
            onClick={handleClick}
            aria-label="Move to all stages page"
          >
            Estágios
          </button>

          <button
            className="flex flex-auto bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold py-2 px-8 drop-shadow-md rounded-xl"
            onClick={handleAdvanceToNextStage}
            aria-label="Move to next stage"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdvanceStage;
