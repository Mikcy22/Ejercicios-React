import React from 'react';
import EditableItem from './EditableItem';

const EditableList = ({ items, onSave }) => {
  return (
    <div>
      {items.map((item) => (
        <EditableItem key={item.id} item={item} onSave={onSave} />
      ))}
    </div>
  );
};

export default EditableList;
