import React from 'react';
import { Link } from 'react-router-dom';
import './PersonagensCard.css';

function PersonagensCard({ id, title, image, category, handleDelete }) {
  return (
    <div className="anime-card">
      
      {/* Clique na imagem/título leva para Detalhes */}
      <Link to={`/detalhes/${id}`} style={{ textDecoration: 'none', flexGrow: 1 }}>
          <div className="card-image-container">
            <img src={image} alt={title} className="card-image" />
          </div>
          
          <div className="card-content">
            <span className="card-category">{category}</span>
            <h3 className="card-title">{title}</h3>
            <span style={{ fontSize: '0.8rem', color: '#bbb', marginTop: '5px', display: 'block' }}>Clique para ver detalhes</span>
          </div>
      </Link>

      {/* Ações (Editar/Excluir) */}
      <div className="card-content" style={{ paddingTop: 0, flexGrow: 0 }}>
        <div className="card-actions">
          <Link to={`/editar/${id}`} style={{ flex: 1 }}>
            <button className="btn-action btn-edit" style={{ width: '100%' }}>Editar</button>
          </Link>
          <button className="btn-action btn-delete" onClick={(e) => {
              e.stopPropagation(); // Impede que abra o detalhe ao clicar em excluir
              handleDelete(id);
          }}>Excluir</button>
        </div>
      </div>
    </div>
  );
}

export default PersonagensCard;