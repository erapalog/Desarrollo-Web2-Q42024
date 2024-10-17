import React from 'react'
import { ParametrosSaludo } from '../Modelos/ParametrosSaludo';


function MensajeSaludo(props:ParametrosSaludo) {
  return (
    <div>
        <h2>Bienvenido, {(props.nombre)} {(props.apellido)}!</h2>
        <p>Del curso {(props.cursoActual)}.</p>
    </div>
  )
}

export default MensajeSaludo