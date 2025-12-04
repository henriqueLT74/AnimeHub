import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function Detalhes() {
  const { id } = useParams();
  const [personagem, setPersonagem] = useState(null);

  useEffect(() => {
    axios.get('https://animehub-9ka7.onrender.com/personagens')
      .then((response) => {
        const encontrado = response.data.find(p => p._id === id);
        setPersonagem(encontrado);
      });
  }, [id]);

  if (!personagem) return <p style={{color: 'white', textAlign: 'center', marginTop: '50px'}}>Carregando Jutsu...</p>;

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', color: 'white' }}>
      
      <Link to="/" style={{ color: '#a0a0a0', textDecoration: 'none', marginBottom: '20px', display: 'inline-block', fontSize: '1.1rem' }}>
        &larr; Voltar para Galeria
      </Link>

      <div style={{ background: '#16213e', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 25px rgba(0,0,0,0.5)' }}>
        
        
        <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
             <img src={personagem.image} alt={personagem.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        
        <div style={{ padding: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1 style={{ color: '#e94560', margin: 0, fontSize: '2.5rem' }}>{personagem.name}</h1>
                <span style={{ background: '#0f3460', color: '#4cc9f0', padding: '5px 15px', borderRadius: '20px', fontWeight: 'bold' }}>
                    {personagem.category}
                </span>
            </div>

            <div style={{ background: '#1a1a2e', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #e94560', lineHeight: '1.6' }}>
                <h3 style={{ marginTop: 0, color: '#fff' }}>Sobre o Personagem:</h3>
                <p style={{ color: '#ccc', whiteSpace: 'pre-wrap' }}>
                    {personagem.description || "Nenhuma descrição informada."}
                </p>
            </div>

            <div style={{ marginTop: '30px', textAlign: 'right' }}>
                <Link to={`/editar/${personagem._id}`}>
                    <button style={{ padding: '10px 25px', background: '#f39c12', border: 'none', borderRadius: '5px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                        Editar Dados
                    </button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Detalhes;