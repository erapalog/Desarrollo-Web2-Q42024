import React, { useEffect } from 'react'
import { useState } from 'react'


const Pagina_Principal =() => {
  
    const [oracion, setOracion] = useState('');
    const [colores, setColores] = useState('black');
  
  /*  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setOracion(event.target.value);
    }; 
    esta era la idea principal que tenia de unos codigos pasados para poder
    usar el Imput en react, dado que vi la que enseño, pues
    me parece mejor y mas sencilla.
    */
  
    useEffect(() => {
      if (oracion.length < 10) {
        setColores('red');
      } else if (oracion.length >= 10 && oracion.length <= 20) {
        setColores('orange');
      } else {
        setColores('green');
      }
    }, [oracion]);

 const Cambio_texto = (e:any)=>{
    setOracion(e.target.value)
 }

    return (
        <div>

            <h1>Contador de letras</h1>
            <textarea
            name='' id=''
            value={oracion}
            onChange={Cambio_texto}
            ></textarea>


        <p style={{ color: colores }}>Numero de letras usadas {oracion.length} </p>
      </div>
  )
}


export default Pagina_Principal