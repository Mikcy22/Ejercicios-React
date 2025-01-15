import React from 'react';
import Card, { CardHeader, CardBody, CardFooter } from './Card';

const App = () => {
    return (
        <div>
            <h1>Componente Card</h1>
            <Card>
                <CardHeader title="Título de la Tarjeta" />
                <CardBody>
                    <p>Este es el contenido principal de la tarjeta. Puedes colocar cualquier contenido aquí.</p>
                </CardBody>
                <CardFooter>
                    <button>Acción 1</button>
                    <button>Acción 2</button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default App;
