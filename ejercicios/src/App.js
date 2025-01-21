import React, { useState, useEffect } from "react";
import VideojuegoList from "./components/VideojuegoList";
import CategoriaMenu from "./components/CategoriaMenu";
import PlataformaMenu from "./components/PlataformaMenu";
import SearchBox from "./components/SearchBox";
import VideojuegoDetalle from "./components/VideojuegoDetalle";

const App = () => {
  const [videojuegos, setVideojuegos] = useState([]);
  const [filteredVideojuegos, setFilteredVideojuegos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [plataformas, setPlataformas] = useState([]);
  const [selectedCategorias, setSelectedCategorias] = useState([]);
  const [selectedPlataformas, setSelectedPlataformas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVideojuego, setSelectedVideojuego] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resVideojuegos = await fetch("http://localhost:3000/videojuegos");
        const resCategorias = await fetch("http://localhost:3000/categorías");
        const resPlataformas = await fetch("http://localhost:3000/plataformas");
        const videojuegosData = await resVideojuegos.json();
        const categoriasData = await resCategorias.json();
        const plataformasData = await resPlataformas.json();

        setVideojuegos(videojuegosData);
        setFilteredVideojuegos(videojuegosData);
        setCategorias(categoriasData);
        setPlataformas(plataformasData);
        setSelectedCategorias(categoriasData);
        setSelectedPlataformas(plataformasData);
      } catch (err) {
        console.error("Error al cargar los datos:", err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = videojuegos.filter((v) => {
      const matchesCategorias =
        selectedCategorias.length === 0 ||
        v.categorías.some((cat) => selectedCategorias.includes(cat));

      const matchesPlataformas =
        selectedPlataformas.length === 0 ||
        v.plataformas.some((plat) => selectedPlataformas.includes(plat));

      const matchesSearch =
        searchTerm === "" ||
        v.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.descripción.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategorias && matchesPlataformas && matchesSearch;
    });
    setFilteredVideojuegos(filtered);
  }, [videojuegos, selectedCategorias, selectedPlataformas, searchTerm]);

  return (
    <div>
      <h1>Catálogo de Videojuegos</h1>
      <CategoriaMenu categorias={categorias} onFilterChange={setSelectedCategorias} />
      <PlataformaMenu plataformas={plataformas} onFilterChange={setSelectedPlataformas} />
      <SearchBox onSearch={setSearchTerm} />
      <VideojuegoList
        videojuegos={filteredVideojuegos}
        onSelectVideojuego={setSelectedVideojuego}
      />
      {selectedVideojuego && (
        <VideojuegoDetalle
          videojuego={selectedVideojuego}
          onClose={() => setSelectedVideojuego(null)}
          onDelete={(id) =>
            setVideojuegos(videojuegos.filter((v) => v.id !== id))
          }
        />
      )}
    </div>
  );
};

export default App;
