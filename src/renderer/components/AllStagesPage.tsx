//AllStatesPage.tsx
import { GameState } from 'renderer/state/types';
import genInitialState from '../state/gameSetup';
import { Dispatch } from 'react';
import { Action } from 'renderer/state/gameReducer';
import { useNavigate } from 'react-router-dom';
import FratixBackground from './FratixBackground';
import ButtonFratix from './ButtonFratix';

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

    navigate('/Game');
  }

  return (
    <div className="flex h-screen items-center">

      <FratixBackground color="yellow" />

      <div className="flex items-center m-auto gap-8 mt-12">
        <div className="flex flex-col items-center gap-4">
          <img
            src={require('../img/logoFratixSm.svg').default}
            alt="Logo Fratix"
            className="flex justify-center w-[200px]"
          />
          <p className="text-2xl text-[#6c5353] text-center font-bold">ESTÁGIOS</p>
        </div>
      </div>

      <div className="flex flex-col bg-[#fdffee] h-screen w-1/2 px-20 items-center justify-center gap-10 mr-24 shadow-lg">
        <p className='text-xl text-[#6c5353] text-center font-bold'>Selecione o estágio:</p>
        <div className="grid grid-cols-3 gap-4 items-center content-center">
          {stageNames.map((stageName, i) => {
            return (
              <button
                key={`stage-${i}`}
                className="flex items-center justify-center h-16 w-16 bg-white hover:bg-amber-100 text-[#6c5353] text-4xl font-bold py-2 px-8 border border-[#ecdbdb] shadow-md hover:shadow-md hover:shadow-amber-300 rounded-full"
                onClick={() => handleStageSelect(i)}
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
