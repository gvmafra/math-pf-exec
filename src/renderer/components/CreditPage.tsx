// CreditPage.tsx
import React from 'react';
import ButtonFratix from './ButtonFratix';
import FratixBackground from './FratixBackground';
import Overlayed from './Overlayed';

const NamePage: React.FC = () => {
  return (
    // main container
    <div className="flex h-screen items-center text-[#6c5353]">
      {/* background */}
      <FratixBackground color="yellow" />

      {/* main page */}
      <div className="flex items-center m-auto gap-8 mt-12">
        <div className="flex flex-col items-center gap-4">
          <Overlayed
            imgSrc={require('../img/logoFratixSm.svg').default}
            altText="Logo Fratix"
            styling="flex justify-center w-[200px]"
          />
          <p className="text-2xl text-center font-bold">CRÉDITOS</p>
        </div>
      </div>

      <div className="flex flex-col bg-[#fdffee] h-screen w-1/2 px-20 items-start justify-center gap-3 mr-24 shadow-lg font-semibold">
        <p>Profissional um | Função</p>
        <p>Profissional dois | Função</p>
        <p>Profissional três | Função</p>
        <p>Profissional quatro | Função</p>
        <p>Profissional cinco | Função</p>
        <p>Profissional seis | Função</p>
        <p>Profissional sete | Função</p>
        <p>Profissional oito | Função</p>
        <p>Profissional nove | Função</p>
        <p>Profissional dez | Função</p>
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
