// src/Atv02.js
import React from 'react';
import { Link } from 'react-router-dom';
import Contador from './Contador';
import './Atv02.css';

function Atv02() {
  return (
    <div className="atv02-container">
      <h2 className="atv02-title">Atividade 02</h2>
      <div className="contador-container">
        <Contador />
      </div>
      <Link to="/" className="back-link">Voltar</Link>
    </div>
  );
}

export default Atv02;
