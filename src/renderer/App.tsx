// App.tsx
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

import Game from './components/Game';
import AdvanceStage from './components/AdvanceStage';
import FinishedGame from './components/FinishedGamePage';
import { useGameState } from './state/gameReducer';
import AllStagesPage from './components/AllStagesPage';
import StartPage from './components/StartPage';
import ConfigPage from './components/ConfigPage';
import CreditPage from './components/CreditPage';
import AboutPage from './components/AboutPage';
import InstructionsModal from './components/InstructionsModal';

export default function App() {
  const [state, dispatch] = useGameState();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/ConfigPage" element={<ConfigPage />} />
        <Route path="/CreditPage" element={<CreditPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/InstructionsModal" element={<InstructionsModal />} />
        <Route path="/AllStagesPage" element={<AllStagesPage state={state} dispatch={dispatch} />} />
        <Route path="/Game" element={<Game state={state} dispatch={dispatch} />} />
        <Route path="/AdvanceStage" element={<AdvanceStage state={state} dispatch={dispatch} />} />
        <Route path="/FinishedGame" element={<FinishedGame state={state} dispatch={dispatch} />} />
      </Routes>
    </Router>
  );
}