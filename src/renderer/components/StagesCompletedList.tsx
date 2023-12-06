import React from 'react';
import { Stage } from 'renderer/state/types';

interface StagesCompletedListProps {
  stages: Stage[];
}

const StagesCompletedList: React.FC<StagesCompletedListProps> = ({ stages }) => {
  return (
    <div>
      <ol className="grid grid-cols-3 m-auto gap-4 text-xl p-6 rounded-xl">
        {stages.map((stage, index) => {
          const itemClasses = stage.metadata.completed
            ? 'w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center'
            : 'w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center text-black';

          return (
            <li key={`stage-list-${index}`} className={itemClasses}>
              <div>{index + 1}</div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default StagesCompletedList;