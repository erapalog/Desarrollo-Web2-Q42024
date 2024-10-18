import React from 'react'
import { Parametros } from '../Modelos/Parametros';



function suma(A:number,B:number){
    return A+B;
}

function Resta(A:number,B:number){
    return A-B;
}

function Multiplicacion(A:number,B:number){
    return A*B;
}

function Divicion(A:number,B:number){
    return A/B;
}



function Calculadora(props:Parametros) {
  return (
    <>
    <div>  La suma de los valores A + B es : {suma(props.A , props.B)}  </div>
    <div>  La Resta de los valores A - B es : {Resta(props.A , props.B)}  </div>
    <div>  La Multiplicacion de los valores A * B es : {Multiplicacion(props.A , props.B)}  </div>
    <div>  La Divicion de los valores A / B es : {Divicion(props.A , props.B)}  </div>
     </>  
)
}

export default Calculadora
