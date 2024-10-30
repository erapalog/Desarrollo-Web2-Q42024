'use client'
import { Usuario } from '@/Modelos/Usuario'
import Form from 'next/form'
import { setegid } from 'process'

import { useEffect, useState } from 'react'
export default function page(){
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const [edad, setEdad] = useState(0)
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [fechaNacimiento, setFechaNacimiento] = useState(new Date().toDateString())

    function agregarUsuario(){
        const Usuario:Usuario = {
            id: usuarios.length +1,
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            correo: correo,
            fechaNacimiento: fechaNacimiento
        }

        setUsuarios([...usuarios, Usuario])
       limpiarForm()
    }
    function limpiarForm(){
        setEdad(0)
        setNombre('')
        setApellido('')
        setFechaNacimiento(new Date().toDateString())
        setCorreo('')
        setTelefono('')
    }
    useEffect(()=>{
        const fecha = new Date(fechaNacimiento)
        const hoy = new Date()
       setEdad(hoy.getFullYear() - fecha.getFullYear())
        
    },[fechaNacimiento])

    return(
        <main className='border-2 p-5 justify-items-center grid '>
             <Form action='' >
            
            <div className='p-2 m-4 justify-items-center '>
            <input type='text' name='nombre' placeholder='Ingrese un Nombre' className='p-2 text-black' value={nombre} onChange={event => setNombre(event.target.value)} ></input>          
            </div>
            
            <div className='p-2 m-4'>
            <input type='text' name='apellido' placeholder='Ingrese un Apellido' className='p-2 text-black' value={apellido} onChange={event => setApellido(event.target.value)}></input>
            </div>
            
            <div className='p-2 m-4'> 
            <input type='text' name='Telefono' placeholder='Ingrese un Telefono' className='p-2 text-black' value={telefono} onChange={event => setTelefono(event.target.value)}></input>
            </div>
            
            <div className='p-2 m-4'>           
            <input type='date' id='fromDate' name='fromDate' placeholder='Una fecha de nacimiento' className='p-2 text-black' value={fechaNacimiento} onChange={(e) => {setFechaNacimiento((e.target.value))}} ></input>
            </div>

            <div className='p-2 m-4'>
            <input type='text' name='email' placeholder='Ingrese un eMail' className='p-2 text-black' value={correo} onChange={event => setCorreo(event.target.value)}></input>
            </div>

            <div className='p-2 m-4'>            
            <input type='text' name='Edad' placeholder='Edad del usuario' readOnly className='p-2 text-black' value={edad}></input>
            </div>

           <div className='p-2 m-4'>
            <button className='border-teal-500 border-4 p-4' onClick={agregarUsuario}>Agregar</button>
           </div>
           
        </Form>
        <ul className='list-decimal list-inside m-2'>
            {usuarios.map(usuario => <li key={usuario.id}>{usuario.nombre} {usuario.apellido}</li>)}
        </ul>
        </main>
       

        
    )
}

