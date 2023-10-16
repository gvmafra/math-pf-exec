//AllStatesPage.tsx
import { GameState } from 'renderer/state/types';
import genInitialState from '../state/gameSetup';
import { Dispatch } from 'react';
import { Action } from 'renderer/state/gameReducer';
import { useNavigate } from "react-router-dom";

interface GameProps {
  state: GameState;
  dispatch: Dispatch<Action>;
}

const stageNames = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
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
          <div className="grid grid-cols-4 gap-4 items-center content-center">
            {stageNames.map((stageName, i) => {
              return (
                <button
                  key={`stage-${i}`}
                  className="h-20 w-20 bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold py-2 px-8 drop-shadow-md rounded-2xl"
                  onClick={() => handleStageSelect(i)}
                >
                  {stageName}
                </button>
              )
            })}
          </div>
          <button>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllStagesPage;