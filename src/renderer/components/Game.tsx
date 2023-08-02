// Game.tsx

import { useEffect, useState, useReducer, Reducer } from 'react';
import { GameState } from 'renderer/state/types';

import gameStateReducer, { Action } from 'renderer/state/gameReducer';
import { initialState } from 'renderer/state/constants';
import Grid from './GridCanvas';

export default function Game() {
  const [state, dispatch] = useReducer<Reducer<GameState, Action>>(
    gameStateReducer,
    initialState as GameState
  );

  const [isMounted, setIsMounted] = useState(false);

  const { currentStage: currentStageNum } = state;

  const { currentLevel: currentLevelNum } =
    state.stages[currentStageNum].metadata;

  const { imageUrl } =
    state.stages[currentStageNum].levels[currentLevelNum].challenge.details;

  const handleResetSquare = () => {
    dispatch({
      type: 'RESET_SQUARE',
      payload: { stageIndex: currentStageNum, levelIndex: currentLevelNum },
    });
  };

  const handleResetGame = () => {
    dispatch({ type: 'RESET_GAME' });
  };

  return (
    <div className=" relative flex flex-row w-screen items-center justify-between h-screen text-white">
      {/*  modal toggels by justAdvancedStage */}
      <div
        className={`${
          state.justAdvancedStage ? 'block' : 'hidden'
        } bg-white flex flex-col gap-12 justify-center items-center fixed z-10 inset-0 overflow-y-auto`}
      >
        <h1 className="text-black text-xl">Parabens, voce passou de fase!</h1>
        <button
          type="button"
          className="w-24 h-24 bg-white border border-black hover:bg-gray-100 text-black rounded-full"
          onClick={() =>
            dispatch({
              type: 'CLEAR_JUST_ADVANCED_STAGE',
            })
          }
          aria-label="Move to next stage"
        >
          Next Stage
        </button>
      </div>
      <section className="py-16 bg-[#69C0C9] w-[30%] h-full flex flex-col items-center justify-between gap-y-16">
        <div className="flex flex-col gap-1">
          <h3 className="text-black text-sm">Stage: {currentStageNum + 1}</h3>
          <h3 className="text-black text-sm">Level: {currentLevelNum + 1}</h3>
        </div>
        <button
          type="button"
          className="w-20 h-20 bg-white hover:bg-gray-100 text-black rounded-full"
          onClick={() =>
            dispatch({
              type: 'DIVIDE_SQUARE',
              payload: { direction: 'horizontal' },
            })
          }
          aria-label="Divide Square Horizontally"
        >
          Horizontal
        </button>
        <div className="flex gap-4">
          <button
            type="button"
            className="w-12 h-12 bg-white hover:bg-gray-100 text-black text-xs rounded-full"
            onClick={() => dispatch({ type: 'PREV_LEVEL' })}
            aria-label="Previous Level"
          >
            Back
          </button>
          <button
            type="button"
            className="w-12 h-12 bg-white hover:bg-gray-100 text-black text-xs rounded-full"
            onClick={() =>
              dispatch({
                type: 'NEXT_LEVEL',
                payload: {
                  stageIndex: currentStageNum,
                  levelIndex: currentLevelNum,
                },
              })
            }
            aria-label="Next Level"
          >
            Next
          </button>
        </div>
        <h3 className="text-black text-xl">Clicks:</h3>
      </section>

      <section className="py-16 bg-[#F76C4B] w-[40%] h-full flex flex-col items-center justify-between">
        <img className="w-24 h-24" src={imageUrl} alt="challenge" />

        <Grid state={state} dispatch={dispatch} />
        <h3 className="text-black text-xl">Pintando Fracoes:</h3>
      </section>

      <section className="py-16 bg-[#69C0C9] w-[30%] h-full flex flex-col items-center justify-between gap-y-16">
        <h3 className="text-black text-xl">Timer:</h3>
        <button
          type="button"
          className="w-20 h-20 bg-white hover:bg-gray-100 text-black rounded-full"
          onClick={() =>
            dispatch({
              type: 'DIVIDE_SQUARE',
              payload: { direction: 'vertical' },
            })
          }
          aria-label="Divide Square Vertically"
        >
          Vertical
        </button>
        <div className="flex gap-4">
          <button
            className="w-12 h-12 bg-white hover:bg-gray-100 text-black text-xs rounded-full"
            type="button"
            onClick={handleResetSquare}
            aria-label="Reset Square"
          >
            Reset Square
          </button>
          <button
            className="w-12 h-12 bg-white hover:bg-gray-100 text-black text-xs rounded-full"
            type="button"
            onClick={handleResetGame}
            aria-label="Reset Game"
          >
            Reset Game
          </button>
        </div>
        <h3 className="text-black text-xl">Stars:</h3>
      </section>
    </div>
  );
}
