// Game.tsx
import { Dispatch, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameState } from 'renderer/state/types';

import { Action } from 'renderer/state/gameReducer';
import Challenge from './canvas/Challenge';
import CircleButton from './CircleButton';
import GridSplitterButton from './GridSplitterButton';
import Canvas from './canvas/Canvas';

interface GameProps {
  state: GameState;
  dispatch: Dispatch<Action>;
}

export default function Game({ state, dispatch }: GameProps) {
  const navigate = useNavigate();

  const { currentStage: currentStageNum } = state;
  const { currentLevel: currentLevelNum } =
    state.stages[currentStageNum].metadata;
  const currentStageRef = state.stages[currentStageNum];
  const currentLevelRef = currentStageRef.levels[currentLevelNum];

  const handleResetSquare = () => {
    dispatch({
      type: 'RESET_SQUARE',
      payload: { stageIndex: currentStageNum, levelIndex: currentLevelNum },
    });
  };

  const handleResetGame = () => {
    dispatch({ type: 'RESET_GAME' });
    navigate('/AllStagesPage');
  };

  const handleNextLevelClick = () => {
    dispatch({
      type: 'NEXT_LEVEL',
      payload: {
        stageIndex: currentStageNum,
        levelIndex: currentLevelNum,
      },
    });
  };

  // save game state to local storage
  // useEffect(() => {
  //   localStorage.setItem('gameState', JSON.stringify(state));
  // }, [state]);

  const handleExitToConfig = () => {
    navigate('/ConfigPage');
  };

  useEffect(() => {
    if (state.finishedGame) {
      navigate('/FinishedGame');
    } else if (state.justAdvancedStage) {
      navigate('/AdvanceStage');
    }
  }, [state.finishedGame, state.justAdvancedStage, navigate]);

  const horizontalSplitDisabled =
    currentLevelRef.canvas.type !== 'grid' ||
    currentLevelRef.canvas.grid.options.rows.length === 1;

  const verticalSplitDisabled =
    currentLevelRef.canvas.type !== 'grid' ||
    currentLevelRef.canvas.grid.options.columns.length === 1;

  return (
    <div className=" relative flex w-screen items-center justify-between h-screen">
      {/* left panel */}
      <div className="flex flex-col items-center justify-center w-[30vw] h-screen bg-[#74c0c9]">
        <div className="flex gap-6 mb-auto p-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center w-[4rem] h-[4rem] bg-white border-4 border-yellow-400 rounded-full font-bold text-4xl">
              {currentStageNum + 1}
            </div>
            <img
              src={require('../img/iconEstágio.svg').default}
              alt="stage"
              className="w-24 h-auto"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center w-[4rem] h-[4rem] bg-white border-4 border-yellow-400 rounded-full font-bold text-4xl">
              {currentLevelNum + 1}
            </div>
            <img
              src={require('../img/iconNivel.svg').default}
              alt="level"
              className="w-20 h-auto"
            />
          </div>
        </div>
        <div className="flex w-full h-1/2 items-center justify-center bg-[#9378e3] relative">
          <div className='absolute left-0'>
            <img
              src={require('../img/gridArt.svg').default}
              alt="grid"
              className="w-[17rem] h-auto left-0"
            />
          </div>
          <div className='absolute left-[7.3rem]'>

          <GridSplitterButton
            dispatch={dispatch}
            direction="horizontal"
            disabled={horizontalSplitDisabled}
            stageIndex={currentStageNum}
            levelIndex={currentLevelNum}
          />
          </div>
        </div>
        <div className="flex gap-4 mt-auto p-12">
          {/* <CircleButton
            onClick={() => dispatch({ type: 'PREV_LEVEL' })}
            ariaLabel="Previous Level"
          >
            <img
              src={require('../img/iconReturn.svg').default}
              alt="back"
              className="w-12 h-auto"
            />
          </CircleButton> */}
          <CircleButton onClick={handleExitToConfig} ariaLabel="Next Level">
            <img
              src={require('../img/iconAudio.svg').default}
              alt="next"
              className="w-12 h-auto"
            />
          </CircleButton>
          <CircleButton onClick={handleResetGame} ariaLabel="Reset Game">
            <img
              src={require('../img/iconLeave.svg').default}
              alt="reset"
              className="w-12 h-auto"
            />
          </CircleButton>
          <CircleButton onClick={handleResetSquare} ariaLabel="Reset Square">
            <img
              src={require('../img/iconReset.svg').default}
              alt="reset"
              className="w-12 h-auto"
            />
          </CircleButton>
        </div>
      </div>

      {/* middle panel */}
      <div className="flex flex-col items-center justify-between w-[40vw] h-screen">
        <div className="flex flex-col items-center justify-center bg-[#f66844] w-full h-full gap-14">
          <Challenge
            gameCanvas={
              state.stages[currentStageNum].levels[currentLevelNum].challenge
            }
            handleToggle={() => {}}
          />
          <Canvas
            gameCanvas={currentLevelRef.canvas}
            dispatch={dispatch}
            currentLevel={currentLevelNum}
            currentStage={currentStageNum}
          />
        </div>
        <div className="flex bg-[#eebd35] w-full items-center justify-center p-3 mb-0">
          <img
            src={require('../img/logoFratixSm.svg').default}
            alt="Logo Fratix"
            className="w-[200px]"
          />
        </div>
      </div>

      {/* right panel */}
      <div className="flex flex-col items-center justify-center w-[30vw] h-screen bg-[#74c0c9]">
        <div className="flex gap-4 mb-auto p-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center w-[4rem] h-[4rem] bg-white border-4 border-yellow-400 rounded-full font-bold text-4xl">
              {currentLevelRef.metadata.clickCount}
            </div>
            <img
              src={require('../img/iconCliques.svg').default}
              alt="clicks"
              className="w-24 h-auto"
            />
          </div>
        </div>
        <div className="flex w-full h-1/2 items-center justify-center bg-[#9378e3] relative">
        <div className='absolute right-0'>
  <img
    src={require('../img/gridArt.svg').default}
    alt="grid"
    className="w-[17rem] h-auto right-0 transform scale-x-[-1]" // Use Tailwind's utility classes for transformation.
  />
</div>
          <div className='absolute right-[7.3rem]'>

          <GridSplitterButton
            dispatch={dispatch}
            direction="vertical"
            disabled={verticalSplitDisabled}
            stageIndex={currentStageNum}
            levelIndex={currentLevelNum}
          />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-auto p-6">
          <CircleButton onClick={handleNextLevelClick} ariaLabel="Next Level">
            <img
              src={require('../img/iconNext.svg').default}
              alt="next"
              className="w-14 h-auto"
            />
          </CircleButton>
          <img
            src={require('../img/iconAvancar.svg').default}
            alt="level"
            className="w-28 h-auto"
          />
        </div>
        {/* <h3 className="text-black text-xl">
          Pontos: {currentLevelRef.metadata.score}
        </h3> */}
      </div>
    </div>
  );
}
