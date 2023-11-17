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

  return (
    <div className="flex h-screen bg-cyan-200">
      <div className="flex flex-col p-6 gap-6 items-center content-center m-auto">

        <h1 className="text-black text-2xl font-bold text-center">
          Parabéns! Você passou de estágio!
        </h1>

        <div className="w-[300px] flex bg-amber-100 rounded-2xl drop-shadow-md">
          <StagesCompletedList stages={state.stages} />
        </div>

        <div className='flex w-[300] gap-4 items-center justify-between'>
          <button
            className=" bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold py-2 px-8 drop-shadow-md rounded-xl"
            onClick={handleClick}
            aria-label="Move to next stage"
          >
            Continuar
          </button>

          <button className=" bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold py-2 px-8 drop-shadow-md rounded-xl">
            <Link to="/AllStagesPage">Estágios</Link>
          </button>
        </div>

      </div>
    </div>
  );
}

export default AdvanceStage;
