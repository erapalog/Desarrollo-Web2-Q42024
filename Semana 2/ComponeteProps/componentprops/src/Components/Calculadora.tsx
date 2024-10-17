import React from 'react'
import { Parametros } from '../Modelos/Parametros';

/** 
 * 
 * SUma
 * Resta
 * multiplizacion
 * Factorial de un numero
*/

function Suma(a: number, b: number) {
  return a + b;
}

function Resta(a: number, b: number) {
  return a - b;
}

function Multiplizacion(a: number, b: number) {
  return a * b;
}

function Factorial(a: number, b: number) {
  var total = 1;
  var i: number;

  for (i = 1; i <= a; i++) {
    total = total * i;
  }

  return total;
}

function Operacion(a: number, b: number, op: number) {
  let result = "";

  if (op == 1) {
    result = "El resultado de la suma " + a + " + " + b + " es igual a " + Suma(a, b);
  } else if (op == 2) {
    result = "El resultado de la resta " + a + " - " + b + " es igual a " + Resta(a, b);
  } else if (op == 3) {
    result = "El resultado de la multiplicacion " + a + " * " + b + " es igual a " + Multiplizacion(a, b);
  } else {
    result = "El resultado del factorial " + a + " es " + Factorial(a, b);
  }

  return result;
}

function Calculadora(props: Parametros) {
  return (
    <div>{Operacion(props.a, props.b, props.op)}</div>
  )
}

export default Calculadora