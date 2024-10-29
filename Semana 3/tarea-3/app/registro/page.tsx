'use client';
import React, { useState } from 'react';
import style from '../styles/styles.module.css';
import '../assets/font-awesome/css/font-awesome.min.css';

interface User {
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  fechaNacimiento: string;
}

export default function Page() {
  const [listUser, setListUser] = useState<User[]>([]);
  const [nombre, setNombre] = useState<string>('');
  const [apellido, setApellido] = useState<string>('');
  const [telefono, setTelefono] = useState<string>('');
  const [correo, setCorreo] = useState<string>('');
  const [fechaNacimiento, setFechaNacimiento] = useState<string>('');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser: User = {
      nombre,
      apellido,
      telefono,
      correo,
      fechaNacimiento,
    };

    AddUser(newUser);
  };

  const AddUser = (newUser: User) => {
    setListUser((prevUsers) => [...prevUsers, newUser]);
    
    setNombre('');
    setApellido('');
    setTelefono('');
    setCorreo('');
    setFechaNacimiento('');
  };

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
                <input type="date" className={`${style.formControlInput} form-control`} id="nacimiento" name="nacimiento" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} 
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
          <h3>Lista de Usuarios</h3>
          <div className="table-scroll">
                                    <table className="table table-striped table-hover border">
                                      <thead>
                                        <tr>
                                          <th scope="col" className="font-size-10">Nombre</th>
                                          <th scope="col" className="font-size-10">Apellido</th>
                                          <th scope="col" className="font-size-10">Tel&eacute;fono</th>
                                          <th scope="col" className="font-size-10">Correo</th>
                                          <th scope="col" className="font-size-10">Nacimiento</th>
                                          <th scope="col" className="font-size-10">Edad</th>
                                        </tr>
                                      </thead>
                                      <tbody>  
                                      { listUser.length > 0 ?
                                          listUser.map((user) => (
                                            <tr key={user.nombre}>
                                              <td scope="row" className="font-size-10">{user.nombre}</td>
                                              <td scope="row" className="font-size-10">{user.apellido}</td>
                                              <td scope="row" className="font-size-10">{user.telefono}</td>
                                              <td scope="row" className="font-size-10">{user.correo}</td>
                                              <td scope="row" className="font-size-10">{user.fechaNacimiento}</td>
                                              <td scope="row" className="font-size-10">{calcularEdad(user.fechaNacimiento)}</td>
                                            </tr>
                                        )) : <tr>
                                              <th colSpan={6} className="font-size-10">No se encontraron registros</th>
                                            </tr>
                                      }
                                      </tbody>
                                    </table>      
                                    </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2">&nbsp;</div>
      </div>
    </main>
  );
}
