// CreditPage.tsx
import React from 'react';
import ButtonFratix from './ButtonFratix';
import FratixBackground from './FratixBackground';

const NamePage: React.FC = () => {
  return (

    // main container
    <div className="flex h-screen items-center content-center">

      {/* background */}
      <FratixBackground color="blue" />
        
      {/* main page */}
      <div className="flex flex-col items-center m-auto w-4/6 gap-8 z-10">

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
          linkTo="/"
          imgSrc={require('../img/iconExit.svg').default}
          altText="settings icon"
        />
      </div>
      
    </div>
  );
};

export default NamePage;