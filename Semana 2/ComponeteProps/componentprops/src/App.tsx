import React from 'react';
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
      <Calculadora a={5} b={10} operation={1}/>
      <Calculadora a={15} b={8} operation={2}/>
      <Calculadora a={15} b={2} operation={3}/>
      <Calculadora a={5} b={0} operation={4}/>
    </div>
  );
}

export default App;
