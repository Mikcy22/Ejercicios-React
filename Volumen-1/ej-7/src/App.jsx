import React from 'react';
import ItemList from './ItemList';


//llamas a la funcion(componente) de reac, en este caso es ItemList,
// el cual recibe por parametros un array .
//El return es el propio ul(html), proveniente de un mapeo de la Array, usando clave
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
