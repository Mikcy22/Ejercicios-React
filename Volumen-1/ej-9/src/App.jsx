import React from 'react';
import Manolo from './Boton';

const App = () => {
    // Función para manejar el clic en el botón
    const handleClick = () => {
        alert("¡Has hecho clic en el botón!");
    };

    //devuelve el boton con la funcion
    return (
        <div>
            <h1>Componente Button</h1>
            <Manolo onClick={handleClick}>Haz clic aquí</Manolo>
        </div>
    );
};

export default App;
