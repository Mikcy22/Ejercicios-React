import React from 'react';

const VideojuegoList = ({ videojuegos, onSelectVideojuego }) => {
  return (
    <div>
      {videojuegos.map((videojuego) => (
        <div
          key={videojuego.id}
          className="videojuego-item"
          onClick={() => onSelectVideojuego(videojuego)}
        >
          <img src={videojuego.url_imagen} alt={videojuego.nombre} />
          <h3>{videojuego.nombre}</h3>
          <p>{videojuego.descripción.substring(0, 100)}...</p>
          <p>Plataformas: {videojuego.plataformas.join(', ')}</p>
          <p>Precio: ${videojuego.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default VideojuegoList;
