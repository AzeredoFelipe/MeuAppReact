import React, { useState, useEffect } from 'react';

function Letreiro() {
  const texto = 'Conheça a Fatec';
  const [textoAtual, setTextoAtual] = useState('');
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTextoAtual((prevTexto) => prevTexto + texto[indice]);
      setIndice((prevIndice) => (prevIndice + 1) % texto.length);

      if (indice === texto.length - 1) {
        setTextoAtual('');
        setIndice(0);
      }
    }, 200);
    return () => clearInterval(timer);
  }, [indice, texto]);

  return (
    <>
      <h2>Letreiro</h2>
      <h2>{textoAtual}</h2> {}
    </>
  );
}

export default Letreiro;
