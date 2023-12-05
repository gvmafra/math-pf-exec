// src/renderer/components/AdvanceStage.tsx
import { Action } from 'renderer/state/gameReducer';
import { Dispatch } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { GameState } from 'renderer/state/types';
import StagesCompletedList from './StagesCompletedList';
import FratixBackground from './FratixBackground';

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
            ESTÁGIO COMPLETO
          </p>
        </div>
      </div>

      <div className="flex flex-col bg-[#fdffee] h-screen w-1/2 px-20 items-center justify-center gap-10 mr-24 shadow-lg">
        <h1 className="text-2xl font-bold text-center">
          Parabéns!<br/> Você passou de estágio!
        </h1>
        <StagesCompletedList stages={state.stages} />
        <button
          className="flex items-center justify-center h-16 w-auto bg-white hover:bg-amber-100 text-[#6c5353] text-2xl font-bold py-4 px-6 border border-[#ecdbdb] shadow-md hover:shadow-md hover:shadow-amber-300 rounded-full"
          onClick={handleClick}
          aria-label="Move to all stages page"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

export default AdvanceStage;
