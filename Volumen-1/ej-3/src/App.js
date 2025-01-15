import React from 'react';
import Wrapper from './wrapper';

const App = () => {
    return (
        <div>
            <h1>Ejemplo del componente Wrapper</h1>
            <Wrapper>
                <p>Este es un texto dentro del componente Wrapper.</p>
                <button>Haz clic aquí</button>
            </Wrapper>
        </div>
    );
};

export default App;
