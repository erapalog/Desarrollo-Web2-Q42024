import React from 'react'
import { Parametros } from '../Modelos/Parametros';


/** 
 * 
 * SUma
 * Resta
 * multiplizacion
 * Factorial de un numero
*/
function operaciones(a: number,b:number, option:number){
    let result:number=0;

    switch(option){
      case 1:
        result= a+b;
        break
      case 2:
        result= a-b;
        break
      case 3:
        result= a*b;
        break
      default:
        result=1
        for (let index = 1; index <= a; index++) 
            result*=index;
        break
        
    }
    return result;
}

function Calculadora(props:Parametros) {
  return (
    <div>El resultado es: {operaciones(props.a, props.b,props.operation)}</div>
  )
}

export default Calculadora