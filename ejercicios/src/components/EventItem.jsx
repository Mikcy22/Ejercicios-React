import React from 'react';

const EventItem = ({ event, onDelete, onToggleFavorite, onEdit }) => {
  return (
    <div className="event-item">
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.description}</p>
      <button onClick={() => onEdit(event)}>Editar</button>
      <button onClick={() => onDelete(event.id)}>Eliminar</button>
      <button onClick={() => onToggleFavorite(event.id)}>
        {event.isFavorite ? 'Quitar Favorito' : 'Marcar como Favorito'}
      </button>
    </div>
  );
};

export default EventItem;
