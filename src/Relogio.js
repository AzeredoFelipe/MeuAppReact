// Relogio.js
import React, { useState, useEffect } from 'react';
import './Relogio.css';

function Relogio() {
  const [horaAtual, setHoraAtual] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setHoraAtual(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="Relogio">
      <p id="hora">{horaAtual}</p>
    </div>
  );
}

export default Relogio;
