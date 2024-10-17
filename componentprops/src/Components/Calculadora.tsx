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

function Resta(a:number, b:number){
    return a-b
}

function Multiplicacion(a:number, b:number){
    return a*b
}

function Factorial(a:number){
  if (a < 0) {
    throw new Error("El factorial no está definido para números negativos.");
  }
  if (a === 0 || a === 1) {
    return 1;
  }
  let total:number=1
  for (let i=1;i<=a;i++){
    total=total*i;

  }
  return total

}

function Calculadora(props:Parametros) {
  return (
    <div>
      <p>Valores: a={props.a} y b={props.b}</p>
      <p>Suma de los valores es {Suma(props.a, props.b)}</p>
      <p>Resta de los valores es {Resta(props.a, props.b)}</p>
      <p>Multiplicacion de los valores es {Multiplicacion(props.a, props.b)}</p>
      <p>El factorial del valor "a" es {Factorial(props.a)}</p>
      <p>El factorial del valor "b" es {Factorial(props.b)}</p>
      
      
      
      
    
    </div>
  )
}

export default Calculadora