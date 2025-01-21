import React from 'react';

const VideojuegoDetalle = ({ videojuego, onClose, onDelete }) => {
  if (!videojuego) return null;

  return (
    <div className="videojuego-detalle">
      <h2>{videojuego.nombre}</h2>
      <p>{videojuego.descripción}</p>
      <p>Fecha de lanzamiento: {videojuego.fecha_lanzamiento}</p>
      <p>Compañía: {videojuego.compañía}</p>
      <p>Plataformas: {videojuego.plataformas.join(', ')}</p>
      <p>Categorías: {videojuego.categorías.join(', ')}</p>
      <p>Precio: ${videojuego.precio}</p>
      <img src={videojuego.url_imagen} alt={videojuego.nombre} />
      <button onClick={onClose}>Cerrar</button>
      <button onClick={() => onDelete(videojuego.id)}>Eliminar</button>
    </div>
  );
};

export default VideojuegoDetalle;
