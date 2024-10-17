import React from 'react'


/*function retornarPerfil(nombre:string, apellido:string){
    return nombre + apellido
}*/

type Persona={
    nombre: string
    apellido: string
    edad?: number
}

function PersonaPerfil(props:Persona) {
  return (
    <div>
        <h2>Nombre de la persona: {props.nombre}</h2>
        <h2>Apellido de la persona: {props.apellido}</h2>
        <h2>La edad de la persona es: {props.edad}</h2>
        
        </div>
  )
}

export default PersonaPerfil