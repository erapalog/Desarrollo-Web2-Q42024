import React, { useEffect, useState } from 'react'

function Formulario() {

      //Contar letras 

    const [texto, setTexto]= useState("");
    const [contadorTexto, setContadorTexto] = useState(0)
    const [color, setColor] = useState('black');


    useEffect(()=>{

        const contadorTexto= texto.length;
        setContadorTexto(contadorTexto);

        if (texto.length < 10) 
            setColor('red');
        else if (texto.length >= 10 && texto.length <= 20) 
            setColor('orange');
        else 
            setColor('green');
        

    }, [texto])

 

   const manejadorCambioTexto = (e:any) =>{
        setTexto(e.target.value)
   }
  
  return (
    <div>

        <h1>Contador de letras</h1>

        <textarea name="" id=""
        value={texto}
        onChange={manejadorCambioTexto}

        ></textarea>

     <p style={{ color: color }}> La cantidad de letras ingresadas es :  {contadorTexto}</p>  
    </div>
  )
}

export default Formulario