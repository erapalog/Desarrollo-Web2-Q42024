import React from 'react';
import logo from './logo.svg';
import './App.css';
import Persona from './Components/Persona';
import PersonaPerfil from './Components/PersonaPerfil';
import Calculadora from './Components/Calculadora';

function App() {
  const persona={
    nombre:"Juan",
    apellido:"Lopez"
  }

  return (
        /*<div className="App">
      <Persona></Persona>
      <PersonaPerfil nombre='Erick' apellido='Rapalo'/>
      <PersonaPerfil {...persona}/>
     
      <PersonaPerfil nombre='Erick' apellido='Rapalo' edad={20}/>
    </div>*/
    <div>
      <Calculadora a={5} b={10}/>
    </div>
  );
}

export default App;
