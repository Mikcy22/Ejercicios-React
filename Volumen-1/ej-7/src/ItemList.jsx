import React from 'react';

//Esto es el componente.
const ItemList = ({ items }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};
//esto

//abajo exporta el componente:
export default ItemList;
