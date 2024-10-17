import React from 'react'

type Persona={
    nombre: string,
    apellido: string,
    edad?: number
}

function PersonaPerfil(props:Persona) {
  return (
    <div>
    <h2>Nombre de la persona es: {props.nombre} </h2>
    <h2>Apellido de la persona es: {props.apellido}</h2>
    <h2>Edad de la persona es: {props.edad}</h2>
    </div>
  )
}

export default PersonaPerfil
