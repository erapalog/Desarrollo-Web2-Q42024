import React from 'react'
import { Parametros } from '../Modelos/Parametros';


/** 
 * 
 * SUma
 * Resta
 * multiplizacion
 * Factorial de un numero
*/
function Suma(a: number,b:number){
    return a+b;
}

function Calculadora(props:Parametros) {
  return (
    <div>Suma de los valores es {Suma(props.a, props.b)}</div>
  )
}

export default Calculadora