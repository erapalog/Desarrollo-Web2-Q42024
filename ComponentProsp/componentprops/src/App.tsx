import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Persona } from './Components/Persona';
import Calculadora from './Components/Calculadora';


function App() {
  return (
    <div>
    <Calculadora a={5} b={10}/>
  </div>
  );
}

export default App;
