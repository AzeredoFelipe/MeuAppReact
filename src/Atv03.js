// src/Atv03.js
import React from 'react';
import { Link } from 'react-router-dom';
import Componente from './Componente';
import './Atv03.css';

function Atv03() {
  return (
    <div className="atv03-container">
      <h2 className="atv03-title">Atividade 03</h2>
      <div className="componente-container">
        <Componente />
      </div>
      <Link to="/" className="back-link">Voltar</Link>
    </div>
  );
}

export default Atv03;
