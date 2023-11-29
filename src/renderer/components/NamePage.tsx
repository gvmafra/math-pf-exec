// NamePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Game from './Game';

const NamePage: React.FC = () => {
  return (
    <div className="flex h-screen bg-[#60b6ba] items-center content-center">
      <div className='flex flex-col items-center m-auto w-1/2 gap-8'>
        <img
          src={require('../img/logoFratix.svg').default}
          alt="Logo Fratix"
          className="flex justify-center m-auto"
        />
        <div className=" flex flex-col items-center w-1/2">
          <div className="flex items-center content-center gap-6">
            <button className="bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold p-2 rounded-full">
              <Link to="/AllStagesPage">
                <img
                  src={require('../img/iconReset.svg').default}
                  alt="arrow"
                  className="w-10 h-10"
                />
              </Link>
            </button>
            <button className="bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold p-2 rounded-full">
              <Link to="/AllStagesPage">
                <img
                  src={require('../img/iconInsight.svg').default}
                  alt="arrow"
                  className="w-10 h-10"
                />
              </Link>
            </button>
            <button className="bg-amber-100 hover:bg-amber-600 hover:text-white text-black font-bold p-2 rounded-full">
              <Link to="/AllStagesPage">
                <img
                  src={require('../img/iconAudio.svg').default}
                  alt="arrow"
                  className="w-10 h-10"
                />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NamePage;
