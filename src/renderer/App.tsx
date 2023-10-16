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
        <Route path="/AllStagesPage" element={<AllStagesPage state={state} dispatch={dispatch} />} />
        <Route path="/Game" element={<Game state={state} dispatch={dispatch} />} />
        <Route path="/AdvanceStage" element={<AdvanceStage state={state} dispatch={dispatch} />} />
        <Route path="/FinishedGame" element={<FinishedGame state={state} dispatch={dispatch} />} />
        
      </Routes>
    </Router>
  );
}