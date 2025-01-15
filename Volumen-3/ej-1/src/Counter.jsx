import React, { useState } from 'react';
import './Counter.css';  // Archivo CSS externo siguiendo BEM

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <div className="counter__display">
        <p>{count}</p>
      </div>
      <div className="counter__buttons">
        <button className="counter__buttons__increment" onClick={handleIncrement}>
          Incrementar
        </button>
        <button className="counter__buttons__decrement" onClick={handleDecrement}>
          Decrementar
        </button>
      </div>
    </div>
  );
};

export default Counter;
