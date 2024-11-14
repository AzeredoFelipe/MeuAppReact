// src/Atv03.js
import React from 'react';
import { Link } from 'react-router-dom';
import MainPage from './componentes/MainPage';
import './Atv03.css';

function Atv03() {
  return (
    <div className="atv03-container">
      
      <MainPage />
      <Link to="/" className="link-inferior">Voltar</Link>
    </div>
  );
}

export default Atv03;
