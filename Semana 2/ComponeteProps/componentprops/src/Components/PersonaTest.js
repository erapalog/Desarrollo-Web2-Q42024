import React from 'react'

function retornarPerfil(nombre, apellido){
    alert(nombre + apellido)
}

export default function PersonaTest() {
  return (
    <div>PersonaTest {retornarPerfil(1,true)}</div>
  )
}