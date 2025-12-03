import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Importando as páginas
import Home from './Pages/Home';
import Cadastro from './Pages/Cadastro';
import Editar from './Pages/Editar';

// Importando o CSS
import styles from './App.modules.css';

function App() {
  return (
    <BrowserRouter>
      {/* HEADER DARK STYLE */}
      <header className={styles.header}>
        
        {/* Logo: AnimeHUB */}
        <div className={styles.logo}>
          ANIME<span>HUB</span>
        </div>

        {/* Menu de Navegação */}
        <nav className={styles.nav}>
          
          {/* Link Simples */}
          <Link to="/" className={styles.link}>
            Galeria
          </Link>
          
          {/* Link Destaque (Botão Sólido) */}
          <Link to="/cadastro" className={`${styles.link} ${styles.ctaButton}`}>
            + Novo Personagem
          </Link>

        </nav>

      </header>

      {/* ÁREA DO CONTEÚDO (Mantendo o fundo escuro global) */}
      <div style={{ minHeight: 'calc(100vh - 70px)', backgroundColor: '#1a1a2e' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/editar/:id" element={<Editar />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;