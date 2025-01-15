import React from 'react';
import './Card.css'; // Importa estilos para la tarjeta

// Componente principal Card
const Card = ({ children }) => {
    return <div className="card">{children}</div>;
};

// Subcomponente CardHeader
export const CardHeader = ({ title }) => {
    return <div className="card-header">{title}</div>;
};

// Subcomponente CardBody
export const CardBody = ({ children }) => {
    return <div className="card-body">{children}</div>;
};

// Subcomponente CardFooter
export const CardFooter = ({ children }) => {
    return <div className="card-footer">{children}</div>;
};

export default Card;
