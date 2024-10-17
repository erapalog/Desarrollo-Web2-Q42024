import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonaPerfil from '../src/Components/PersonaPerfil';
import Calculadora from './Components/Calculadora';

function App() {

  const persona = {
    "nombre": "Carlos",
    "apellido": "Perez"
  }

  return (
    <div className="App">
      <PersonaPerfil nombre='Andres' apellido='Espinoza'></PersonaPerfil>
      <PersonaPerfil {...persona}></PersonaPerfil>

      <div>
        <Calculadora a={5} b={10} op={1}/>
        <Calculadora a={5} b={10} op={2}/>
        <Calculadora a={5} b={10} op={3}/>
        <Calculadora a={5} b={10} op={4}/>
      </div>
    </div>
  );
}

export default App;
