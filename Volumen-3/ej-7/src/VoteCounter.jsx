import React, { useState } from 'react';

const VoteCounter = () => {
  // Inicializa los contadores de votos para cada opción
  const [votes, setVotes] = useState({ optionA: 0, optionB: 0, optionC: 0 });

  // Función para manejar los votos
  const handleVote = (option) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: prevVotes[option] + 1,
    }));
  };

  return (
    <div>
      <h1>Encuesta</h1>
      <div>
        <h2>Opción A: {votes.optionA}</h2>
        <button onClick={() => handleVote('optionA')}>Votar por Opción A</button>
      </div>
      <div>
        <h2>Opción B: {votes.optionB}</h2>
        <button onClick={() => handleVote('optionB')}>Votar por Opción B</button>
      </div>
      <div>
        <h2>Opción C: {votes.optionC}</h2>
        <button onClick={() => handleVote('optionC')}>Votar por Opción C</button>
      </div>
    </div>
  );
};

export default VoteCounter;