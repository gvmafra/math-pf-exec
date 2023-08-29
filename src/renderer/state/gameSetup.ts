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
    genStageSix(),
    genStageSeven(),
    genStageEight(),
    genStageNine(),
    genStageTen(),
    genStageEleven(),
    genStageTwelve(),
  ],
});

export default genInitialState;
