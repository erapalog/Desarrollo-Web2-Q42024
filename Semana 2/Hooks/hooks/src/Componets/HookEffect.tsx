import React, { useEffect, useState } from 'react'

function HookEffect() {

  const [contador, setContador]= useState(0);  

   
  //Se carga al rendererizar el componente princial
  useEffect(()=>{

    //Javascript en un contador, intervalos
    const intervalId = setInterval(()=>{
        setContador(preveContador => preveContador + 1)
    }, 1000)

    return () => clearInterval(intervalId);
  },[])


  return (
    <div> El valor del contador {contador}
    
    </div>
  )
}

export default HookEffect