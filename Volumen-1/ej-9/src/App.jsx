import React from 'react';
import Button from './Boton';

const App = () => {
    // Función para manejar el clic en el botón
    const handleClick = () => {
        alert("¡Has hecho clic en el botón!");
    };

    return (
        <div>
            <h1>Componente Button</h1>
            <Button onClick={handleClick}>Haz clic aquí</Button>
        </div>
    );
};

export default App;
