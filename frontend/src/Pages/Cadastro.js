import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    image: '',
    description: '' // Novo campo no estado
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:5000/personagens', formData)
      .then(() => {
        alert('Personagem cadastrado!');
        navigate('/');
      })
      .catch((error) => console.error("Erro:", error));
  }

  const inputStyle = { padding: '12px', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ddd', outline: 'none' };

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#e94560', marginBottom: '20px' }}>Novo Personagem</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <input type="text" name="name" placeholder="Nome do Personagem" onChange={handleChange} required style={inputStyle} />
        <input type="text" name="category" placeholder="Categoria (ex: Shonen, Isekai)" onChange={handleChange} required style={inputStyle} />
        <input type="text" name="image" placeholder="URL da Imagem" onChange={handleChange} required style={inputStyle} />
        
        {/* TEXTAREA PARA DESCRIÇÃO */}
        <textarea 
            name="description" 
            placeholder="História ou descrição do personagem..." 
            onChange={handleChange} 
            rows="5"
            style={{ ...inputStyle, fontFamily: 'sans-serif', resize: 'vertical' }}
        />
        
        <button type="submit" style={{ padding: '15px', background: '#e94560', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem', borderRadius: '5px', marginTop: '10px' }}>
          CADASTRAR
        </button>
      </form>
    </div>
  );
}

export default Cadastro;