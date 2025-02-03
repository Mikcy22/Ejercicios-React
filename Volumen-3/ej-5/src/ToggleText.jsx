import React, { useState } from 'react';
import './styles.css';

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button className="button" onClick={toggleVisibility}>
        {isVisible ? 'Ocultar Texto' : 'Mostrar Texto'}
      </button>
      {isVisible && <div className="text">Este es el texto que se muestra y oculta.</div>}
    </div>
  );
};

export default ToggleText;