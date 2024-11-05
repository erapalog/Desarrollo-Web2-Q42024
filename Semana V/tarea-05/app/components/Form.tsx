'use client';
import React, { useState } from 'react';
import style from '../styles/styles.module.css';
import '../assets/font-awesome/css/font-awesome.min.css';
import DataTable from '../components/DataTable';
import toast from 'react-hot-toast';
import '../globals.css';

interface User {
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  fechaNacimiento: string;
  edad: string;
}

const colNames = ['nombre','apellido','telefono','correo','fechaNacimiento','edad'];

export default function Form() {
  const [listUser, setListUser] = useState<User[]>([]);
  const [nombre, setNombre] = useState<string>('');
  const [apellido, setApellido] = useState<string>('');
  const [telefono, setTelefono] = useState<string>('');
  const [correo, setCorreo] = useState<string>('');
  const [fechaNacimiento, setFechaNacimiento] = useState<string>('');
  const [edad, setEdad] = useState<string>();


  const calcularEdad = (fecha: string): number => {
    const nacimiento = new Date(fecha);
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mesDiff = hoy.getMonth() - nacimiento.getMonth();

    if (mesDiff < 0 || (mesDiff === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    
    return edad;
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nombre == '' || apellido == '' || telefono == '' || correo == '' || fechaNacimiento == ''){
      toast.error('Todos los campos son necesarios');
      return;
    }

    const newUser: User = {
      nombre,
      apellido,
      telefono,
      correo,
      fechaNacimiento,
      edad
    };

    AddUser(newUser);
  };

  function dateHandler (date:string){
    setFechaNacimiento(date);
    setEdad(""+calcularEdad(date));
  }

  const AddUser = (newUser: User) => {
    setListUser((prevUsers) => [...prevUsers, newUser]);
    
    setNombre('');
    setApellido('');
    setTelefono('');
    setCorreo('');
    setFechaNacimiento('');
    toast.success('Usuario agregado exitosamente!', {
    style: {
      background: '#333',
      color: '#fff',
      fontSize: '18px',
      padding: '16px',
    },
});
  };

  return (
    <main>
      <div className="mx-3 row" style={{ marginTop: '140px' }}>
        <div className="col-lg-2 col-md-2 col-sm-2">&nbsp;</div>
        <div className="col-lg-3 col-md-3 col-sm-3 border">
          <form onSubmit={submitHandler}>
            <fieldset>
              <legend className="font-size-11">Creación de usuario</legend>
              <div className="input-group input-group-sm mb-1">
                <span className={`${style.formControlIcon} input-group-text`}><i className="fa fa-user"></i></span>
                <span className={`${style.formControlLabel} input-group-text`}>Nombre</span>
                <input  type="text"  className={`${style.formControlInput} form-control`}  id="nombre"  name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} 
                />
              </div>
              <div className="input-group input-group-sm mb-1">
                <span className={`${style.formControlIcon} input-group-text`}><i className="fa fa-user"></i></span>
                <span className={`${style.formControlLabel} input-group-text`}>Apellido</span>
                <input type="text" className={`${style.formControlInput} form-control`} id="apellido" name="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} 
                />
              </div>
              <div className="input-group input-group-sm mb-1">
                <span className={`${style.formControlIcon} input-group-text`}><i className="fa fa-phone"></i></span>
                <span className={`${style.formControlLabel} input-group-text`}>Tel&eacute;fono</span>
                <input type="text" className={`${style.formControlInput} form-control`} id="telefono" name="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} 
                />
              </div>
              <div className="input-group input-group-sm mb-1">
                <span className={`${style.formControlIcon} input-group-text`}><i className="fa fa-envelope"></i></span>
                <span className={`${style.formControlLabel} input-group-text`}>Correo</span>
                <input type="email" className={`${style.formControlInput} form-control`} id="correo" name="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} 
                />
              </div>
              <div className="input-group input-group-sm mb-1">
                <span className={`${style.formControlIcon} input-group-text`}><i className="fa fa-calendar"></i></span>
                <span className={`${style.formControlLabel} input-group-text`}>Nacimiento</span>
                <input type="date" className={`${style.formControlInput} form-control`} id="nacimiento" name="nacimiento" value={fechaNacimiento} onChange={(e) => dateHandler(e.target.value)} 
                />
              </div>
              <button type="submit" className="btn btn-primary btn-sm mb-2">Submit</button>
            </fieldset>
          </form>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2">&nbsp;</div>
      </div>

      <div className="mx-3 row" style={{ marginTop: '20px' }}>
        <div className="col-lg-2 col-md-2 col-sm-2">&nbsp;</div>
        <div className="col-lg-8 col-md-8 col-sm-8">
          <DataTable title='Listado de Usuarios' columns={colNames} data={listUser} ></DataTable>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2">&nbsp;</div>
      </div>
    </main>
  );
}
