import React, { useState } from 'react';

const EditableItem = ({ item, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onSave(item.id, text);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setText(item.text);
    setIsEditing(false);
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      {!isEditing ? (
        <>
          <span>{text}</span>
          <button onClick={handleEditClick}>Editar</button>
        </>
      ) : (
        <>
          <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          />
          <button onClick={handleSaveClick}>Guardar</button>
          <button onClick={handleCancelClick}>Cancelar</button>
        </>
      )}
    </div>
  );
};

export default EditableItem;
