// BeginPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Game from './Game';

const BeginPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-cyan-200">
      <div className="m-auto pb-4">
        <h1 className="font-bold text-center mb-4 text-2xl">
          - PINTANDO FRAÇÕES -
        </h1>
        <div className="bg-amber-300 rounded-3xl flex flex-col items-center p-8 gap-8 border-0 drop-shadow-md">
          <input
            type="text"
            placeholder="Enter your name..."
            className="rounded-xl px-4 py-2 w-full"
          />
          <div className="flex items-center content-center gap-4">
            <button className="bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold py-2 px-8 rounded-xl">
              <Link to="/Game">Começar</Link>
            </button>
            <button className="bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold py-2 px-8 rounded-xl">
              <Link to="/AllStagesPage">Estágios</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeginPage;