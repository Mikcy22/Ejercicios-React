import React from 'react';
import './Image.css'; // Importa el archivo CSS

const Image = ({ src, alt, width, description }) => {
    return (
        <div className="image-container">
            <img src={src} alt={alt} width={width} className="image" />
            <p className="description">{description}</p>
        </div>
    );
};

export default Image;
