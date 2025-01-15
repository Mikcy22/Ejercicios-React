import React from 'react';
import ItemList from './ItemList';

const App = () => {
    const items = ["Juguetes", "Videojuegos", "Una noche en paris", "Gibraltar español"];

    return (
        <div>
            <h1>Lista de ítems</h1>
            <ItemList items={items} />
        </div>
    );
};

export default App;
