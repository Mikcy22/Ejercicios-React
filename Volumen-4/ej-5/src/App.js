import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './styles/main.css'; 
const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Gestión de Eventos</h1>
          <nav>
            <a href="/">Inicio</a>
            <a href="/favorites">Favoritos</a>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Puedes agregar más rutas aquí en el futuro */}
          </Routes>
        </main>
        <footer>
          <p>© 2025 Gestión de Eventos</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
