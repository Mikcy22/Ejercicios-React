import React, { useEffect, useState } from 'react';
import EventForm from '../components/EventForm.jsx';
import EventList from '../components/EventList.jsx';
import {
  fetchEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from '../services/api';

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [eventToEdit, setEventToEdit] = useState(null);

  useEffect(() => {
    fetchEvents().then((response) => setEvents(response.data));
  }, []);

  const handleCreateEvent = (event) => {
    createEvent(event).then((response) =>
      setEvents([...events, response.data])
    );
  };

  const handleUpdateEvent = (id, updatedEvent) => {
    updateEvent(id, updatedEvent).then(() => {
      setEvents(events.map((e) => (e.id === id ? updatedEvent : e)));
      setEventToEdit(null);
    });
  };

  const handleDeleteEvent = (id) => {
    deleteEvent(id).then(() =>
      setEvents(events.filter((event) => event.id !== id))
    );
  };

  const handleToggleFavorite = (id) => {
    const event = events.find((e) => e.id === id);
    const updatedEvent = { ...event, isFavorite: !event.isFavorite };
    updateEvent(id, updatedEvent).then(() => {
      setEvents(events.map((e) => (e.id === id ? updatedEvent : e)));
    });
  };

  return (
    <div>
      <h1>Gestión de Eventos</h1>
      <EventForm
        onSubmit={eventToEdit ? (event) => handleUpdateEvent(eventToEdit.id, event) : handleCreateEvent}
        eventToEdit={eventToEdit}
      />
      <EventList
        events={events}
        onDelete={handleDeleteEvent}
        onToggleFavorite={handleToggleFavorite}
        onEdit={setEventToEdit}
      />
    </div>
  );
};

export default HomePage;
