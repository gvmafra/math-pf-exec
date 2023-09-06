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
    <ol className="text-black text-xl">
      {stages.map((stage, index) => (
        <li key={`stage-list-${index}`}>
          Estágio {index + 1}: {stage.metadata.completed ? '✅' : '-'}
        </li>
      ))}
    </ol>
  );
};

export default StagesCompletedList;
