//AllStatesPage.tsx
import { GameState } from 'renderer/state/types';
import genInitialState from '../state/gameSetup';
import { Link } from 'react-router-dom';
import { Dispatch } from 'react';
import { Action, useGameState } from 'renderer/state/gameReducer';
import { useNavigate } from "react-router-dom";

interface GameProps {
  state: GameState;
  dispatch: Dispatch<Action>;
}

const stageNames = [
  "Estágio Um",
  "Estágio Dois",
  "Estágio Três",
  "Estágio Quatro",
  "Estágio Cinco",
  "Estágio Seis",
  "Estágio Sete",
  "Estágio Oito",
  "Estágio Nove",
  "Estágio Dez",
  "Estágio Onze",
  "Estágio Doze",
]
// pass the dispatch function to this component
const AllStagesPage: React.FC<GameProps> = ({ state, dispatch }) => {
  const gameState: GameState = genInitialState();
  const navigate = useNavigate();

  
  function handleStageSelect(stageNumber: number) {
    dispatch({ type: 'SET_STAGE', payload: { stageIndex: stageNumber } })

    navigate('/Game');
  }

  return (
    <div className="flex h-screen bg-cyan-200">
      <div className="flex flex-col items-center content-center gap-2 m-auto pb-4">
        <h1 className="font-bold text-center text-2xl p-2">
          Lista De Estágios
        </h1>
        <div className="flex flex-col items-center content-center gap-2">
          <div className="flex flex-col gap-2 items-center content-center">
            {stageNames.map((stageName, i) => {
              return (
                <button
                  key={`stage-${i}`}
                  className="w-[300px] bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold py-2 px-8 border-2 border-black rounded-xl"
                  onClick={() => handleStageSelect(i)}
                >
                  {stageName}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStagesPage;