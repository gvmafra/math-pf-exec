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
    console.log(stages[1].metadata.stageScore)
    const stagesWithScore = stages.map((stage) => {
      // const stageScore = ((!stage.metadata.blocked && stage.metadata.completed)
      //   ? stage.levels.reduce((acc, level) => acc + level.metadata.score, 0))
      //   : 0;

      let stageScore;
      console.log("stage scores", stageScore)
      // ONLY recalculate score if stage is NOT blocked and completed
      if(!stage.metadata.blocked && stage.metadata.completed) {
        stageScore = stage.levels.reduce((acc, level) => acc + level.metadata.score, 0);
      } else if (!stage.metadata.blocked && stage.metadata.stageScore > 0) {
        // If this stage is NOT completed, just use previous score as long as it is > 0
        stageScore = stage.metadata.stageScore;
      } else {
        // If stage has NEVER been completed, set to 0
        stageScore = 0;
      }
      console.log('stage score ', stage, ' ', stage.metadata.stageScore);

      return { ...stage, metadata: { ...stage.metadata, stageScore: stageScore } };

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
              // Check if stage is blocked AND if score > 0
              (!stage.metadata.blocked && stage.metadata.stageScore > 0) ? 'bg-green-500 text-white border-green-500 shadow-green-400' : 'flex items-center justify-center h-16 w-auto bg-white text-[#6c5353] py-4 px-6 border border-[#ecdbdb] shadow-md rounded-full'
            }`}
          >
            {/* Since incompleted next stage gets unlocked, we check if a score is > 0 */}
            <p className={`${(!stage.metadata.blocked && stage.metadata.stageScore > 0) ? '' : 'my-auto'}`}>
              {i + 1}
            </p>
            {(!stage.metadata.blocked && stage.metadata.stageScore > 0) && (
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
