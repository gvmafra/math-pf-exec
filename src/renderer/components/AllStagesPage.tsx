//AllStatesPage.tsx
import { GameState } from 'renderer/state/types';
import genInitialState from '../state/gameSetup';
import { Dispatch } from 'react';
import { Action } from 'renderer/state/gameReducer';
import { useNavigate } from 'react-router-dom';
import FratixBackground from './FratixBackground';
import ButtonFratix from './ButtonFratix';
import Overlayed from './Overlayed';

interface GameProps {
  state: GameState;
  dispatch: Dispatch<Action>;
}

const stageNames = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
];

// pass the dispatch function to this component
const AllStagesPage: React.FC<GameProps> = ({ state, dispatch }) => {
  const gameState: GameState = genInitialState();
  const navigate = useNavigate();

  function handleStageSelect(stageNumber: number) {
    dispatch({ type: 'SET_STAGE', payload: { stageIndex: stageNumber } });
    dispatch({ type: 'REPLAY_STAGE' });
    dispatch({ type: 'PREVIOUS_STAGE_CHECK' });
    // dispatch({ type: 'STAGE_COMPLETED'});
    navigate('/Game');
  }

  return (
    <div className="flex h-screen items-center">
      <FratixBackground color="yellow" />

      <div className="flex items-center m-auto gap-8 mt-12">
        <div className="flex flex-col items-center gap-4">
          <Overlayed
            imgSrc={require('../img/logoFratixSm.svg').default}
            altText="Logo Fratix"
            styling="flex justify-center w-[200px]"
          />
          <p className="text-2xl text-[#6c5353] text-center font-bold">
            ESTÁGIOS
          </p>
        </div>
      </div>

      <div className="flex flex-col bg-[#fdffee] h-screen w-1/2 px-20 items-center justify-center gap-10 mr-24 shadow-lg">
        <p className="text-xl text-[#6c5353] text-center font-bold">
          Selecione o estágio:
        </p>
        <div className="grid grid-cols-3 gap-4 items-center content-center">
          {stageNames.map((stageName, i) => {
            const isBlocked = !state.stages[i]?.metadata.completed;
            return (
              <button
                key={`stage-${i}`}
                className={`flex items-center justify-center h-16 w-16 bg-white hover:bg-amber-100 text-[#6c5353] text-4xl font-bold py-2 px-8 border border-[#fff] shadow-md hover:shadow-md hover:shadow-amber-300 hover:border-amber-200 rounded-full ${
                  isBlocked ? 'opacity-50 pointer-events-none' : ''
                }`}
                onClick={() => handleStageSelect(i)}
                disabled={isBlocked}
              >
                {stageName}
              </button>
            );
          })}
        </div>
      </div>

      {/* return button */}
      <div className="bottom-4 left-4 absolute">
        <ButtonFratix
          size="40"
          linkTo="/"
          imgSrc={require('../img/iconReturn.svg').default}
          altText="settings icon"
        />
      </div>
    </div>
  );
};

export default AllStagesPage;
