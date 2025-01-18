import React, { useState } from 'react';

const EventForm = ({ onSubmit, eventToEdit }) => {
  const [title, setTitle] = useState(eventToEdit?.title || '');
  const [date, setDate] = useState(eventToEdit?.date || '');
  const [description, setDescription] = useState(eventToEdit?.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, date, description });
    setTitle('');
    setDate('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <input
        type="text"
        placeholder="Título del evento"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">{eventToEdit ? 'Actualizar' : 'Crear'} Evento</button>
    </form>
  );
};

export default EventForm;
