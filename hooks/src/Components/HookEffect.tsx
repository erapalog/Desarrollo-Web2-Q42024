import React, { useEffect, useState } from 'react'

function HookEffect() {

 
    const [contador,setcontador]=useState(0);
//Se carga al rendirizar el componente principal
useEffect(()=>{
//Funcion de javascript en un contador, intervalos
    const intervalId = setInterval(()=>{
        setcontador (preveContador => preveContador  + 1)
    }, 1000)

    return ()=> clearInterval(intervalId)
},[])
        


  return (
  
    
    <div>El valor del contador es :{contador}</div>
  )
}

export default HookEffect