// App.tsx
// import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import 'tailwindcss/tailwind.css';

// import Game from './components/Game';
// import AdvanceStage from './components/AdvanceStage';
// import FinishedGame from './components/FinishedGamePage';
// import { useGameState } from './state/gameReducer';

// export default function App() {
//   const [state, dispatch] = useGameState();
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Game state={state} dispatch={dispatch} />} />
//         <Route
//           path="/AdvanceStage"
//           element={<AdvanceStage state={state} dispatch={dispatch} />}
//         />
//         <Route
//           path="/FinishedGame"
//           element={<FinishedGame state={state} dispatch={dispatch} />}
//         />
//       </Routes>
//     </Router>
//   );
// }

// App.tsx
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

import Game from './components/Game';
import AdvanceStage from './components/AdvanceStage';
import FinishedGame from './components/FinishedGamePage';
import { useGameState } from './state/gameReducer';
import AllStagesPage from './components/AllStagesPage';
import BeginPage from './components/BeginPage';

export default function App() {
  const [state, dispatch] = useGameState();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BeginPage />} />
        <Route path="/AllStagesPage" element={<AllStagesPage />} />
        <Route path="/Game" element={<Game state={state} dispatch={dispatch} />} />
        <Route path="/genStageOne" element={<Game state={{...state, currentStage: 1}} dispatch={dispatch} />} />
        <Route path="/genStageTwo" element={<Game state={{...state, currentStage: 2}} dispatch={dispatch} />} />
        <Route path="/genStageThree" element={<Game state={{...state, currentStage: 3}} dispatch={dispatch} />} />
        <Route path="/genStageFour" element={<Game state={{...state, currentStage: 4}} dispatch={dispatch} />} />
        <Route path="/genStageFive" element={<Game state={{...state, currentStage: 5}} dispatch={dispatch} />} />
        <Route path="/genStageSix" element={<Game state={{...state, currentStage: 6}} dispatch={dispatch} />} />
        <Route path="/genStageSeven" element={<Game state={{...state, currentStage: 7}} dispatch={dispatch} />} />
        <Route path="/genStageEight" element={<Game state={{...state, currentStage: 8}} dispatch={dispatch} />} />
        <Route path="/genStageNine" element={<Game state={{...state, currentStage: 9}} dispatch={dispatch} />} />
        <Route path="/genStageTen" element={<Game state={{...state, currentStage: 10}} dispatch={dispatch} />} />
        <Route path="/genStageEleven" element={<Game state={{...state, currentStage: 11}} dispatch={dispatch} />} />
        <Route path="/genStageTwelve" element={<Game state={{...state, currentStage: 12}} dispatch={dispatch} />} />
        <Route path="/AdvanceStage" element={<AdvanceStage state={state} dispatch={dispatch} />} />
        <Route path="/FinishedGame" element={<FinishedGame state={state} dispatch={dispatch} />} />
      </Routes>
    </Router>
  );
}