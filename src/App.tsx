import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage.tsx';
import VideoPage from './pages/VideoPage.tsx';
import CandlePage from './pages/CandlePage.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/candle" element={<CandlePage />} />
      </Routes>
    </Router>
  );
};

export default App;
