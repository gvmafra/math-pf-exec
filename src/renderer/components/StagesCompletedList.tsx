// src/renderer/components/StagesCompletedList.tsx
import React from 'react';
import { Stage } from 'renderer/state/types';

interface StagesCompletedListProps {
  stages: Stage[];
}

const StagesCompletedList: React.FC<StagesCompletedListProps> = ({
  stages,
}) => {
  return (
    <div className="">
      <ol className="flex flex-col m-auto gap-2 text-black text-xl p-6 rounded-xl">
        {stages.map((stage, index) => (
          <li key={`stage-list-${index}`}>
            Estágio {index + 1} {stage.metadata.completed ? '✅' : ''}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default StagesCompletedList;