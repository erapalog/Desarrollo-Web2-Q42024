
'use client'

import { useEffect, useState } from "react"

export default function FormularioContacto() {

 //va capturar el nombre, correo, descripcion, va mostrar si el formulario fue enviado o no

  const [nombre, setNombre]= useState<string>('');
  const [correo, setCorreo] = useState<string> ('')
  const [descripcion, setDescription]= useState<string>('');
  const [isSunmited, setSubmited]= useState<Boolean> (false);

  useEffect(()=>{
    console.log('Actualizacion en control', nombre)
  }, [nombre])

  useEffect(()=>{
    console.log('Actualizacion en control', correo)
  }, [correo])


  useEffect(()=>{
    console.log('Actualizacion en control', descripcion)
  }, [descripcion])

  const submitForm =(e:any) =>{
    e.preventDefault();
    console.log("formulario Enviado con los datos: " , {nombre, correo, descripcion})
    setSubmited(true)

  }

  return (
    <> 
    <form className="max-w-sm mx-auto" onSubmit={submitForm}>

        <div className="mb-5">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor="correo" className="form-label">Correo</label>
            <input type="text" className="form-control"
             value={correo}
             onChange={(e)=> setCorreo(e.target.value)}
             />
        </div>
        <div className="mb-5">
            <label htmlFor="correo" className="form-label">Descripcion</label>
            <textarea className="form-control" 
             value={descripcion}
             onChange={(e)=>setDescription(e.target.value)}
             />
        </div>

        <button type="submit" className="btn btn-primary">Enviar informacion</button>
    </form>

    </>
  )
}
