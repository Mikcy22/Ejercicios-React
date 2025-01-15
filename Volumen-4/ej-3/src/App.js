// src/components/App.js
import React, { useState } from 'react';
import PokemonCard from './PokemonCard';

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPokemon = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      const data = await response.json();
      setPokemonData(data);  // Almacena la respuesta en el estado
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setPokemonName(e.target.value);
  };

  return (
    <div className="app">
      <h1>Pokédex App</h1>
      <input 
        type="text" 
        value={pokemonName} 
        onChange={handleInputChange} 
        placeholder="Enter Pokémon name" 
      />
      <button onClick={fetchPokemon}>Search</button>

      {loading && <p>Loading...</p>}

      {pokemonData && <PokemonCard pokemon={pokemonData} />}
    </div>
  );
}

export default App;
