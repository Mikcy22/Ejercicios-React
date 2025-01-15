import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [preview, setPreview] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPreview(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <label style={{ marginBottom: '10px' }}>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{ padding: '8px', marginTop: '5px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>
        
        <label style={{ marginBottom: '10px' }}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '8px', marginTop: '5px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>
        
        <label style={{ marginBottom: '10px' }}>
          Mensaje:
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            style={{ padding: '8px', marginTop: '5px', width: '100%', borderRadius: '4px', border: '1px solid #ccc', height: '100px' }}
          ></textarea>
        </label>
        
        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}>
          Enviar
        </button>
      </form>

      {preview && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#f9f9f9' }}>
          <h3>Vista Previa</h3>
          <p><strong>Nombre:</strong> {nombre}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Mensaje:</strong> {mensaje}</p>
        </div>
      )}
    </div>
  );
};

export default Formulario;
