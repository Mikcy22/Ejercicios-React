import React, { useState } from 'react';
import './ColorSelector.css';

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];

  return (
    <div className="color-selector">
      <h2 className="color-selector__title">Select Your Favorite Color</h2>
      <ul className="color-selector__list">
        {colors.map((color) => (
          <li
            key={color}
            className={`color-selector__item ${selectedColor === color ? 'color-selector__item--selected' : ''}`}
            onClick={() => setSelectedColor(color)}
          >
            {color}
          </li>
        ))}
      </ul>
      {selectedColor && <p className="color-selector__selected">Your favorite color is: {selectedColor}</p>}
    </div>
  );
};

export default ColorSelector;