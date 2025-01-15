import React from 'react';
import TodoList from './TodoList';  // Importa el componente TodoList

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Gestor de Tareas</h1>
      <TodoList />
    </div>
  );
};

export default App;
