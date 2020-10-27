import React from 'react';
import ReactDOM from 'react-dom';

import "./style.css";

// Import dos componentes
import Calculadora from './components/Calculadora';

ReactDOM.render(
  <main className="container">
    <Calculadora title="Calculadora de IMC" />
  </main>,
  document.getElementById('root')
);
