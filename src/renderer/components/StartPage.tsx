// Startpage.tsx
import React from 'react';
import ButtonFratix from './ButtonFratix';
import FratixBackground from './FratixBackground';

const StartPage: React.FC = () => {
  return (

    // main container
    <div className="flex h-screen items-center content-center">

      {/* background */}
      <FratixBackground color="blue" />
        
      {/* main page */}
      <div className="flex flex-col items-center m-auto w-4/6 gap-8 z-10">
        <img
          src={require('../img/logoFratix.svg').default}
          alt="Logo Fratix"
          className="flex justify-center m-auto max-w-[600px]"
        />
        <div className=" flex flex-col items-center">
          <div className="flex items-center content-center gap-6">
            <ButtonFratix
              size="50"
              linkTo="/CreditPage"
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
              linkTo="/AboutPage"
              imgSrc={require('../img/iconInfo.svg').default}
              altText="info icon"
            />
          </div>
        </div>
      </div>

      {/* config and exit buttons */}
      <div className="bottom-4 right-4 absolute">
        <ButtonFratix
          size="40"
          linkTo="/ConfigPage"
          imgSrc={require('../img/iconConfig.svg').default}
          altText="settings icon"
        />
      </div>
      <div className="bottom-4 left-4 absolute">
        <ButtonFratix
          size="40"
          linkTo="/NamePage"
          imgSrc={require('../img/iconExit.svg').default}
          altText="settings icon"
        />
      </div>

    </div>
  );
};

export default StartPage;
