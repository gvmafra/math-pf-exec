import genStageOne from './stages/stageOne';
import genStageTwo from './stages/stageTwo';
import genStageThree from './stages/stageThree';
import genStageFour from './stages/stageFour';
import genStageFive from './stages/stageFive';
import genStageSix from './stages/stageSix';
import genStageSeven from './stages/stageSeven';
import genStageEight from './stages/stageEight';
import genStageNine from './stages/stageNine';
import genStageTen from './stages/stageTen';
import genStageEleven from './stages/stageEleven';
import genStageTwelve from './stages/stageTwelve';

import { GameState } from './types';

// Generate a new initialState
const genInitialState = (): GameState => ({
  currentStage: 0,
  justAdvancedStage: false,
  finishedGame: false,
  stages: [
    // genStageOne(),
    // genStageTwo(),
    // genStageThree(),
    // genStageFour(),
    // genStageFive(),
    // genStageSix(),
    // genStageSeven(),
    // genStageEight(),
    genStageNine(), // -- possível problema no 9
    // genStageTen(),
    // genStageEleven(),
    // genStageTwelve(), // -- probema no 12, back-end
  ],
});

export default genInitialState;

/*

ERR sept. 21 2023

TypeError
Cannot read properties of undefined (reading 'challengeId')
Call Stack
 undefined
  renderer.dev.js:51768:101
 initializeLevelChallenges
  renderer.dev.js:51767:20
 genRandomChallengeCanvases
  renderer.dev.js:51853:12
 undefined
  renderer.dev.js:51623:154
 genStageTwelve
  renderer.dev.js:51622:12
 genInitialState
  renderer.dev.js:50906:72
 useGameState
  renderer.dev.js:50825:134
 App
  renderer.dev.js:48771:95
× Close

*/
