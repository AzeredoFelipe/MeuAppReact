// Atv01.js
import React from 'react';
import { Link } from 'react-router-dom';
import Relogio from './Relogio';
import Letreiro from './Letreiro';
import './Atv01.css';

function Atv01() {
  return (
    <div className="atv01-container">
      <h2 className="atv01-title">Atividade 01</h2>
      <div className="letreiro-container">
        <Letreiro />
      </div>
      <div className="relogio-container">
        <Relogio />
      </div>
      <Link to="/" className="back-link">Voltar</Link>
    </div>
  );
}

export default Atv01;
