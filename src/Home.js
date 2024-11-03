// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Certifique-se de que este caminho está correto

function Home() {
  return (
    <div className="layout-container">
      <header>
        <h1>Página Inicial</h1>
        <p>Escolha uma atividade para começar:</p>
      </header>
      <nav>
        <div className="activity-links">
          <Link to="/Atv01" className="activity-card">Atividade 01</Link>
          <Link to="/Atv02" className="activity-card">Atividade 02</Link>
        </div>
      </nav>
    </div>
  );
}

export default Home;
