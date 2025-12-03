import React from 'react';
import { Link } from 'react-router-dom';
import './PersonagensCard.css'; // Importando o CSS novo

function PersonagensCard({ id, title, image, category, handleDelete }) {
  return (
    <div className="anime-card">
      {/* Imagem com efeito de zoom */}
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
      </div>

      {/* Conteúdo */}
      <div className="card-content">
        <span className="card-category">{category}</span>
        <h3 className="card-title">{title}</h3>
      </div>

      {/* Botões alinhados */}
      <div className="card-content">
        <div className="card-actions">
          <Link to={`/editar/${id}`} style={{ flex: 1 }}>
            <button className="btn-action btn-edit" style={{ width: '100%' }}>
              Editar
            </button>
          </Link>
          
          <button 
            className="btn-action btn-delete" 
            onClick={() => handleDelete(id)}>
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonagensCard;