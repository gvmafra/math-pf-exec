// Game.tsx
import { Dispatch, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameState } from 'renderer/state/types';

import { Action } from 'renderer/state/gameReducer';
import Challenge from './canvas/Challenge';
import CircleButton from './CircleButton';
import GridSplitterButton from './GridSplitterButton';
import Canvas from './canvas/Canvas';
import Overlayed from './Overlayed';

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

  interface StarScoreProps {
    score: number;
  }
  const StarScore: React.FC<StarScoreProps> = ({ score }) => {
    let stars = [];
    for (let i = 0; i < score; i++) {
      stars.push(
        <img
          src={require('../img/iconStar.svg').default}
          alt="Star"
          key={i}
          className="w-8 h-8 flex"
        />
      );
    }
    return <>{stars}</>;
  };

  return (
    <div className=" relative flex w-screen items-center justify-between h-screen">
      {/* left panel */}
      <div className="flex flex-col items-center justify-center w-[30vw] h-screen bg-[#74c0c9]">
        <div className="flex gap-6 mb-auto p-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center w-[4rem] h-[4rem] bg-white border-4 border-yellow-400 rounded-full font-bold text-4xl">
              {currentStageNum + 1}
            </div>
            <Overlayed
              imgSrc={require('../img/iconEstágio.svg').default}
              altText="stage"
              styling="w-24 h-auto"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center w-[4rem] h-[4rem] bg-white border-4 border-yellow-400 rounded-full font-bold text-4xl">
              {currentLevelNum + 1}
            </div>
            <Overlayed
              imgSrc={require('../img/iconNivel.svg').default}
              altText="level"
              styling="w-20 h-auto"
            />
          </div>
        </div>
        <div className="flex w-full h-1/2 items-center justify-center bg-[#9378e3] relative">
          <div className="absolute left-0">
            <Overlayed
              imgSrc={require('../img/gridArt.svg').default}
              altText="grid"
              styling="w-[17rem] h-auto left-0"
            />
          </div>
          <div className="absolute w-8 right-0 h-full bg-gradient-to-l from-purple-700 to-transparent -z-1" />
          <div className="absolute left-[7.3rem]">
            {' '}
            {/* horizontal button */}
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
          {' '}
          {/* bottom buttons */}
          <CircleButton
            onClick={handleExitToConfig}
            ariaLabel="Exit to Config"
            color="red"
          >
            <Overlayed
              imgSrc={require('../img/iconAudio.svg').default}
              altText="next"
              styling="w-12 h-auto"
            />
          </CircleButton>
          <CircleButton
            onClick={handleResetGame}
            ariaLabel="Reset Game"
            color="red"
          >
            <Overlayed
              imgSrc={require('../img/iconLeave.svg').default}
              altText="reset"
              styling="w-12 h-auto"
            />
          </CircleButton>
          <CircleButton
            onClick={handleResetSquare}
            ariaLabel="Reset Square"
            color="red"
          >
            <Overlayed
              imgSrc={require('../img/iconReset.svg').default}
              altText="reset"
              styling="w-12 h-auto"
            />
          </CircleButton>
        </div>
      </div>

      {/* middle panel */}
      <div className="flex flex-col items-center justify-between w-[40vw] h-screen">
        <div className="flex flex-col items-center justify-center bg-[#f66844] w-full h-full gap-4">
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
        <div className="flex items-center justify-center w-full bg-[#f66844] h-20 gap-4">
          <div className="flex items-center justify-center bg-[#fff] h-12 mb-8 px-4 gap-2 rounded-full">
            <StarScore score={currentLevelRef.metadata.score} />
          </div>
        </div>

        <div className="flex bg-[#eebd35] w-full items-center justify-center p-2 mb-0">
          <Overlayed
            imgSrc={require('../img/logoFratixSm.svg').default}
            altText="Logo Fratix"
            styling="w-[150px]"
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
            <Overlayed
              imgSrc={require('../img/iconCliques.svg').default}
              altText="clicks"
              styling="w-24 h-auto"
            />
          </div>
        </div>
        <div className="flex w-full h-1/2 items-center justify-center bg-[#9378e3] relative">
          <div className="absolute right-0">
            <Overlayed
              imgSrc={require('../img/gridArt.svg').default}
              altText="grid"
              styling="w-[17rem] h-auto right-0 transform scale-x-[-1]"
            />
          </div>
          <div className="absolute w-8 left-0 h-full bg-gradient-to-r from-purple-700 to-transparent -z-1" />
          <div className="absolute right-[7.3rem]">
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
          <CircleButton
            onClick={handleNextLevelClick}
            ariaLabel="Next Level"
            color="red"
          >
            <Overlayed
              imgSrc={require('../img/iconNext.svg').default}
              altText="next"
              styling="w-28 h-auto"
            />
          </CircleButton>
          <Overlayed
            imgSrc={require('../img/iconAvancar.svg').default}
            altText="level"
            styling="w-28 h-auto"
          />
        </div>
      </div>
    </div>
  );
}

/* <CircleButton
  onClick={() => dispatch({ type: 'PREV_LEVEL' })}
  ariaLabel="Previous Level"
>
  <img
    src={require('../img/iconReturn.svg').default}
    alt="back"
    className="w-12 h-auto"
  />
</CircleButton> */
