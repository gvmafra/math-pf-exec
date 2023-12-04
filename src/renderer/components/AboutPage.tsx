// CreditPage.tsx
import React from 'react';
import ButtonFratix from './ButtonFratix';
import FratixBackground from './FratixBackground';

const NamePage: React.FC = () => {
  return (
    // main container
    <div className="flex h-screen items-center text-[#6c5353]">
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
          <p className="text-2xl text-center font-bold">SOBRE</p>
        </div>
      </div>

      <div className="flex flex-col bg-white h-screen w-1/2 px-20 items-start justify-center gap-6 mr-24 shadow-lg">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
        <p className='font-semibold'>Bom jogo! <span className='font-light text-zinc-700'><br/>- Equipe MJogos</span></p>
      </div>

      {/* return button */}
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
