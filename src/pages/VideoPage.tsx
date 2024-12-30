import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/VideoPage.css';

const VideoPage: React.FC = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoUrl = '/videos/celebration.mp4'; // Local video path

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.onended = () => {
        navigate('/candle');
      };
    }
  }, [navigate]);

  return (
    <div className="video-page">
      <video ref={videoRef} autoPlay className="main-video">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPage;
