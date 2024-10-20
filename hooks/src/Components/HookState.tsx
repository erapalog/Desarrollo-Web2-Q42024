import React, {useState} from 'react'
import PersonaComponent from './PersonaComponent'
export default function HookState() {
 
  //Declarar Un Hooks

  const [nombre,setnombre]=useState<String>("Pedro");

   function Changename (nuevonombre:string){
    setnombre(nuevonombre)
   }

  return (
    <div>  
       <PersonaComponent nombre={nombre}/>
       <button onClick={()=>Changename("Henry")}> Cambiar Nombre </button>
    </div>

    
  )
}
