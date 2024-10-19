import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookState from './Componets/HookState';
import HookEffect from './Componets/HookEffect';
import Formulario from './Componets/Formulario';

function App() {
  return (
    <div className="App">
      
      <HookState/>

      <HookEffect></HookEffect>

      <Formulario></Formulario>
    </div>
  );
}

export default App;
