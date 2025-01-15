import React from 'react';
import ProgressBar from './components/ProgressBar';  // Importa el componente ProgressBar

const App = () => {
  return (
    <div style={{ padding: '30px', position:"absolute" , top:"50%" ,left:"25%" ,width:"50%"}}>

      {/* Diferentes ejemplos de progreso */}
      <h3>Progreso 0%</h3>
      <ProgressBar value={0} max={100} />

      <h3>Progreso 50%</h3>
      <ProgressBar value={50} max={100} />

      <h3>Progreso 100%</h3>
      <ProgressBar value={100} max={100} />

    </div>
  );
};

export default App;
