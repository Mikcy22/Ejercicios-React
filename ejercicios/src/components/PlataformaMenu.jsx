import React, { useState } from 'react';

const PlataformaMenu = ({ plataformas, onFilterChange }) => {
  const [selectedPlataformas, setSelectedPlataformas] = useState(plataformas);

  const handleCheckboxChange = (plataforma) => {
    const newSelectedPlataformas = selectedPlataformas.includes(plataforma)
      ? selectedPlataformas.filter((plat) => plat !== plataforma)
      : [...selectedPlataformas, plataforma];
    setSelectedPlataformas(newSelectedPlataformas);
    onFilterChange(newSelectedPlataformas);
  };

  return (
    <div className="plataforma-menu">
      {plataformas.map((plataforma) => (
        <label key={plataforma}>
          <input
            type="checkbox"
            checked={selectedPlataformas.includes(plataforma)}
            onChange={() => handleCheckboxChange(plataforma)}
          />
          {plataforma}
        </label>
      ))}
    </div>
  );
};

export default PlataformaMenu;
