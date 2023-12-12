// import React from 'react';
// import { Stage } from 'renderer/state/types';

// interface StagesCompletedListProps {
//   stages: Stage[];
// }

// const StagesCompletedList: React.FC<StagesCompletedListProps> = ({ stages }) => {
//   return (
//     <div>
//       <ol className="grid grid-cols-3 m-auto gap-4 text-xl p-6 rounded-xl">
//         {stages.map((stage, index) => {
//           const itemClasses = stage.metadata.completed
//              ? 'w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center'
//             : 'w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center text-black';

//           return (
//             <li key={`stage-list-${index}`} className={itemClasses}>
//               <div>{index + 1}</div>
//             </li>
//           );
//         })}
//       </ol>
//     </div>
//   );
// };

// export default StagesCompletedList;

// import { Stage } from 'renderer/state/types';
// import { Dispatch } from 'react';
// import { Action } from 'renderer/state/gameReducer';

// interface StagesCompletedListProps {
//   stages: Stage[];
//   dispatch: Dispatch<Action>;
// }

// const StagesCompletedList: React.FC<StagesCompletedListProps> = ({ stages }) => {
//   return (
//     <div>
//       <ol className="grid grid-cols-3 m-auto gap-4 text-xl p-6 rounded-xl justify-items-center">
//         {stages.map((stage, index) => {
//           const itemClasses = stage.metadata.completed
//             ? 'w-20 h-20 rounded-full bg-green-500 text-white flex flex-col items-center justify-center'
//             : 'w-10 h-10 rounded-full bg-amber-200 text-black flex flex-col items-center justify-center';

//           return (
//             <li key={`stage-list-${index}`} className={itemClasses}>
//               <div>{index + 1}</div>
//               {stage.metadata.completed && 
//                 <div className="mt-2">Score: {stage.metadata.totalScore}</div>}
//             </li>
//           );
//         })}
//       </ol>
//     </div>
//   );
// };


// export default StagesCompletedList;


import { Stage } from 'renderer/state/types';
import { Dispatch } from 'react';
import { Action } from 'renderer/state/gameReducer';

interface StagesCompletedListProps {
  stages: Stage[];
  dispatch: Dispatch<Action>;
}

const StagesCompletedList: React.FC<StagesCompletedListProps> = ({ stages }) => {
  
  return (
    <div>
      <ol className="grid grid-cols-3 m-auto gap-4 text-xl p-6 rounded-xl justify-items-center">
      {stages.map((stage, index) => {
  const itemClasses = stage.metadata.completed
    ? 'w-20 h-20 rounded-full bg-green-500 text-white flex flex-col items-center justify-center'
    : 'w-20 h-20 rounded-full bg-amber-200 flex items-center justify-center text-black';

  return (
    <li key={`stage-list-${index}`} className={itemClasses}>
      <div>{index + 1}</div>
      {stage.metadata.completed && (
        <div className="text-white text-lg mt-2">
          Score: {stage.metadata.stageScore}
        </div>
      )}
    </li>
  );
})}
      </ol>
    </div>
  );
};

export default StagesCompletedList;

// why is the total score for each completed stage still not showing?

// import { Stage } from 'renderer/state/types';
// import { Dispatch } from 'react';
// import { Action } from 'renderer/state/gameReducer';

// interface StagesCompletedListProps {
//   stages: Stage[];
//   dispatch: Dispatch<Action>;
// }

// const StagesCompletedList: React.FC<StagesCompletedListProps> = ({ stages }) => {
//   return (