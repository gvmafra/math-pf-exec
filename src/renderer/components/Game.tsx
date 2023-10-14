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

  const navigate = useNavigate();

  useEffect(() => {
    if (state.finishedGame) {
      navigate('/FinishedGame');
    } else if (state.justAdvancedStage) {
      navigate('/AdvanceStage');
    }
  }, [state.finishedGame, state.justAdvancedStage, navigate]);

  return (
    <div className=" relative flex flex-row w-screen items-center justify-between h-screen text-white">

      <Panel // left panel
        header={StageIndicator(currentStageNum, currentLevelNum)}
        body={
          <>
            {GridSplitterButton(dispatch, 'horizontal')}
            <div className="flex gap-4">
              <CircleButton
                onClick={() => dispatch({ type: 'PREV_LEVEL' })}
                ariaLabel="Previous Level"
              >
                Voltar
              </CircleButton>
              <CircleButton
                onClick={handleNextLevelClick}
                ariaLabel="Next Level"
              >
                Continuar
              </CircleButton>
            </div>
          </>
        }
        footer={
          <h3 className="text-black text-xl">
            Cliques: {currentLevelRef.metadata.clickCount}
          </h3>
        }
      />

      <Panel // Challenge Panel
        header={
          <Challenge
            gameCanvas={
              state.stages[currentStageNum].levels[currentLevelNum].challenge
            }
            handleToggle={() => {}}
          />
        }
        body={
          <Canvas
            gameCanvas={currentLevelRef.canvas}
            dispatch={dispatch}
            currentLevel={currentLevelNum}
            currentStage={currentStageNum}
          />
        }
        footer={<h3 className="text-black text-xl">Pintando Frações</h3>}
        panelClassName="w-[40vw] bg-[#F76C4B]"
      />

      <Panel // right panel
        header={<h3 className="text-black text-xl">Tempo:</h3>}
        body={
          <>
            {GridSplitterButton(dispatch, 'vertical')}

            <div className="flex gap-4">
              <CircleButton
                onClick={handleResetSquare}
                ariaLabel="Reset Square"
              >
                Resetar Nível
              </CircleButton>

              <CircleButton onClick={handleResetGame} ariaLabel="Reset Game">
                Reiniciar Jogo
              </CircleButton>
            </div>
          </>
        }
        footer={<h3 className="text-black text-xl">Pontos:</h3>}
      />

    </div>
  );
}

