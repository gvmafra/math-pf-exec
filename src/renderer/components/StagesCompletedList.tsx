//StagesCompletedList.tsx
import React from 'react';
import { useEffect, useState, Dispatch } from 'react';

import { Stage } from 'renderer/state/types';
import { Action } from 'renderer/state/gameReducer';
import { GameState } from 'renderer/state/types';

interface StagesCompletedListProps {
  stages: Stage[];
  dispatch: Dispatch<Action>;
}

const StagesCompletedList: React.FC<StagesCompletedListProps> = ({
  stages,
}) => {
  const [stagesWithScore, setStagesWithScore] = useState<Stage[]>([]);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    const stagesWithScore = stages.map((stage) => {
      const stageScore = stage.metadata.completed
        ? stage.levels.reduce((acc, level) => acc + level.metadata.score, 0)
        : 0;

      return { ...stage, metadata: { ...stage.metadata, stageScore } };
    });

    setStagesWithScore(stagesWithScore);
  }, [stages]);

  useEffect(() => {
    const totalScore = stagesWithScore.reduce((acc, stage) => {
      return acc + stage.metadata.stageScore;
    }, 0);

    setTotalScore(totalScore);
  }, [stagesWithScore]);

  useEffect(() => {
    localStorage.setItem('stages', JSON.stringify(stagesWithScore));
    localStorage.setItem('totalScore', JSON.stringify(totalScore));
  }, [stagesWithScore, totalScore]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {stagesWithScore.map((stage, i) => (
          <div
            key={i + 1}
            className={`flex flex-col items-center justify-center p-2 gap-1 rounded-full w-20 h-20 shadow-lg text-lg font-semibold border ${
              stage.metadata.completed ? 'bg-green-500 text-white border-green-500 shadow-green-400' : 'flex items-center justify-center h-16 w-auto bg-white text-[#6c5353] py-4 px-6 border border-[#ecdbdb] shadow-md rounded-full'
            }`}
          >
            <p className={`${stage.metadata.completed ? '' : 'my-auto'}`}>
              {i + 1}
            </p>
            {stage.metadata.completed && (
              <div className="flex items-center justify-center rounded-b-full bg-white text-green-600 w-14 h-10 my-auto">
                {stage.metadata.stageScore}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center rounded-full text-center font-bold text-xl w-full h-10 mt-6">
        <p>Seu total de pontos é <span className='text-green-600'>{totalScore}</span>!</p>
      </div>
    </div>
  );
};

export default StagesCompletedList;
