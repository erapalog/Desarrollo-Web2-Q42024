import React from 'react';
import logo from './logo.svg';
import './App.css';
import Persona from './Components/Persona';
import PersonaPerfil from './Components/PersonaPerfil';
import Calculadora from './Components/Calculadora';

function App() {

  const persona={
    nombre:"Juan",
    apellido: "Garcia"
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
      <Calculadora a={10} b={20}/>
      <Calculadora a={15} b={30}/>
      <Calculadora a={20} b={40}/>
    </div>
  );
}

export default App;
