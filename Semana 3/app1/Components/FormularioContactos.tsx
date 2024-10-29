'use client';

import { useEffect, useState } from 'react';
import { Persona } from './Persona'
import { Calculo } from './Calculo';
import { New_Persona } from './New_Persona';

export default function FormularioContactos() {
  // Capturar Nombre, Correo y una descripción, y la afirmación si se va
  const [cliente, setCliente] = useState<Persona[]>([]);
  const [nombre, setNombre] = useState<string>('');
  const [apellido, setApellido] = useState<string>('');
  const [telefono, setTelefono] = useState<string>('');
  const [correo, setCorreo] = useState<string>('');
  const [nacimiento, setNacimiento] = useState<string>('');

 
  const handleSubmit = (e: React.FormEvent) => {
    const resetForm = New_Persona(e, setCliente, cliente, nombre, apellido, telefono, correo, nacimiento);
    setNombre(resetForm.nombre);
    setApellido(resetForm.apellido);
    setTelefono(resetForm.telefono);
    setCorreo(resetForm.correo);
    setNacimiento(resetForm.nacimiento);
  };

  return (
    <>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">Apellido</label>
          <input type="text" className="form-control" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono</label>
          <input type="text" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">Correo</label>
          <input type="email" className="form-control" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
          <input type="date" className="form-control" value={nacimiento} onChange={(e) => setNacimiento(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Registrar Usuario</button>
      </form>

      <h2 className="mt-5">Usuarios Registrados</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Fecha de Nacimiento</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {cliente.map((cliente, index) => (
            <tr key={index}>
              <td>{cliente.nombre}</td>
              <td>{cliente.apellido}</td>
              <td>{cliente.telefono}</td>
              <td>{cliente.correo}</td>
              <td>{cliente.nacimiento}</td>
              <td>{Calculo(cliente.nacimiento)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}







/*
Codigo a futuro

 useEffect(() => {
    console.log('Actualización en control', nombre);
  }, [nombre]);

  useEffect(() => {
    console.log('Actualización en control', correo);
  }, [correo]);

  useEffect(() => {
    console.log('Actualización en control', descripcion);
  }, [descripcion]);

  const submitForm = (e: any) => {
    e.preventDefault();
    console.log('Formulario Enviado con los datos: ', { nombre, correo, descripcion });
    setSubmitted(true);
  };

*/ 