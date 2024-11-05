'use client'
import React from 'react'
import { useTema } from './ProviderContacto'

export default function Consumidor() {

 const {tema, cambiarTema} =useTema()
 
  return (
    <div style={{
        backgroundColor: tema==='ligth' ? '#fff' :'#333'
    }}>

        Tema Actual {tema}

        <button className='btn btn-info' onClick={cambiarTema}> Cambiar Tema</button>
    </div>
  )
}
