import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/StartPage.css';

const StartPage: React.FC = () => {
  const navigate = useNavigate();
  const videoUrl = '/videos/background.mp4'; // Local video path

  const handleStart = () => {
    navigate('/video');
  };

  return (
    <div className="start-page">
      <video autoPlay muted loop className="background-video">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <button className="start-button" onClick={handleStart}>
          Start Celebration
        </button>
      </div>
    </div>
  );
};

export default StartPage;
