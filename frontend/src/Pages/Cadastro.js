import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Para redirecionar o usuário

function Cadastro() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    image: ''
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // Função para enviar ao Banco (POST)
  function handleSubmit(e) {
    e.preventDefault();

    axios.post('http://localhost:5000/personagens', formData)
      .then((response) => {
        alert('Personagem cadastrado com sucesso!');
        navigate('/'); // Redireciona para a Home
      })
      .catch((error) => {
        console.error("Erro ao cadastrar:", error);
        alert('Erro ao cadastrar. Verifique se o servidor está rodando.');
      });
  }

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Novo Personagem</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <input 
            type="text" 
            name="name" 
            placeholder="Nome do Personagem" 
            onChange={handleChange} 
            required 
            style={{ padding: '10px', fontSize: '1rem' }}
        />
        
        <input 
            type="text" 
            name="category" 
            placeholder="Categoria (ex: Anime, Filme)" 
            onChange={handleChange} 
            required
            style={{ padding: '10px', fontSize: '1rem' }}
        />
        
        <input 
            type="text" 
            name="image" 
            placeholder="URL da Imagem (Link da internet)" 
            onChange={handleChange} 
            required
            style={{ padding: '10px', fontSize: '1rem' }}
        />
        
        <button type="submit" style={{ padding: '10px', background: '#2c3e50', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
          CADASTRAR
        </button>
      </form>
    </div>
  );
}

export default Cadastro;