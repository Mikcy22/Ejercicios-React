import axios from 'axios';

const API_URL = 'http://localhost:5000/events'; // Prueba con localhost y 127.0.0.1


export const fetchEvents = () => axios.get(API_URL);
export const createEvent = (event) => axios.post(API_URL, event);
export const updateEvent = (id, updatedEvent) =>
  axios.put(`${API_URL}/${id}`, updatedEvent);
export const deleteEvent = (id) => axios.delete(`${API_URL}/${id}`);
