import React from 'react';

const Manolo = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className="btn">
            {children}
        </button>
    );
};

export default Manolo;
