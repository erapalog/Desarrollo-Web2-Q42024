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
    <>
      <div>Suma de los valores es {Suma(props.a, props.b)}</div>
      <div>Resta de los valores es {Resta(props.a, props.b)}</div>
      <div>Multiplicacion de los valores es {Multiplicacion(props.a, props.b)}</div>
      <div>Factorial de los valores es {Factorial(props.a)}</div>
    </>
  )
}

function Resta(a: number,b:number){
    return a-b;
}

function Multiplicacion(a: number,b:number){
    return a*b;
}

function Factorial(a: number): number {
  if(a==0){
    return 1;

  }else {
    return a*Factorial(a-1);
  }
}

export default Calculadora