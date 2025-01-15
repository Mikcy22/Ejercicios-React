import React from 'react';
import EventItem from './EventItem';

const EventList = ({ events, onDelete, onToggleFavorite, onEdit }) => {
  return (
    <div className="event-list">
      {events.map((event) => (
        <EventItem
          key={event.id}
          event={event}
          onDelete={onDelete}
          onToggleFavorite={onToggleFavorite}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default EventList;
