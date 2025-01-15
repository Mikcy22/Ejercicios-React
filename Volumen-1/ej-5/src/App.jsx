import React from 'react';
import Greeting from './Greeting';

const App = () => {
    return (
        <div>
            <h1>Componente Greeting</h1>
            <Greeting name="Micky" />
            <Greeting name="Antonio" />
            <Greeting name="Rafa" />
        </div>
    );
};

export default App;
