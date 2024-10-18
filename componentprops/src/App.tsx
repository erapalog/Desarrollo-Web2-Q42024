import React from 'react';
import logo from './logo.svg';
import './App.css';
import Persona from './Components/Persona';
import PersonaPerfil from './Components/PersonaPerfil';
import Calculadora from './Components/Calculadora';

function App() {
  
  const persona={
    nombre:"Pedro",
    apellido:"Garcia",
    edad: 20
  }

  return (
    /*<div className="App">
      <Persona/>
      <PersonaPerfil nombre='Juan' apellido='Cortes' edad={19}/>
      <PersonaPerfil {...persona}/>
      <PersonaPerfil nombre='Juan' apellido='Cortes' edad={40}/>
    </div>*/
    <div>
      <Calculadora A={20} B={10}/>
    </div>
  );
}

export default App;
