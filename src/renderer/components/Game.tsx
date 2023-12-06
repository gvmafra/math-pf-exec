// Game.tsx
import { Dispatch, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameState } from 'renderer/state/types';

import { Action } from 'renderer/state/gameReducer';
import Challenge from './canvas/Challenge';
import Panel from './Panel';
import CircleButton from './CircleButton';
import GridSplitterButton from './GridSplitterButton';
import Canvas from './canvas/Canvas';

interface GameProps {
  state: GameState;
  dispatch: Dispatch<Action>;
}

function StageIndicator(currentStageNum: number, currentLevelNum: number) {
  return (
    <div className="flex flex-row gap-2">
      <h3 className="text-black text-sm">Estágio: {currentStageNum + 1}</h3>
      <h3 className="text-black text-sm">Nível: {currentLevelNum + 1}</h3>
    </div>
  );
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
    // dispatch({ type: 'RESET_GAME' });
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
        <div className="flex gap-4 mb-auto p-16">
          <h3 className="text-black text-sm">Estágio: {currentStageNum + 1}</h3>
          <h3 className="text-black text-sm">Nível: {currentLevelNum + 1}</h3>
        </div>

        <div className="flex w-full items-center justfy-center bg-[#9378e3]">
          <GridSplitterButton
            dispatch={dispatch}
            direction="horizontal"
            disabled={horizontalSplitDisabled}
            stageIndex={currentStageNum}
            levelIndex={currentLevelNum}
          />
        </div>

        <div className="flex gap-4 mt-auto p-16">
          <CircleButton
            onClick={() => dispatch({ type: 'PREV_LEVEL' })}
            ariaLabel="Previous Level"
          >
            Voltar
          </CircleButton>
          <CircleButton onClick={handleResetGame} ariaLabel="Reset Game">
            Sair
          </CircleButton>
          <CircleButton onClick={handleResetSquare} ariaLabel="Reset Square">
            Resetar
          </CircleButton>
        </div>
      </div>

      {/* middle panel */}
      <div className="flex flex-col items-center justify-between w-[40vw] h-screen">
        <div className="flex flex-col items-center justify-center bg-[#f66844] w-full h-full gap-10">
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

        {/* This div is now pushed to the bottom of the middle panel */}
        <div className="flex bg-[#eebd35] w-full items-center justify-center p-3 mb-0">
          <img
            src={require('../img/logoFratixSm.svg').default}
            alt="Logo Fratix"
            className="w-[200px]"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-[30vw] h-screen bg-[#74c0c9]">
        <h3 className="text-black text-xl">
          Cliques: {currentLevelRef.metadata.clickCount}
        </h3>
        <GridSplitterButton
          dispatch={dispatch}
          direction="vertical"
          disabled={verticalSplitDisabled}
          stageIndex={currentStageNum}
          levelIndex={currentLevelNum}
        />

        <CircleButton onClick={handleNextLevelClick} ariaLabel="Next Level">
            Continuar
          </CircleButton>
        {/* <h3 className="text-black text-xl">
          Pontos: {currentLevelRef.metadata.score}
        </h3> */}
      </div>
    </div>
  );
}
