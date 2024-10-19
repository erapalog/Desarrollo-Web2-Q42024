import React, { useEffect, useState } from 'react'

function Formulario() {

const [texto, setTexto] = useState("")
const [contadorTexto, setContadorTexto] = useState(0)
const [color, setColor] = useState("")
useEffect(()=>{

    const ContadorTexto = texto.length

    if (contadorTexto < 10){
        setColor("red")
    }else if(contadorTexto >=10 && contadorTexto <= 20)
    {
        setColor("orange")
    }
    else if(contadorTexto > 20){
        setColor("green")
    }
    setContadorTexto(ContadorTexto)

}, [texto])



const manejadorCambioTexto = (e:any) =>{
    setTexto(e.target.value)
}

  return (
    <div>
      <h1>Contador de letras</h1>
        <style>
            {`textarea{color:${color}}}`}
        </style>
      <textarea name="" id="" value={texto} onChange={manejadorCambioTexto} ></textarea>

      <p>la cantidade letras ingresadas son: {contadorTexto}</p>
    </div>
  )
}

export default Formulario
