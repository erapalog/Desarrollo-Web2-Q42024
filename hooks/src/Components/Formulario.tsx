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

   const limpiarTexto = () => {
    setTexto(""); // Limpia el campo de texto
    setContadorTexto(0); // Reinicia el contador
}

  return (
    <div>

        <h1>Contador de letras</h1>

        <textarea name="" id=""
        value={texto}
        onChange={manejadorCambioTexto}        
        style={{ color: color }}
        ></textarea>

        <p style={{ color: color }}> La cantidad de letras ingresadas es :  {contadorTexto}</p>  

        <button type="button" className="btn btn-success" onClick={limpiarTexto}>
            Limpiar Texto
        </button>
    </div>
  )
}

export default Formulario