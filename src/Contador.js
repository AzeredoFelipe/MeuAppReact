//Contador.js

import React, { useState } from 'react';
import './Contador.css';

const Contador = () => {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const total = homens + mulheres;

  return (
    <div className="contador-container">
      <h1>Contador de Homens e Mulheres</h1>
      <div className="contador">
        <div className="pessoa">
          <h2>Homens: {homens}</h2>
          <button onClick={() => setHomens(homens + 1)}>+</button>
          <button onClick={() => setHomens(homens > 0 ? homens - 1 : 0)}>-</button>
        </div>
        <div className="pessoa">
          <h2>Mulheres: {mulheres}</h2>
          <button onClick={() => setMulheres(mulheres + 1)}>+</button>
          <button onClick={() => setMulheres(mulheres > 0 ? mulheres - 1 : 0)}>-</button>
        </div>
      </div>
      <h2>Total: {total}</h2>
    </div>
  );
};

export default Contador;
