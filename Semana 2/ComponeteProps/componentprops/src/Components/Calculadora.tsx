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

function resta (a: number,b:number){
  return a-b;
}

function multiplicacion (a: number,b:number){
  return a*b;
}

function factorial(a: number) {
  let result = 1
  for (let i = 2; i <= a; i++) {
    result *= i 
  }
  return result
}


function Calculadora(props:Parametros) {
  return (
    <>
      <div>Suma de los valores es {Suma(props.a, props.b)}</div>
      <div>Resta de los valores es {resta(props.a, props.b)}</div>
      <div>Multiplicacion de los valores es {multiplicacion(props.a, props.b)}</div>
      <div>Factorial de {props.a} es {factorial(props.a)}</div>
      <div>Factorial de {props.b} es {factorial(props.b)}</div>
    </>
  )
}

export default Calculadora