import React from 'react'
import Parametro from './Parametro';


function Suma(a:number, b:number){
    return a+b;
}

function Resta(a:number, b:number){
    return a-b;
}
function Multiplicar(a:number,b:number){
    return a*b;
}

function Factorizar(a:number, b:number){
    return a/b;
}


function Calculadora(props:Parametro) {
    return (
        <div>
            <div>Suma de los valores es {Suma(props.a, props.b)}</div>
            <div>Resta de los valores es {Resta(props.a, props.b)}</div>
            <div>Resta de los valores es {Multiplicar(props.a, props.b)}</div>
            <div>Resta de los valores es {Factorizar(props.a, props.b)}</div>
        </div>
        
    )
  }

export default Calculadora