'use client';
import React, { useState, useEffect } from 'react';
import style from '../styles/styles.module.css';
import '../assets/font-awesome/css/font-awesome.min.css';
import ContactDataTable from '../components/ContactDataTable';
import { configDotenv } from 'dotenv';
import toast from 'react-hot-toast';
import '../globals.css';

configDotenv();
const URL_API = process.env.NEXT_PUBLIC_URL_API;

interface Contact {
  id: number,
  nombre: string,
  correo: string,
  descripcion: string
}

const colNames = ['Id', 'Nombre','Correo','Descripción', ''];

export default function Form() {
    console.log(`URL ${URL_API}`);
  const [id, setId]= useState<number>(0);
  const [nombre, setNombre]= useState<string>('');
  const [correo, setCorreo] = useState<string> ('');
  const [descripcion, setDescription]= useState<string>('');

  const [fNombre, setFNombre]= useState<string>('');
  const [fCorreo, setFCorreo] = useState<string> ('');
  const [fDescripcion, setFDescription]= useState<string>('');

  const [listContact, setListContact]= useState([]);
  const [edit, setEdit] = useState(false);
  const [modaIsOpen, setModaIsOpen] = useState(false);
  const [label, setLabel] = useState('Crear contacto');

  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  
  async function loadContacts(){
    try {
      const request = await fetch(`${URL_API}/contacto`);
      const response = await request.json();
      setListContact(response);
    } catch (error) {
      console.error("Error de conexion a "+URL_API, error)
    }
  }

  const editHandler = (idref: number, nombre: string, correo: string, descripcion: string) => {
    setLabel('Editar contacto');
    setEdit(true);

    setId(idref);
    setFNombre(nombre);
    setFCorreo(correo);
    setFDescription(descripcion);

    handleOpenModal();
  };

  const deleteConfirm = (id:number) => {
    setId(id);
    handleOpenModalDelete();
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let response;

    if (edit) {
        response = await fetch(`${URL_API}/contacto/${id}`,{
            method:'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({"id": id, "nombre": fNombre, "correo": fCorreo, "descripcion": fDescripcion})
          })
    } else {
        if (nombre.length == 0 || correo.length == 0 || descripcion.length == 0){
            toast.error('Todos los campos son obligatorios');
            return;
        }

        response = await fetch(`${URL_API}/contacto`,{
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({"nombre": nombre, "correo": correo, "descripcion": descripcion})
          })
    
    try {
      if (response.ok) {
        setNombre('');
        setCorreo('');
        setDescription('');
      } else {
        toast.error('Error al guardar el contacto');
      }
    } catch (error) {
      console.error("Error al conectar a la API", error);
      toast.error("Error de conexión"+ error);
    }
    }

    if(response.ok){
        toast.success("Contacto guardado exitosamente");
        setId(0)
        setFNombre("");
        setFCorreo("");
        setFDescription("");
        loadContacts();
        handleCloseModal();
      } else{
        alert("Ocurrio un error al invocar el servicio "+URL_API);
      }
  };

  const deleteHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let response;

    response = await fetch(`${URL_API}/contacto/${id}`,{
                method:'DELETE',
                headers: {'Content-Type':'application/json'}
               });

    if(response.ok){
        toast.success("Registro borrado exitosamente.");
        handleCloseModalDelete();
        loadContacts();
      } else{
        alert("Ocurrio un error al invocar el servicio "+URL_API);
      }
  };

  const handleCloseModalDelete = () => {
    setModalDeleteIsOpen(false);
  };

  const handleOpenModalDelete = () => {
    setModalDeleteIsOpen(true);
  };

  const handleCloseModal = () => {
    setModaIsOpen(false);
  };

  const handleOpenModal = () => {
    setModaIsOpen(true);
  };

  useEffect(()=>{ loadContacts(); }, []);

  return (
    <div>
      <div className="mx-3 row" style={{ marginTop: '140px' }}>
        <div className="col-lg-2 col-md-2 col-sm-2">&nbsp;</div>
        <div className="col-lg-3 col-md-3 col-sm-3 border">
          <form onSubmit={submitHandler}>
            <fieldset>
              <legend className="font-size-11">Creación de Contacto</legend>
              <div className="input-group input-group-sm mb-1">
                <span className={`${style.formControlIcon} input-group-text`}><i className="fa fa-user"></i></span>
                <span className={`${style.formControlLabel} input-group-text`}>Nombre</span>
                <input  type="text"  className={`${style.formControlInput} form-control`}  id="nombre"  name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} 
                />
              </div>
              <div className="input-group input-group-sm mb-1">
                <span className={`${style.formControlIcon} input-group-text`}><i className="fa fa-envelope"></i></span>
                <span className={`${style.formControlLabel} input-group-text`}>Correo</span>
                <input type="email" className={`${style.formControlInput} form-control`} id="correo" name="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} 
                />
              </div>
              <div className="input-group input-group-sm mb-1">
                <span className={`${style.formControlIcon} input-group-text`}><i className="fa fa-align-center"></i></span>
                <span className={`${style.formControlLabel} input-group-text`}>Descripción</span>
                <textarea type="text"  className={`${style.formControlInput} form-control`}  id="descripcion"  name="descripcion" value={descripcion} onChange={(e) => setDescription(e.target.value)} 
                />
              </div>
              <div className='text-end'>
                <button type="submit" className="btn btn-primary btn-sm mb-2">Guardar</button>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2">&nbsp;</div>
      </div>

      <div className="mx-3 row" style={{ marginTop: '20px' }}>
        <div className="col-lg-2 col-md-2 col-sm-2">&nbsp;</div>
        <div className="col-lg-8 col-md-8 col-sm-8">
          <ContactDataTable title='Listado de contactos' columns={colNames} data={listContact} editHandler={editHandler} deleteConfirm={deleteConfirm}></ContactDataTable>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2">&nbsp;</div>
      </div>

      {modaIsOpen ? 
        <div className="modal show" style={{ display: 'block' }} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className={`${style.modalHeader} modal-header`}>
                <h5 className="modal-title" id="exampleModalLabel"><i className="fa fa-edit"></i>&nbsp;{label}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>
              <div className="modal-body border mx-2 mt-2 mb-2">
                <form onSubmit={submitHandler}>
                    <fieldset>
                    <legend className={`${style.fontSize15}`}>Creación de Contacto</legend>
                    <div className="input-group input-group-sm mb-1">
                        <span className={`${style.formControlIcon} input-group-text`}><i className="fa fa-user"></i></span>
                        <span className={`${style.formControlLabel} input-group-text`}>Nombre</span>
                        <input  type="text"  className={`${style.formControlInput} form-control`}  id="nombre"  name="nombre" defaultValue={fNombre} onChange={(e) => setFNombre(e.target.value)} 
                        />
                    </div>
                    <div className="input-group input-group-sm mb-1">
                        <span className={`${style.formControlIcon} input-group-text`}><i className="fa fa-envelope"></i></span>
                        <span className={`${style.formControlLabel} input-group-text`}>Correo</span>
                        <input type="email" className={`${style.formControlInput} form-control`} id="correo" name="correo" defaultValue={fCorreo} onChange={(e) => setFCorreo(e.target.value)} 
                        />
                    </div>
                    <div className="input-group input-group-sm mb-1">
                        <span className={`${style.formControlIcon} input-group-text`}><i className="fa fa-align-center"></i></span>
                        <span className={`${style.formControlLabel} input-group-text`}>Descripción</span>
                        <textarea type="text"  className={`${style.formControlInput} form-control`}  id="descripcion"  name="descripcion" defaultValue={fDescripcion} onChange={(e) => setFDescription(e.target.value)} 
                        />
                    </div>
                    <div className='text-end'>
                        <button type="submit" className="btn btn-primary btn-sm mb-2">Guardar</button>
                    </div>
                    </fieldset>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary btn-sm" onClick={handleCloseModal}>Salir</button>
              </div>
            </div>
          </div>
        </div>
      : null }

    {modalDeleteIsOpen ? 
     <div className="modal show" style={{ display: 'block' }} aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div className="modal-dialog">
       <div className="modal-content">
         <div className={`${style.modalHeaderDelete} modal-header`}>
            <h1 className="modal-title" id="staticBackdropLabel" style={{ fontSize: "14px"}} ><b><i className="fa fa-trash-o"></i>&nbsp;Delete Contacto</b></h1>
           <button type="button" className="btn-close" onClick={handleCloseModalDelete} aria-label="Close"></button>
         </div>
         <div className="modal-body border mx-2 mt-2 mb-2">
         <p style={{ fontSize: "16px"}}><span className=""><i className='fa fa-exclamation-triangle' style={{ fontSize: "17px", color: "red" }}></i>&nbsp;<b>Cuidado!</b></span></p>
         <p style={{ fontSize: "16px"}}>¿Esta seguro que desea borrar el contacto?</p>
         </div>
         <div className="modal-footer">
         <button type="button" className="btn btn-primary btn-sm" onClick={deleteHandler}>Borrar</button>
           <button type="button" className="btn btn-outline-secondary btn-sm" onClick={handleCloseModalDelete}>Salir</button>
         </div>
       </div>
     </div>
   </div>
    : null }

    </div>
  );
}