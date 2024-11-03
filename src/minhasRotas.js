// minhasRotas.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Atv01 from './Atv01';
import Atv02 from './Atv02';

function MinhasRotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Atv01" element={<Atv01 />} />
        <Route path="/Atv02" element={<Atv02 />} />
      </Routes>
    </Router>
  );
}

export default MinhasRotas;
