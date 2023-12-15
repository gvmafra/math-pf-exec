// // I want to create a component that can be used to play audio files
// // as soon as the game loads, the audio file "fratixSound1.wav" should be played
// // and looped forever.
// // the audio file location is "src/renderer/audio/fratixSound1.wav"
// // this is what I have for the component so far:

// import { useState, useEffect } from "react";

// const useAudio = (url: string) => {
//   const [audio] = useState(new Audio(url));
//   const [playing, setPlaying] = useState(true);
//   const toggle = () => setPlaying(!playing);

//   audio.play().catch((error) => {
//     // Autoplay was prevented
//     console.error("Autoplay Error: ", error);
//   });

//   useEffect(() => {
//     const promise = playing ? audio.play() : audio.pause();

//     if (promise !== undefined) {
//       promise
//         .then((_) => {
//           // Autoplay started!
//         })
//         .catch((error) => {
//           // Autoplay was prevented
//           console.error("Autoplay Error: ", error);
//         });
//     }
//     audio.loop = true;
//   }, [playing]);

//   // Reset the audio to the beginning when the source changes
//   useEffect(() => {
//     audio.currentTime = 0;
//     audio.src = url;
//     setPlaying(false);

//     audio.onerror = function() {
//       console.error("Audio file not found: ", url);
//     };
//   }, [url]);

//   return [playing, toggle, audio];
// };

// export default useAudio;