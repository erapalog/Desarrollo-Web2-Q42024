import React from 'react';
import './App.css';
import HookState from './Components/HookState';
import HookEffect from './Components/HookEffect';
import Formulario from './Components/Formulario';

function App() {
  return (
    <div className="App">
     <HookState/>
     <HookEffect/>
     <Formulario/>

    </div>
  );
}

export default App;
