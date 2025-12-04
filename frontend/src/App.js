import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Páginas
import Home from './Pages/Home';
import Cadastro from './Pages/Cadastro';
import Editar from './Pages/Editar';
import Detalhes from './Pages/Detalhes'; // Nova página

// Estilo (Certifique-se que o arquivo se chama App.module.css)
import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <header className={styles.header}>
        <div className={styles.logo}>
          ANIME<span>HUB</span>
        </div>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>Galeria</Link>
          <Link to="/cadastro" className={`${styles.link} ${styles.ctaButton}`}>+ Novo Personagem</Link>
        </nav>
      </header>

      <div style={{ minHeight: 'calc(100vh - 70px)', backgroundColor: '#1a1a2e' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/editar/:id" element={<Editar />} />
          <Route path="/detalhes/:id" element={<Detalhes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;