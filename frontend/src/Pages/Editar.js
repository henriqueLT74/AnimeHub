import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Editar() {
  const navigate = useNavigate();
  const { id } = useParams(); // Pega o ID que está na URL (ex: /editar/123)
  
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    image: ''
  });

  // 1. Ao abrir a tela, busca os dados atuais do personagem
  useEffect(() => {
    axios.get(`http://localhost:5000/personagens`) // Pega todos (ideal seria ter rota getOne, mas vamos filtrar)
      .then((response) => {
        // Filtra no front para achar o personagem certo (solução rápida)
        const personagem = response.data.find(p => p._id === id);
        if (personagem) {
            setFormData({
                name: personagem.name,
                category: personagem.category,
                image: personagem.image
            });
        }
      })
      .catch((err) => console.error("Erro ao buscar dados", err));
  }, [id]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // 2. Envia as atualizações (PUT)
  function handleUpdate(e) {
    e.preventDefault();

    axios.put(`http://localhost:5000/personagens/${id}`, formData)
      .then(() => {
        alert('Personagem atualizado com sucesso!');
        navigate('/'); // Volta para a Home
      })
      .catch((error) => {
        console.error("Erro ao atualizar:", error);
        alert('Erro ao salvar alterações.');
      });
  }

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Editar Personagem</h1>
      <form onSubmit={handleUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <label>Nome:</label>
        <input 
            type="text" 
            name="name" 
            value={formData.name} // Valor preenchido
            onChange={handleChange} 
            required 
            style={{ padding: '10px' }}
        />
        
        <label>Categoria:</label>
        <input 
            type="text" 
            name="category" 
            value={formData.category} 
            onChange={handleChange} 
            required
            style={{ padding: '10px' }}
        />
        
        <label>URL da Imagem:</label>
        <input 
            type="text" 
            name="image" 
            value={formData.image} 
            onChange={handleChange} 
            required
            style={{ padding: '10px' }}
        />

        {/* Preview da imagem para saber se está certo */}
        {formData.image && <img src={formData.image} alt="Preview" style={{width: '100px', margin: '0 auto'}}/>}
        
        <button type="submit" style={{ padding: '10px', background: '#2980b9', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
          SALVAR ALTERAÇÕES
        </button>
      </form>
    </div>
  );
}

export default Editar;