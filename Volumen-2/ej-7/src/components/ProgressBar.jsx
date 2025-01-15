import React from 'react';
import './ProgressBar.css';  // Archivo CSS para darle formato

const ProgressBar = ({ value, max }) => {
  const progress = (value / max) * 100;

  const progressBarStyle = {
    width: `${progress}%`,
    backgroundColor: 'blue',  // Cambia el color según desees
    height: '25px',
    borderRadius: '5px'
  };

  return (
    <div style={{ width: '100%', backgroundColor: '#e0e0df', borderRadius: '5px', marginBottom: '20px' }}>
      <div style={progressBarStyle}></div>
    </div>
  );
};

export default ProgressBar;
