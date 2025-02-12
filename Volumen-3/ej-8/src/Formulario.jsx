import React, { useState } from 'react';
import './Formulario.css';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [preview, setPreview] = useState(false);
  const [favorite, setFavorite] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPreview(true);
  };

  const items = ['Producto 1', 'Producto 2', 'Producto 3'];

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit} className="formulario__form">
        <label className="formulario__label">
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="formulario__input"
          />
        </label>
        
        <label className="formulario__label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="formulario__input"
          />
        </label>

        <div className="formulario__items">
          {items.map((item, index) => (
            <div
              key={index}
              className={`formulario__item ${favorite === item ? 'formulario__item--favorite' : ''}`}
              onClick={() => setFavorite(item)}
            >
              {item}
            </div>
          ))}
        </div>

        <button type="submit" className="formulario__button">Submit</button>
      </form>
    </div>
  );
};

export default Formulario;