import React from 'react'



/*function retornarPerfil(nombre:string,apellido:string){

   return nombre+ apellido

}*/

type Persona={
  nombre:string
  apellido:string
  edad?:number
}

function PersonaPerfil(props:Persona) {
  return (
    <div>
         <h2> El Nombre de la persona es: {props.nombre}</h2> 
         <h2> El Apellido de la persona es: {props.apellido}</h2>
         <h2> La Edad de la persona es: {props.edad}</h2>
    </div>
  )
}

export default PersonaPerfil
