// I need to create a function that will play different kinds of sound when the user clicks on a button, depending on variables. I'm using react and typescript.
// I already imported Howler to handle .wav and .mp3 files, and imported the files I need to play.
// Pay attention to the comments in the code and deliver the answer with the code modified.
// Here's the code:

// ```
// // Game.tsx
// import { Dispatch, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { GameState } from 'renderer/state/types';
// import { Action } from 'renderer/state/gameReducer';

// import Challenge from './canvas/Challenge';
// import CircleButton from './CircleButton';
// import GridSplitterButton from './GridSplitterButton';
// import Canvas from './canvas/Canvas';
// import Overlayed from './Overlayed';

// import { Howl, Howler } from 'howler';

// import estagioFim from '../audio/estagioFim.wav';
// import nivelFim from '../audio/nivelFim.wav';
// import somDeErro from '../audio/somDeErro.wav';


// interface GameProps {
//   state: GameState;
//   dispatch: Dispatch<Action>;
// }

// export default function Game({ state, dispatch }: GameProps) {

//   const navigate = useNavigate();

//   const { currentStage: currentStageNum } = state;
//   const { currentLevel: currentLevelNum } =
//     state.stages[currentStageNum].metadata;
//   const currentStageRef = state.stages[currentStageNum];
//   const currentLevelRef = currentStageRef.levels[currentLevelNum];

//   const handleResetSquare = () => {
//     dispatch({
//       type: 'RESET_SQUARE',
//       payload: { stageIndex: currentStageNum, levelIndex: currentLevelNum },
//     });
//   };

//   const handleResetGame = () => {
//     dispatch({ type: 'RESET_GAME' });
//     navigate('/AllStagesPage');
//   };

//   const handleNextLevelClick = () => {
//     dispatch({
//       type: 'NEXT_LEVEL',
//       payload: {
//         stageIndex: currentStageNum,
//         levelIndex: currentLevelNum,
//       },
//     });
//   };

//   const handleExitToConfig = () => {
//     navigate('/ConfigPage');
//   };

//   useEffect(() => {
//     if (state.finishedGame) {
//       navigate('/FinishedGame');
//     } else if (state.justAdvancedStage) {
//       navigate('/AdvanceStage');
//     }
//   }, [state.finishedGame, state.justAdvancedStage, navigate]);

//   const horizontalSplitDisabled =
//     currentLevelRef.canvas.type !== 'grid' ||
//     currentLevelRef.canvas.grid.options.rows.length === 1;

//   const verticalSplitDisabled =
//     currentLevelRef.canvas.type !== 'grid' ||
//     currentLevelRef.canvas.grid.options.columns.length === 1;

//   interface StarScoreProps {
//     score: number;
//   }
//   const StarScore: React.FC<StarScoreProps> = ({ score }) => {
//     let stars = [];
//     for (let i = 0; i < score; i++) {
//       stars.push(
//         <img
//           src={require('../img/iconStar.svg').default}
//           alt="Star"
//           key={i}
//           className="w-8 h-8 flex"
//         />
//       );
//     }
//     return <>{stars}</>;
//   };

//   return (
//     <div>
    
//       {/* ...rest of code... */}

//       {/* 
//         I need to add functionality to this button, so that 
//         if the user clicks on it and passes to the next level, it triggers the 'nivelFim.wav' audio track. 
//         If the user clicks on it and passes to the next stage, it triggers the 'estagioFim.wav' audio track.
//         If the user clicks on it and does not pass the level, it triggers the 'somDeErro.wav' audio track.
//       */}
//       <CircleButton
//         onClick={handleNextLevelClick}
//         ariaLabel="Next Level"
//         color="red"
//       >
//         <Overlayed
//           imgSrc={require('../img/iconNext.svg').default}
//           altText="next"
//           styling="w-28 h-auto"
//         />
//       </CircleButton>

//       {/* ...rest of code... */}

//     </div>
//   );
// }
// ```

// And here's the type and logic controlling the next level button in the reducer:

// ```
// //gameReducer.ts
// import { produce } from 'immer';
// import type { Draft } from 'immer';
// import { useReducer } from 'react';
// import { GameState } from 'renderer/state/types';
// import { getToggledRatio } from './utils';
// import genInitialState from './gameSetup';
// import scoreData from './scoreData';
// import { calculateStageScore } from './stages/utils';

// export type Direction = 'horizontal' | 'vertical';
// export type Action =
//   | {
//       type: 'TOGGLE_CELL';
//       payload: {
//         stageIndex: number;
//         levelIndex: number;
//         cellIndex: number;
//       };
//     }
//   | { type: 'NEXT_LEVEL'; payload: { stageIndex: number; levelIndex: number } }
//   | { type: 'PREV_LEVEL'; payload?: undefined }
//   | { type: 'DIVIDE_SQUARE'; payload: { direction: Direction } }
//   | { type: 'STAGE_COMPLETED'; payload: { stageIndex: number } }
//   | {
//       type: 'RESET_SQUARE';
//       payload: { stageIndex: number; levelIndex: number };
//     }
//   | { type: 'RESET_GAME'; payload?: undefined }
//   | { type: 'CLEAR_JUST_ADVANCED_STAGE'; payload?: undefined }
//   | {
//       type: 'INCREMENT_CLICK_COUNT';
//       payload: { stageIndex: number; levelIndex: number };
//     }
//   | { type: 'SET_STAGE'; payload: { stageIndex: number } };

// function loopList<T>(list: T[], index: number): T {
//   const lastIndex = list.length - 1;
//   if (index < 0) {
//     return list[lastIndex];
//   }
//   if (index > lastIndex) {
//     return list[0];
//   }
//   return list[index];
// }

// export default function gameStateReducer(
//   state: GameState,
//   action: Action
// ): GameState {
//   return produce(state, (draft: Draft<GameState>) => {
//     switch (action.type) {

//       // ...rest of code...

//       case 'NEXT_LEVEL': {
//         const { stageIndex: currentStageIndex, levelIndex: currentLevelIndex } =
//           action.payload;

//         const stageLastIndex = draft.stages.length - 1;
//         const levelLastIndex =
//           draft.stages[currentStageIndex].levels.length - 1;

//         if (
//           currentStageIndex < 0 ||
//           currentStageIndex > stageLastIndex ||
//           currentLevelIndex < 0 ||
//           currentLevelIndex > levelLastIndex
//         ) {
//           return;
//         }

//         const currentLevel =
//           draft.stages[currentStageIndex].levels[currentLevelIndex];

//         const challengeRatio = getToggledRatio(currentLevel.challenge);
//         const canvasRatio = getToggledRatio(currentLevel.canvas);

//         if (challengeRatio !== canvasRatio) {
//           return;
//         }

//         draft.stages[currentStageIndex].levels[
//           currentLevelIndex
//         ].metadata.completed = true;

//         if (currentLevelIndex + 1 > levelLastIndex) {
//           if (currentStageIndex + 1 > stageLastIndex) {
//             draft.stages[currentStageIndex].metadata.completed = true;
//             draft.finishedGame = true;
//             return;
//           }
//           draft.stages[currentStageIndex].metadata.completed = true;
//           draft.currentStage = currentStageIndex + 1;
//           draft.justAdvancedStage = true;
//         } else {
//           draft.stages[currentStageIndex].metadata.currentLevel += 1;
//           draft.stages[currentStageIndex].levels[
//             currentLevelIndex + 1
//           ].metadata.completed = false;
//           draft.stages[currentStageIndex].levels[
//             currentLevelIndex
//           ].metadata.clickCount = 0;
//         }

//         break;
//       }

//       // ...rest of code...
      
//       default: {
//         break;
//       }
//     }
//   });
// }

// export function useGameState() {
//   return useReducer(gameStateReducer, genInitialState());
// }
// ```

// In Addition, I want to be able to control the volume of the audio tracks, the same way I am already doing with the background music, which is controlled by the slider in the config page:

// ```
// // Config.tsx
// // ConfigPage.tsx
// import React, { useEffect, useState } from 'react';
// import ButtonFratix from './ButtonFratix';
// import FratixBackground from './FratixBackground';
// import RangeSlider from './RangeSlider';
// import Overlayed from './Overlayed';
// import { Howl, Howler } from 'howler';

// import fratixMusica from '../audio/fratixMusica.mp3';

// const sound = new Howl({
//   src: [fratixMusica],
//   autoplay: true,
//   loop: true,
// });

// const ConfigPage: React.FC = () => {
//   const [volume, setVolume] = useState(50);

//   useEffect(() => {
//     Howler.volume(volume / 100);
//   }, [volume]);

//   return (
//     // main container
//     <div className="flex h-screen items-center">

//       <FratixBackground color="yellow" />

//       {/* main page */}
//       <div className="flex items-center m-auto gap-8 mt-12">
//         <div className="flex flex-col items-center gap-4">
//           <Overlayed
//             imgSrc={require('../img/logoFratixSm.svg').default}
//             altText="Logo Fratix"
//             styling="flex justify-center w-[200px]"
//           />
//           <p className="text-2xl text-center font-bold">CONFIGURAÇÕES</p>
//         </div>
//       </div>

//       <div className="flex flex-col bg-white h-screen w-1/2 items-center justify-center gap-6 mr-24 shadow-lg font-semibold">
//         <div className="flex gap-4 w-3/4">
//           <p>MÚSICA:</p>
//           <RangeSlider
//             value={volume}
//             setValue={setVolume}
//             min={0}
//             max={100}
//             step={1}
//           />
//           {volume}
//         </div>
//         <div>
//           {/* the rangeslider used for the effects would be placed here */}
//         </div>
//       </div>

//       {/* config and exit buttons */}
//       <div className="bottom-4 left-4 absolute">
//         <ButtonFratix
//           size="40"
//           linkTo="/"
//           imgSrc={require('../img/iconReturn.svg').default}
//           altText="return icon"
//         />
//       </div>
//     </div>
//   );
// };

// export default ConfigPage;


// ---------------------------------------------------------------------------------------------------------------


// Sure, to achieve your requirements, you can create a new function called handleAudioPlayer which will decide when to play which sound file. Then, you can control the sounds' volumes by creating another RangeSlider exactly like the one you already have implemented to control the background music volume.


// Let's start with the `Game.tsx`:

// Here's the modified code of `Game.tsx`:

// ```
// import { Dispatch, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { GameState } from 'renderer/state/types';
// import { Action } from 'renderer/state/gameReducer';

// import Challenge from './canvas/Challenge';
// import CircleButton from './CircleButton';
// import GridSplitterButton from './GridSplitterButton';
// import Canvas from './canvas/Canvas';
// import Overlayed from './Overlayed';

// import { Howl, Howler } from 'howler';

// import estagioFim from '../audio/estagioFim.wav';
// import nivelFim from '../audio/nivelFim.wav';
// import somDeErro from '../audio/somDeErro.wav';

// // create howl instances for each sound
// const estagioFimSound = new Howl({ src: [estagioFim] });
// const nivelFimSound = new Howl({ src: [nivelFim] });
// const somDeErroSound = new Howl({ src: [somDeErro] });

// interface GameProps {
//   state: GameState;
//   dispatch: Dispatch<Action>;
// }

// export default function Game({ state, dispatch }: GameProps) {

//   const [volume, setVolume] = useState(50); // volume state for sound effects

//   // handleVolume function to control sound effect volumes
//   const handleVolume = (value: number) => {
//     Howler.volume(value / 100);
//     setVolume(value);
//   };

//   const navigate = useNavigate();
//   ...
//   // ...rest of code...

//   const handleAudioPlayer = (statusCode: string) => {
//     switch (statusCode) {
//       case 'nextLevel':
//         nivelFimSound.play();
//         break;
//       case 'nextStage':
//         estagioFimSound.play();
//         break;
//       case 'levelFailed':
//         somDeErroSound.play();
//         break;
//     }
//   };

//   const handleNextLevelClick = () => {
//     // Before dispatching 'NEXT_LEVEL'
//     // Check some conditions based on new state to decide which sound file to play
//     // You need to determine the conditions, but a template might look like this:
//     if (state.finishedGame) {
//       handleAudioPlayer('nextStage'); // Next stage sound as the game has ended
//     } else if (/* condition here indicating user just advanced stage */) {
//       handleAudioPlayer('nextStage'); // Next stage
//     } else if (/* condition here indicating user failed to pass level */) {
//       handleAudioPlayer('levelFailed'); // Error sound
//     } else {
//       handleAudioPlayer('nextLevel'); // Next level
//     }

//     dispatch({
//       type: 'NEXT_LEVEL',
//       payload: {
//         stageIndex: currentStageNum,
//         levelIndex: currentLevelNum,
//       },
//     });
//   };

//   // ...rest of code...

// }
// ```

// Please replace `/* condition here indicating user just advanced stage */` and `/* condition here indicating user failed to pass level */` with the actual conditions based on your game logic.

// And for the volume control, edit `ConfigPage.tsx`:

// ```
// // ...rest of code...

//   const [effectsVolume, setEffectsVolume] = useState(50);

//   useEffect(() => {
//     Howler.volume(effectsVolume / 100);
//   }, [effectsVolume]);

//   return (
//     // main container
//     <div className="flex h-screen items-center">

//       <FratixBackground color="yellow" />
//    // ...rest of code...
 
 
//   <div className="flex gap-4 w-3/4">
//     <p>EFEITOS SONOROS:</p>
//     <RangeSlider
//       value={effectsVolume}
//       setValue={setEffectsVolume}
//       min={0}
//       max={100}
//       step={1}
//     />
//     {effectsVolume}
//   </div>

//   // ... rest of code...
 
// }
// ```