import React from 'react'
import {Parametros} from "../Modelos/Parametros"


function Suma(a:number,b:number){
    return a+b;
}

function Resta(a:number,b:number){
    return a-b;
}

function Multiplicacion(a:number,b:number){
    return a*b;
}

function Factorial(a:number, b:number){
    
      let result = 1;
      let result2 =1;
      for (let i = 2; i <= a; i++) {
        result *= i;
      }
      for (let i = 2; i <= b; i++) {
        result2 *= i;
      }
      return result;      
}

function Calculadora(props:Parametros) {
  return (
    <div>La suma de los valores es: {Suma(props.a, props.b)}
    <br />
    La resta de los valores es: {Resta(props.a, props.b)}
    <br />
    La Multiplicacion de los valores es: {Multiplicacion(props.a, props.b)}
    <br />
    El factorial del número {props.a} es: {Factorial(props.a, props.a)}
    <br />
    El factorial del número {props.b} es: {Factorial(props.b, props.b)}
    </div>

  )
}

export default Calculadora