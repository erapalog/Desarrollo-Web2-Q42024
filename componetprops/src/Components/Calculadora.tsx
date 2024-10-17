import React from 'react'
import { Parametros } from '../Modelos/Parametros'

type respuestas ={
  suma:number
  resta: number
  multiplicacion: number
  factorial:number
}

function operaciones(a:number, b:number){


  let resp:respuestas
  resp = {
    suma: a+b,
    resta: a-b,
    multiplicacion: a*b,
    factorial: calcularFactorial(a)
  }


return resp
}

function calcularFactorial(numero:number){


    if (numero == 0 || numero == 1){
      numero = 1
    }else{
      for(let i:number =numero -1; i>= 1; i--){
        numero *= i
      }
    }
    return numero
 
}
function Calculadora(props: Parametros) {
  return (
    <div>
      <h3>Numero a= {props.a} Numero b= {props.b}</h3>
      <h3>La suma de los valores es <b>{operaciones(props.a,props.b).suma}</b></h3>
      <h3>La resta de los valores es <b>{operaciones(props.a,props.b).resta}</b></h3>
      <h3>La multiplicacion de los valores es <b>{operaciones(props.a,props.b).multiplicacion}</b></h3>
      <h3>El factorial del primer numero es <b>{operaciones(props.a,props.b).factorial}</b></h3>
    </div>
  )
}

export default Calculadora
