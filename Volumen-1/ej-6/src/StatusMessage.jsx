import React from 'react';

const StatusMessage = ({ isOnline }) => {
    return (
        <p>
            {isOnline ? "Usuario en línea" : "Usuario desconectado"}
        </p>
    );
};

export default StatusMessage;
