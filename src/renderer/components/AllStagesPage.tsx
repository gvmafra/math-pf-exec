//AllStatesPage.tsx
import { GameState } from 'renderer/state/types';
import genInitialState from '../state/gameSetup';
import { Link } from 'react-router-dom';
import { Dispatch } from 'react';
import { Action } from 'renderer/state/gameReducer';

interface GameProps {
  state: GameState;
  dispatch: Dispatch<Action>;
}

const AllStagesPage: React.FC = () => {
  const gameState: GameState = genInitialState();
  return (
    <div className="flex h-screen bg-cyan-200">
      <div className="flex flex-col items-center content-center gap-2 m-auto pb-4">
        <h1 className="font-bold text-center text-2xl p-2">
          Lista De Estágios
        </h1>
        <div className="flex flex-col items-center content-center gap-2">
          <div className="flex gap-2 items-center content-center">
            <button className="w-[300px] bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold py-2 px-8 border-2 border-black rounded-xl">
              <Link to="/genStageOne">Estágio Um</Link>
            </button>
            <button className="w-[300px] bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold py-2 px-8 border-2 border-black rounded-xl">
              <Link to="/genStageTwo">Estágio Dois</Link>
            </button>
          </div>
          <div className="flex gap-2 items-center content-center">
            <button className="w-[300px] bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold py-2 px-8 border-2 border-black rounded-xl">
              <Link to="/genStageThree">Estágio Três</Link>
            </button>
            <button className="w-[300px] bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold py-2 px-8 border-2 border-black rounded-xl">
              <Link to="/genStageFour">Estágio Quatro</Link>
            </button>
          </div>
          <div className="flex gap-2 items-center content-center">
            <button className="w-[300px] bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold py-2 px-8 border-2 border-black rounded-xl">
              <Link to="/genStageFive">Estágio Cinco</Link>
            </button>
            <button className="w-[300px] bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold py-2 px-8 border-2 border-black rounded-xl">
              <Link to="/genStageSix">Estágio Seis</Link>
            </button>
          </div>
          <div className="flex gap-2 items-center content-center">
            <button className="w-[300px] bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold py-2 px-8 border-2 border-black rounded-xl">
              <Link to="/genStageSeven">Estágio Sete</Link>
            </button>
            <button className="w-[300px] bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold py-2 px-8 border-2 border-black rounded-xl">
              <Link to="/genStageEight">Estágio Oito</Link>
            </button>
          </div>
          <div className="flex gap-2 items-center content-center">
            <button className="w-[300px] bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold py-2 px-8 border-2 border-black rounded-xl">
              <Link to="/genStageNine">Estágio Nove</Link>
            </button>
            <button className="w-[300px] bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold py-2 px-8 border-2 border-black rounded-xl">
              <Link to="/genStageTen">Estágio Dez</Link>
            </button>
          </div>
          <div className="flex gap-2 items-center content-center">
            <button className="w-[300px] bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold py-2 px-8 border-2 border-black rounded-xl">
              <Link to="/genStageEleven">Estágio Onze</Link>
            </button>
            <button className="w-[300px] bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold py-2 px-8 border-2 border-black rounded-xl">
              <Link to="/genStageTwelve">Estágio Doze</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStagesPage;