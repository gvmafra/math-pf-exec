// CreditPage.tsx
import React from 'react';
import ButtonFratix from './ButtonFratix';
import FratixBackground from './FratixBackground';

const NamePage: React.FC = () => {
  return (
    // main container
    <div className="flex h-screen items-center">
      {/* background */}
      <FratixBackground color="yellow" />

      {/* main page */}
      <div className="flex items-center m-auto gap-8 mt-12">
        <div className="flex flex-col items-center gap-4">
          <img
            src={require('../img/logoFratixSm.svg').default}
            alt="Logo Fratix"
            className="flex justify-center w-[200px]"
          />
          <p className="text-2xl text-center font-bold">CONFIGURAÇÕES</p>
        </div>
      </div>

      <div className="flex flex-col bg-white h-screen w-1/2 px-20 items-center justify-center gap-6 mr-24 shadow-lg font-semibold">
        <div className="flex w-full gap-6">
          <p>MÚSICA</p>
          <div className="flex h-6 w-full bg-slate-200 rounded-lg">
            <div className="h-full w-10 bg-red-300 rounded-lg" />
          </div>
        </div>
        <div className="flex w-full gap-6">
          <p>EFEITOS</p>
          <div className="flex h-6 w-full bg-slate-200 rounded-lg">
            <div className="h-full w-10 bg-red-300 rounded-lg" />
          </div>
        </div>
      </div>

      {/* config and exit buttons */}
      <div className="bottom-4 left-4 absolute">
        <ButtonFratix
          size="40"
          linkTo="/"
          imgSrc={require('../img/iconReturn.svg').default}
          altText="return icon"
        />
      </div>
    </div>
  );
};

export default NamePage;
