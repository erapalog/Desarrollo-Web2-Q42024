"use client";
import { Usuario } from "@/Modelos/Usuario";
import Form from "next/form";
import { setegid } from "process";

import { useEffect, useState } from "react";
export default function page() {
  const [id, setId] = useState(0)
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  
  function limpiarForm() {
    setNombre("");
    setDescripcion("");
    setCorreo("");
    setId(0)
  }

  async function cargarContactos() {
    try {
      const url = "http://localhost:5000/contacto";
      const res = await window.fetch(url, { method: "GET" });
      const data = await res.json();
      setUsuarios(data);
      console.log(data);
      console.log(usuarios);
    } catch (error) {
      console.error("Ocurrio un erro en la invocacion del servicio", error);
    }
  }

 const cargarContacto = (contacto: Usuario)=>{
    setId(contacto.id)
    setNombre(contacto.nombre)
    setCorreo(contacto.correo)
    setDescripcion(contacto.descripcion)
  }
const eliminarContacto = async(id:number)=>{
    if(confirm('¿Desea Eliminar permanentemente este contacto?')){
        try {
            const res = await fetch(`http://localhost:5000/contacto/${id}`,{method: 'DELETE'})
            if(res.ok){
                cargarContactos()
            }else{
                alert('Error al eliminar Usuarios')
            }
        } catch (error) {
            console.error("error al elimnar usuario", error)
        }
    }
}
  const summitForm = async (e: any) => {
    
    e.preventDefault();
    try {
   
        if(id == 0){
            const url = "http://localhost:5000/contacto";
              const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nombre, correo, descripcion }),
              });
              if(res.ok){
                alert("Contacto creado Exitosamente")
                limpiarForm()
                cargarContactos()
              }else{
                alert("ocurrio un erro al invocar el servicio")
              }
        }else{
            const url = `http://localhost:5000/contacto/${id}`;
            const res = await fetch(url, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id,nombre, correo, descripcion }),
              });
              if(res.ok){
                alert("Contacto Actualizado Exitosamente")
                limpiarForm()
                cargarContactos()
              }else{
                alert("ocurrio un erro al invocar el servicio")
              }
        }
    

      
    } catch (error) {
       console.error(error)
    }
  };

  useEffect(() => {
    cargarContactos();
  }, []);

  return (
    <main className="border-2 p-5 justify-items-center grid ">
      <Form action="">
        <div className="p-2 m-4 justify-items-center ">
          <input
            type="text"
            name="nombre"
            placeholder="Ingrese un Nombre"
            className="p-2 text-black"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          ></input>
        </div>

        <div className="p-2 m-4">
          <input
            type="text"
            name="email"
            placeholder="Ingrese un eMail"
            className="p-2 text-black"
            value={correo}
            onChange={(event) => setCorreo(event.target.value)}
          ></input>
        </div>

        <div className="p-2 m-4">
          <input
            type="text"
            name="descripcion"
            placeholder="Descripcion"
            className="p-2 text-black"
            value={descripcion}
            onChange={(event) => setDescripcion(event.target.value)}
          ></input>
        </div>

        <div className="p-2 m-4">
          <button
            className="border-teal-500 border-4 p-4"
            onClick={summitForm}
          >
            Agregar
          </button>
        </div>
      </Form>
      <ul className="list-decimal list-inside m-2">
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nombre} {usuario.descripcion}
            <button className="m-2 p-2 border-teal-500 border-4" onClick={()=>cargarContacto(usuario)}>Editar</button>
            <button className="m-2 p-2 border-teal-500 border-4" onClick={()=>eliminarContacto(usuario.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
