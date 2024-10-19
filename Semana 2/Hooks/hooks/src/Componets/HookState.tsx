import React, { useState } from 'react'
import PersonaComponent from './PersonaComponent';

export default function HookState() {
  
  //Declarar un hooks

  const [nombre, setNombre]= useState <String>("Ana");

  function cammbiarNombre(nombrePersona:string){
    setNombre(nombrePersona)
  }

 
  return (
    <div>
       
        <PersonaComponent nombre={nombre}></PersonaComponent>
        <button onClick={()=>cammbiarNombre("Pedro") }> Cambiar nombre</button>
    </div>
  )
}
