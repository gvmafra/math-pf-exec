// NamePage.tsx
import React from 'react';
import ButtonFratix from './ButtonFratix';

import bgPattern from '../img/bgPattern.svg';

const NamePage: React.FC = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bgPattern})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  };

  return (
    <div
      style={{
        ...backgroundStyle,
        position: 'absolute',
      }}
      className="flex h-screen items-center content-center bg-no-repeat bg-cover bg-[#60b6ba]"
    >
      <div className="flex flex-col items-center m-auto w-1/2 gap-8 z-10">
        <img
          src={require('../img/logoFratix.svg').default}
          alt="Logo Fratix"
          className="flex justify-center m-auto"
        />
        <div className=" flex flex-col items-center">
          <div className="flex items-center content-center gap-6">
            <ButtonFratix
              size="50"
              linkTo="/AllStagesPage"
              imgSrc={require('../img/iconFile.svg').default}
              altText="file icon"
            />
            <ButtonFratix
              size="50"
              linkTo="/AllStagesPage"
              imgSrc={require('../img/iconPlay.svg').default}
              altText="play icon"
            />
            <ButtonFratix
              size="50"
              linkTo="/AllStagesPage"
              imgSrc={require('../img/iconInfo.svg').default}
              altText="info icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NamePage;
