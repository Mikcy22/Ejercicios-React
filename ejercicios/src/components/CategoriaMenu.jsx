import React, { useState } from 'react';

const CategoriaMenu = ({ categorias, onFilterChange }) => {
  const [selectedCategorias, setSelectedCategorias] = useState(categorias);

  const handleCheckboxChange = (categoria) => {
    const newSelectedCategorias = selectedCategorias.includes(categoria)
      ? selectedCategorias.filter((cat) => cat !== categoria)
      : [...selectedCategorias, categoria];
    setSelectedCategorias(newSelectedCategorias);
    onFilterChange(newSelectedCategorias);
  };

  return (
    <div className="categoria-menu">
      {categorias.map((categoria) => (
        <label key={categoria}>
          <input
            type="checkbox"
            checked={selectedCategorias.includes(categoria)}
            onChange={() => handleCheckboxChange(categoria)}
          />
          {categoria}
        </label>
      ))}
    </div>
  );
};

export default CategoriaMenu;
