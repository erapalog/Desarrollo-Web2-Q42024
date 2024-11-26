
'use client'
import React, { ReactNode, useContext, useState } from 'react'
import {TemaAplicacion}  from './ContextoContacto'


interface VistaReact{
    children: ReactNode
}

//export default function ProviderContacto(props:VistaReact) {
export default function ProviderContacto( {children}:VistaReact) {

  const [tema, setTema]= useState<string>('ligth') ;

  const cambiarTema = () =>{
    setTema((temaPrevio) => (temaPrevio) ==='ligth'? 'dark' : 'ligth')
  }

  return (
    <TemaAplicacion.Provider value={{tema,cambiarTema}}>

        {children}

    </TemaAplicacion.Provider>
  )
}

export const useTema=()=>{
    return useContext(TemaAplicacion)
}