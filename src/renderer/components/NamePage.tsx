// NamePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Game from './Game';

const NamePage: React.FC = () => {
  return (
    <div className="flex h-screen bg-cyan-200">
      <div className="m-auto bg-green-300 p-4 rounded-3xl drop-shadow-md">
        {/* display logoFratix from renderer/img/logoFratix.svg */}
        <div className="flex justify-center">
          <img
            src={require('../img/logoFratix.svg').default}
            alt="Logo Fratix"
            className="m-auto"
          />
        </div>
        <div className="bg-amber-300 rounded-2xl flex flex-col items-center p-8 gap-8">
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

export default NamePage;
