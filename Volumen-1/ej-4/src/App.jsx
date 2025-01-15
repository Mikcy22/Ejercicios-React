import React from 'react';
import Image from './Image';

const App = () => {
    return (
        <div>
            <h1>Componente Image</h1>
            <Image 
                src="https://via.placeholder.com/300" 
                alt="Ejemplo de imagen" 
                width="300px" 
                description="Esta es una imagen de ejemplo renderizada con el componente Image."
            />
        </div>
    );
};

export default App;
