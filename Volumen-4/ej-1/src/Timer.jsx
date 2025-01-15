import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);  // Estado para manejar el tiempo
  const [isRunning, setIsRunning] = useState(false);  // Estado para saber si el temporizador está en ejecución

  let timerInterval;

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    if (isRunning) {
      clearInterval(timerInterval);  // Detener el temporizador
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(timerInterval);
    setTime(0);  // Resetear el tiempo a 0
    setIsRunning(false);
  };

  useEffect(() => {
    if (isRunning) {
      timerInterval = setInterval(() => {
        setTime(prevTime => prevTime + 1);  // Incrementar el tiempo cada segundo
      }, 1000);
    }
    return () => clearInterval(timerInterval);  // Limpiar el interval cuando el componente se desmonta o se detiene el temporizador
  }, [isRunning]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Temporizador</h2>
      <div style={{ fontSize: '48px', marginBottom: '20px' }}>{time} s</div>
      <div>
        <button onClick={startTimer} style={{ marginRight: '10px', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Iniciar
        </button>
        <button onClick={pauseTimer} style={{ marginRight: '10px', padding: '10px', backgroundColor: '#ffcc00', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Pausar
        </button>
        <button onClick={resetTimer} style={{ padding: '10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Detener
        </button>
      </div>
    </div>
  );
};

export default Timer;
