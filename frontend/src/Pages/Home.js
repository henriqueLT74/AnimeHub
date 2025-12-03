import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonagensCard from '../components/PersonagensCard'; 

function Home() {
  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/personagens')
      .then((response) => {
        setPersonagens(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setErro("Erro ao conectar com o servidor.");
        setLoading(false);
      });
  }, []);

  function removeCharacter(id) {
    if (window.confirm("Tem certeza que deseja excluir este personagem?")) {
        axios.delete(`http://localhost:5000/personagens/${id}`)
        .then(() => {
            setPersonagens(personagens.filter(char => char._id !== id));
        })
        .catch(() => alert("Erro ao excluir."));
    }
  }

  // Estilo do Grid Container
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', // Cria colunas automáticas
    gap: '30px',
    padding: '40px',
    maxWidth: '1400px',
    margin: '0 auto'
  };

  const pageTitleStyle = {
    textAlign: 'center',
    color: '#e94560', // Rosa Neon
    fontSize: '2.5rem',
    textTransform: 'uppercase',
    marginBottom: '30px',
    textShadow: '0 0 10px rgba(233, 69, 96, 0.5)'
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1a1a2e' }}> {/* Fundo Global Escuro */}
      
      <h1 style={pageTitleStyle}>Galeria de Personagens</h1>
      
      {erro && <p style={{ color: 'red', textAlign: 'center' }}>{erro}</p>}

      {loading ? (
        <p style={{ color: 'white', textAlign: 'center', fontSize: '1.2rem' }}>Carregando Jutsus...</p>
      ) : (
        <div style={gridStyle}>
          {personagens.length > 0 ? (
            personagens.map((char) => (
              <PersonagensCard 
                key={char._id}
                id={char._id}
                title={char.name} 
                image={char.image} 
                category={char.category}
                handleDelete={removeCharacter} 
              />
            ))
          ) : (
            <p style={{ color: 'white', textAlign: 'center', gridColumn: '1/-1' }}>
                Nenhum personagem encontrado. Cadastre o primeiro!
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;