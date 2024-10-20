import React  from 'react'


type Persona={
    nombre:String
}

function PersonaComponent(prop:Persona) {
    
  return (
    <div>El nombre de la persona es :{prop.nombre}</div>
  )
}

export default PersonaComponent