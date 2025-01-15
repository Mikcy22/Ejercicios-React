import React from 'react';
import StatusMessage from './StatusMessage';

const App = () => {
    return (
        <div>
            <h1>Estado del usuario</h1>
            <StatusMessage isOnline={true} />
            <StatusMessage isOnline={false} />
        </div>
    );
};

export default App;
