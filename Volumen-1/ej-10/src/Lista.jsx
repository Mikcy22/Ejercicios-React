import React from 'react';

const DeportesList = () => {
    const deportesOlimpicos = [
        { nombre: "Atletismo", categoria:"Deportes de pista y campo", popularidad: 5, esDeEquipo:false },
        { nombre: "Natación", categoria:"Deportes acuáticos", popularidad: 5, esDeEquipo:false },
        { nombre: "Fútbol", categoria:"Deportes de equipo", popularidad: 5, esDeEquipo:true },
        { nombre: "Gimnasia", categoria:"Deportes artísticos", popularidad: 4, esDeEquipo:false },
        { nombre: "Baloncesto", categoria:"Deportes de equipo", popularidad: 5, esDeEquipo:true },
        { nombre: "Voleibol", categoria:"Deportes de equipo", popularidad: 4, esDeEquipo:true }
    ];

    return (
        <div>
            <h1>Deportes Olímpicos</h1>
            <ol>
                {deportesOlimpicos.map((deporte, index) => (
                    <li key={index}>
                        <strong>Deporte:</strong> {deporte.nombre} <br />
                        <strong>Popularidad:</strong> {deporte.popularidad} <br />
                        <strong>De equipo:</strong> {deporte.esDeEquipo ? "Sí" : "No"} <br />
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default DeportesList;
