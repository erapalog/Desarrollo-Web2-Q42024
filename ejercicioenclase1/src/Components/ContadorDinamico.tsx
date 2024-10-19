import React, { useEffect, useState } from 'react'

export default function ContadorDinamico() {

    const [texto,setTexto]= useState("")
    const [contadorTexto,setContadorTexto]=useState(0)
    const [colorTexto, setColorTexto]=useState('black')

    useEffect(() =>{

        const contadorTexto=texto.length
        setContadorTexto(contadorTexto)

        if(contadorTexto>20){
            setColorTexto('green')
        }else if (contadorTexto>=10) {
            setColorTexto('orange')
        } else {
            setColorTexto('red')
        }
    },[texto])

    const manejadorCambioTexto = (e:any) =>{
        setTexto(e.target.value)
    }

  return (
    <div>
        <h1>Contador de caracteres con color dinámico</h1>
        <textarea style={{color: colorTexto}} name="" id="" value={texto} onChange={manejadorCambioTexto}></textarea>
        <p style={{color: colorTexto}}>La cantidad de caracteres ingresados es: {contadorTexto}</p>
    </div>
  )
}
