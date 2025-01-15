import React, { useState } from 'react';
import EditableList from './components/EditableList';

const App = () => {
  const initialItems = [
    { id: 1, text: "Estudiar React" },
    { id: 2, text: "Programar todos los días" }
  ];

  const [items, setItems] = useState(initialItems);

  const handleSave = (id, newText) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, text: newText } : item
    );
    setItems(updatedItems);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lista Editable</h1>
      <EditableList items={items} onSave={handleSave} />
    </div>
  );
};

export default App;
