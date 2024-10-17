import React from 'react';
import './App.css';
import MensajeSaludo from './Components/MensajeSaludo';

function App() {
  return (
    <div className="App">
      <MensajeSaludo nombre="Alessandro" apellido="Cruz" cursoActual="Desarrollo de Aplicaciones web 2"/>
      <MensajeSaludo nombre="Jose" apellido="Cruz" cursoActual="Programacion web 2"/>
      <MensajeSaludo nombre="Alex" apellido="Cruz" cursoActual="Interfaz de usuario"/>
    </div>
  );
}

export default App;
