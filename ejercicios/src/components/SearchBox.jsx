import React from 'react';

const SearchBox = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar videojuegos..."
      onChange={handleChange}
    />
  );
};

export default SearchBox;
