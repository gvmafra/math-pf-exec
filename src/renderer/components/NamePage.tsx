// NamePage.tsx
import React from 'react';
import ButtonFratix from './ButtonFratix';
import FratixBackground from './FratixBackground';

const NamePage: React.FC = () => {
  return (
    <div className="flex h-screen items-center content-center">

      <FratixBackground color="blue" />

      <div className="flex flex-col items-center m-auto w-4/6 gap-8 z-10">
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
      
      <div className="bottom-4 right-4 absolute">
        <ButtonFratix
          size="40"
          linkTo="/AllStagesPage"
          imgSrc={require('../img/iconConfig.svg').default}
          altText="settings icon"
        />
      </div>
      <div className="bottom-4 left-4 absolute">
        <ButtonFratix
          size="40"
          linkTo="/AllStagesPage"
          imgSrc={require('../img/iconExit.svg').default}
          altText="settings icon"
        />
      </div>
    </div>
  );
};

export default NamePage;
