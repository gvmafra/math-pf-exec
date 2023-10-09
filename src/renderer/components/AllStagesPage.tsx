//AllStatesPage.tsx
import { GameState } from 'renderer/state/types';
import genInitialState from '../state/gameSetup';
import { Link } from 'react-router-dom';
import React from 'react';
import { StageMetadata } from 'renderer/state/types';

import genStageOne from 'renderer/state/stages/stageOne';
import genStageTwo from 'renderer/state/stages/stageTwo';
import genStageThree from 'renderer/state/stages/stageThree';
import genStageFour from 'renderer/state/stages/stageFour';
import genStageFive from 'renderer/state/stages/stageFive';
import genStageSix from 'renderer/state/stages/stageSix';
import genStageSeven from 'renderer/state/stages/stageSeven';
import genStageEight from 'renderer/state/stages/stageEight';
import genStageNine from 'renderer/state/stages/stageNine';
import genStageTen from 'renderer/state/stages/stageTen';
import genStageEleven from 'renderer/state/stages/stageEleven';
import genStageTwelve from 'renderer/state/stages/stageTwelve';

import { Dispatch, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Action } from 'renderer/state/gameReducer';
import Challenge from './canvas/Challenge';
import Panel from './Panel';
import CircleButton from './CircleButton';
import GridSplitterButton from './GridSplitterButton';
import Canvas from './canvas/Canvas';

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


/*

[webpack-dev-server] Server started: Hot Module Replacement disabled, Live Reloading disabled, Progress disabled, Overlay disabled.
log.js:39 [HMR] Waiting for update signal from WDS...
react-dom.development.js:29840 Download the React DevTools for a better development experience: https://reactjs.org/link/react-devtools
index.tsx:11 IPC test: pong
2gameReducer.ts:55 Cannot divide a non-grid canvas

*/