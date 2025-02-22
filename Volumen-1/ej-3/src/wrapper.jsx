import React from 'react';
import './wrapper.css'; // Importamos el archivo CSS externo

const Wrapper = ({ children }) => {
    return <div className="wrapper">{children}</div>;
};

export default Wrapper;
