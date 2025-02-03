import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Title = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  width: calc(100% - 22px);
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  ${({ completed }) => completed && `
    text-decoration: line-through;
    color: #999;
  `}
`;

const TaskButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <Title>Lista de Tareas</Title>
      <Input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Añadir nueva tarea" 
      />
      <Button onClick={addTask}>Añadir Tarea</Button>
      <TaskList>
        {tasks.map((task, index) => (
          <TaskItem key={index} completed={task.completed}>
            {task.text}
            <div>
              <TaskButton onClick={() => toggleTaskCompletion(index)}>
                {task.completed ? 'Desmarcar' : 'Completar'}
              </TaskButton>
              <TaskButton onClick={() => deleteTask(index)}>Eliminar</TaskButton>
            </div>
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

export default TodoList;