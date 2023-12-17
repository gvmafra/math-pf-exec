/*
This hook handles the audio files that will be played when the user interacts with the app.
The location for the audio files is in "src/renderer/audio" folder.
I will be using the Howler library to play the audio files.
*/

// useAudio.tsx
import { Howl } from 'howler';
import { useEffect, useState } from 'react';

const useAudio = (src: string, options = { loop: false, volume: 0.5 }) => {
  const [sound, setSound] = useState<Howl>();
  
  useEffect(() => {
    const howl = new Howl({ src: [src], ...options });
    setSound(howl);
    return () => {
      howl.unload();
    };
  }, [src, options]);

  const play = () => sound?.play();
  
  return { play, sound };
};

const estagioFimAudio = () => useAudio('../audio/estagioFim.mp3');
const nivelFimAudio = () => useAudio('../audio/nivelFim.wav');
const somDeErro = () => useAudio('../audio/somDeErro.wav');

export { estagioFimAudio, nivelFimAudio, somDeErro };