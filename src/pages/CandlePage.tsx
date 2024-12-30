import React, { useState } from 'react';
import '../styles/CandlePage.css';

const CandlePage: React.FC = () => {
  const [isBlowing, setIsBlowing] = useState(false);
  const backgroundImage = '/images/candle.jpg'; // Local image path

  const handleBlowCandles = () => {
    setIsBlowing(true);
    // Add any additional animation logic here
  };

  return (
    <div 
      className="candle-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={`candle-container ${isBlowing ? 'zoom-in' : ''}`}>
        {isBlowing && (
          <div className="wind-animation" />
        )}
      </div>
      <button 
        className="blow-button"
        onClick={handleBlowCandles}
        disabled={isBlowing}
      >
        Blow the Candles
      </button>
    </div>
  );
};

export default CandlePage;
