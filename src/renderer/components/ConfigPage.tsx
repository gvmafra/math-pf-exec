// ConfigPage.tsx
import React, { useEffect, useState } from 'react';
import ButtonFratix from './ButtonFratix';
import FratixBackground from './FratixBackground';
import RangeSlider from './RangeSlider';
import Overlayed from './Overlayed';
import { Howl, Howler } from 'howler';
// import { useGameState } from '../state/gameReducer';

import fratixMusica from '../audio/fratixMusica.mp3';
const sound = new Howl({
  src: [fratixMusica],
  autoplay: true,
  loop: true,
});

const ConfigPage: React.FC = () => {

  const [volume, setVolume] = useState(100);
  useEffect(() => {
    Howler.volume(volume / 100);
  }, [volume]);

  // const [effectsVolume, setEffectsVolume] = useState(50);
  // useEffect(() => {
  //   Howler.volume(effectsVolume / 100);
  // }, [effectsVolume]);
  
  return (
    // main container
    <div className="flex h-screen items-center">

      <FratixBackground color="yellow" />

      {/* main page */}
      <div className="flex items-center m-auto gap-8 mt-12">
        <div className="flex flex-col items-center gap-4">
          <Overlayed
            imgSrc={require('../img/logoFratixSm.svg').default}
            altText="Logo Fratix"
            styling="flex justify-center w-[200px]"
          />
          <p className="text-2xl text-center font-bold">CONFIGURAÇÕES</p>
        </div>
      </div>

      <div className="flex flex-col bg-white h-screen w-1/2 items-center justify-center gap-6 mr-24 shadow-lg font-semibold">
        <div className="flex gap-4 w-3/4">
          <p>MÚSICA:</p>
          <RangeSlider
            value={volume}
            setValue={setVolume}
            min={0}
            max={100}
            step={1}
          />
          {volume}
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

export default ConfigPage;