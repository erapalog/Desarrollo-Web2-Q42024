'use client'

import React, { Suspense, useEffect, useState } from 'react'
import { Usuario } from '../Modelos/Iformulario';
import TablaUsuario from './TablaUsuario';

export default function Formulario() {


 const [nombre,setnombre]= useState<string>('');
 const [apellido,setapellido]=useState<string>('')
 const [telefono,settelefono]=useState<string>('')
 const [correo,setcorreo]=useState<string>('')
 const [fnacimiento,setfnacimiento]=useState<string>('')
 const [edad,setedad]=useState<string>('')
 const [submit,setsubmit]=useState<Boolean>(false)
 const [usuarios, setUsuarios] = useState<Usuario[]>([]);


useEffect(()=>{
    console.log('valores actualizados:',{
        nombre,
        apellido,
        telefono,
        correo,
        fnacimiento,
        edad
    });
   
},[nombre,apellido,telefono,correo,fnacimiento])

const calcularEdad = (fecha: string) => {
    const hoy = new Date();
    const nacimiento = new Date(fecha);
    let age = hoy.getFullYear() - nacimiento.getFullYear();
    const m = hoy.getMonth() - nacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
      age--;
    }
    return age.toString();
  };

  useEffect(() => {
    if (fnacimiento) {
      setedad(calcularEdad(fnacimiento));
    }
  }, [fnacimiento]);


const limpiarformulario =()=>{
    setnombre('')
    setapellido('')
    settelefono('')
    setcorreo('')
    setfnacimiento('')
    setedad('')
}


const submitform =(e:any)=>{
    e.preventDefault();

    const nuevoUsuario: Usuario = {
        nombre,
        apellido,
        telefono,
        correo,
        fnacimiento,
        edad,
      };

      setUsuarios((prevUsuarios) => [...prevUsuarios, nuevoUsuario]);
    
    console.log ("formulario enviado con los datos :", {nuevoUsuario})
    setsubmit(true)
    limpiarformulario();
}






  return (
    
    <>
       <form className="max-w-sm mx-auto"onSubmit={submitform} >
          <div className="mb-5">
          <label htmlFor=""  className="form-label">Nombre</label>
          <input type="text" className="form-control"
           value={nombre}
           onChange={(e) => setnombre(e.target.value)}
           /> 
          </div>
          
          <div className="mb-5">
          <label htmlFor=""  className="form-label">Apellido</label>
          <input type="text" className="form-control" 
          value={apellido}
          onChange={(e) => setapellido(e.target.value)}
          /> 
          </div>
          
          <div className="mb-5">
          <label htmlFor=""  className="form-label">Telefono</label>
          <input type="text" className="form-control" 
          value={telefono}
          onChange={(e) => settelefono(e.target.value) }
          /> 
          </div>
           
          <div className="mb-5">
          <label htmlFor=""  className="form-label">Correo</label>
          <input type="text" className="form-control" 
          value={correo}
          onChange={(e)=> setcorreo(e.target.value)}
          /> 
          </div>

          <div className="mb-5">
          <label htmlFor=""  className="form-label">Fecha de Nacimiento</label>
          <input type="date" className="form-control" 
          value={fnacimiento}
          onChange={(e)=> setfnacimiento(e.target.value) }
          /> 
          </div>

          <div className="mb-5">
          <label htmlFor=""  className="form-label">Edad</label>
          <input type="text" className="form-control"
          value={edad} 
          readOnly/> 
          </div>

          <div className="mb-5">
            <button type="submit" className="btn btn-primary">Enviar registro</button>
          </div>

       </form>

       <TablaUsuario usuarios={usuarios}/>
    
    </>
  )
}
