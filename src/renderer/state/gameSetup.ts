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
    genStageOne(),
    genStageTwo(),
    genStageThree(),
    genStageFour(),
    genStageFive(),
    // genStageSix(),
    genStageSeven(),
    genStageEight(),
    // genStageNine(),
    genStageTen(),
    genStageEleven(),
    // genStageTwelve(),
  ],
});

export default genInitialState;


/*
ERR sept. 6 2023

TypeError
Cannot read properties of undefined (reading 'challengeId')
Call Stack
 undefined
  renderer.dev.js:51369:101
 initializeLevelChallenges
  renderer.dev.js:51368:20
 genRandomChallengeCanvases
  renderer.dev.js:51454:12
 undefined
  renderer.dev.js:51224:154
 genStageTwelve
  renderer.dev.js:51223:12
 genInitialState
  renderer.dev.js:50890:72
 useGameState
  renderer.dev.js:50815:134
 App
  renderer.dev.js:48771:95
× Close
going through stageNine.ts

*/
