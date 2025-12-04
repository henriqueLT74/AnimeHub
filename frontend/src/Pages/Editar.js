import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Editar() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    image: '',
    description: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/personagens`)
      .then((response) => {
        const personagem = response.data.find(p => p._id === id);
        if (personagem) {
            setFormData({
                name: personagem.name,
                category: personagem.category,
                image: personagem.image,
                description: personagem.description || ''
            });
        }
      })
      .catch((err) => console.error("Erro", err));
  }, [id]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleUpdate(e) {
    e.preventDefault();
    axios.put(`http://localhost:5000/personagens/${id}`, formData)
      .then(() => {
        alert('Atualizado com sucesso!');
        navigate('/');
      })
      .catch((error) => alert('Erro ao salvar.'));
  }

  const labelStyle = { color: '#fff', marginBottom: '5px', display: 'block' };
  const inputStyle = { width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: 'none' };

  return (
    <div style={{ padding: '30px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ color: '#f39c12', textAlign: 'center' }}>Editar Personagem</h1>
      <form onSubmit={handleUpdate}>
        
        <label style={labelStyle}>Nome:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} />
        
        <label style={labelStyle}>Categoria:</label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} required style={inputStyle} />
        
        <label style={labelStyle}>URL da Imagem:</label>
        <input type="text" name="image" value={formData.image} onChange={handleChange} required style={inputStyle} />

        <label style={labelStyle}>Descrição:</label>
        <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            rows="5"
            style={{ ...inputStyle, fontFamily: 'sans-serif' }}
        />
        
        <button type="submit" style={{ width: '100%', padding: '12px', background: '#2980b9', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold', borderRadius: '5px' }}>
          SALVAR ALTERAÇÕES
        </button>
      </form>
    </div>
  );
}

export default Editar;