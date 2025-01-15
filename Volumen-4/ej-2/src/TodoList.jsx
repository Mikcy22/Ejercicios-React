import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);  // Estado para manejar las tareas
  const [taskInput, setTaskInput] = useState('');  // Estado para el input de nueva tarea

  useEffect(() => {
    // Cargar tareas almacenadas en localStorage al cargar el componente
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const addTask = () => {
    if (taskInput.trim() === '') return;

    const newTask = { id: Date.now(), text: taskInput };
    const updatedTasks = [...tasks, newTask];

    setTasks(updatedTasks);
    setTaskInput('');

    // Guardar las tareas en localStorage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const removeTask = (taskId) => {
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    setTasks(filteredTasks);

    // Actualizar localStorage
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
  };

  return (
    <div style={{ padding: '20px', width: '300px' }}>
      <h2>Lista de Tareas</h2>
      <input
        type="text"
        value={taskInput}
        onChange={handleInputChange}
        placeholder="Añade una nueva tarea"
        style={{ padding: '8px', marginBottom: '10px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button onClick={addTask} style={{ padding: '8px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Añadir Tarea
      </button>
      <ul style={{ marginTop: '20px', listStyleType: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{ padding: '8px', backgroundColor: '#f1f1f1', marginBottom: '8px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between' }}>
            {task.text}
            <button onClick={() => removeTask(task.id)} style={{ padding: '5px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
