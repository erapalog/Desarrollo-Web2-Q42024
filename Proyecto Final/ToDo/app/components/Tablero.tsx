'use client';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'bootstrap';
import '../assets/font-awesome/css/font-awesome.min.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import style from "../styles/styles.module.css";
import { UseContext } from '../context/Provider';
import {alertReactCrud} from '../utils/functions';

interface TaskProps {
  title: string,
  icon: string,
  color: string,
  idEstado: number,
  borderColor: string

}

const Tablero: React.FC<TaskProps> = ({ title, icon, color, borderColor, idEstado }) => {
  const { listTask, randomColor, updateTaskStatus, createTask, editTask, id, setId, tarea, setTarea, descripcion, setDescripcion, avance, setAvance,
    prioridad, setPrioridad, idestado, setIdestado, idcategoria, setIdcategoria } = UseContext();

  const [operacion, setOperacion] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [colorModal, setColorModal] = useState('');

  const [showModalCreate, setShowModalCreate] = useState(false);

  const guardarNuevo = () => {
    console.info("descripcion="+descripcion.length);
    console.info("tarea="+tarea.length);

    if (tarea.length <= 7){
      alertReactCrud("Escribe un nombre que identifique a tu tarea.", "info");
      return;
    }

    if (descripcion.length <= 7){
      alertReactCrud("Ingresa una descripción de la tarea a realizar.", "info");
      return;
    }

    if (idcategoria == 0){
      alertReactCrud("No has seleccionado una categoría para tu tarea.", "info");
      return;
    }

    if (prioridad == 0){
      alertReactCrud("No has seleccionad una prioridad valida.", "info");
      return;
    }

    createTask();
    setShowModalCreate(false);
  };

  const closeModalCreate = () => {
    setShowModalCreate(false);
  };

  const openModalCreate = () => {
    setShowModalCreate(true);
  };

  const [showModalEdit, setShowModalEdit] = useState(false);

  const guardarEdit = () => {
    console.info("descripcion="+descripcion.length);
    console.info("tarea="+tarea.length);

    if (tarea.length <= 7){
      alertReactCrud("Escribe un nombre que identifique a tu tarea.", "info");
      return;
    }

    if (descripcion.length <= 7){
      alertReactCrud("Ingresa una descripción de la tarea a realizar.", "info");
      return;
    }
    
    editTask();
    setShowModalEdit(false);
  };

  const closeModalEdit = () => {
    setShowModalEdit(false);
  };

  const openModalEdit = (id: number, tarea: string, descripcion: string, idprioridad: number, idcategoria: number, idestado: number, avance: number) => {
    setId(id);
    setTarea(tarea);
    setDescripcion(descripcion);
    setPrioridad(idprioridad);
    setIdcategoria(idcategoria);
    setIdestado(idestado);
    setAvance(avance);

    setShowModalEdit(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const execute = () => {
    setShowModal(false);
    updateTaskStatus();
  };

  const l_submitHandler = (p_id: number, p_id_estado: number, p_tarea: string, p_avance: number,) => {
    setShowModal(true);
    setIdestado(p_id_estado);
    setId(p_id);
    setTarea(p_tarea);

    if (p_id_estado == 4) {
      setOperacion('Completar');
      setAvance(100);
      setColorModal('#dbf2f2');
    } else if (p_id_estado == 6) {
      setOperacion('Cancelar');
      setAvance(p_avance);
      setColorModal('#e4e5e7');
    } else if (p_id_estado == 5) {
      setOperacion('Borrar');
      setAvance(p_avance);
      setColorModal('#ccb2ff');
    }
  }

  const taskIdEstado = listTask.filter(task => task.idestado == Number(idEstado));

  const onDragEnd = (result: any) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return;
    }

    const taskId = parseInt(result.draggableId);
    const idEstado = parseInt(destination.droppableId);

    setIdestado(idEstado);
    setId(taskId);
    updateTaskStatus();
  };

  return (
    <div>
      <div className={`card`} style={{ border: `2px solid ${borderColor}` }}>
        <div className={`card-header`} style={{ backgroundColor: `${color}`, borderColor: `${borderColor}` }}>
          <div className="card-footer text-body-secondary d-flex justify-content-center align-items-center" style={{ padding: 4 }}>
            {Number(idEstado) == 1 ?
              <div>
                <button type="button" className="btn btn-light btn-sm" style={{ marginTop: -6 }} onClick={() => (openModalCreate())}><i className='fa fa-plus-circle' style={{ fontSize: 28, color: 'green' }}></i></button>&nbsp;&nbsp;
              </div>
              : null}
            <h4 className={`${style.kanbanTitle} text-center`}>
              <button type="button" className="btn btn-light position-relative">
                {title}<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{taskIdEstado.length}<span className="visually-hidden">Tareas</span></span>
              </button>
            </h4>
          </div>
        </div>
        
        <DragDropContext onDragEnd={onDragEnd}>
          <div className={`${style.kanbanColumn} ${style[`${color}`]}`} style={{ backgroundColor: `${color}`, borderColor: `${color}` }}>
            {listTask.map((tasks) => (
              (tasks.idestado === idEstado ?
                <div className={`${style.card} card`} key={tasks.id} style={{ border: `2px solid ${borderColor}` }}>
                  <div className={`${style.cardTitle} card-header`}>
                    <span>
                      <h1 className={`${style.faIconTack} ${style[`${randomColor()}`]}`}>
                        <i className="fa fa-thumb-tack"></i>
                      </h1>
                      {tasks.tarea.length > 38 ? (
                        <span>&nbsp;&nbsp;<b>{tasks.id}</b> | <b>{tasks.tarea.substring(0, 38)}...</b></span>
                      ) : (
                        <span>&nbsp;&nbsp;<b>{tasks.id}</b> | <b>{tasks.tarea}</b></span>
                      )}
                    </span>
                  </div>
                  <div className="card-body" style={{ padding: 5 }}>
                    {tasks.descripcion.length > 91 ? (
                      <p className={`${style.cardBody} card-text`}>
                        {tasks.descripcion.substring(0, 91)}...
                      </p>
                    ) : (
                      <p className={`${style.cardBody} card-text`}>
                        {tasks.descripcion}
                      </p>
                    )}
                    <div>
                      <div style={{ marginTop: 30 }} className={`${style.cardItems}`}>
                        <table className={`${style.taskText}`} style={{ width: '95%', fontSize: 9 }}>
                          <thead>
                            <tr style={{ textAlign: 'center' }}>
                              <th>
                                <i className={`fa ${tasks.iconCategoria}`} style={{ fontSize: 13, color: 'gray' }}></i>
                              </th>
                              <th>
                                <i className={`fa fa-flag`} style={{ fontSize: 13, color: `${tasks.prioridadClass}` }}></i>
                              </th>
                              <th>
                                <div className="progress mt-1 effecs" role="progressbar" aria-label="Example with label" aria-valuenow={25} aria-valuemin="0" aria-valuemax="100">
                                  <div className="progress-bar" style={{ fontSize: 10, width: tasks.avance + "%" }}>
                                    <span>{tasks.avance}%</span>
                                  </div>
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Cat.: <span style={{ fontSize: 10 }} className="badge text-bg-secondary"><b>{tasks.categoria}</b></span></td>
                              <td>Prioridad: <span style={{ fontSize: 10 }} className={` badge ${tasks.idPrioridad === 1 ? 'text-bg-success' : ''} ${tasks.idPrioridad === 2 ? 'text-bg-warning' : ''} ${tasks.idPrioridad === 3 ? 'text-bg-danger' : ''} `} >{tasks.prioridad}</span></td>
                              <td>Avance: <b>{tasks.avance + "%"}</b></td>
                            </tr>
                          </tbody>
                        </table>
                        <div style={{ borderTop: '1px solid #A4A4A4', paddingTop: '5px', width: '100%' }} className={`${style.fontSize9} mt-1`}>
                          <i className='fa fa-user' style={{ fontSize: 10 }}></i>&nbsp;<b>Creado por: </b>{tasks.creado_por} &nbsp;|&nbsp;
                          <i className='fa fa-calendar-o' style={{ fontSize: 10 }}></i>&nbsp;<b></b>{tasks.fecha_creacion}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-body-secondary d-flex justify-content-center align-items-center" style={{ padding: 4 }}>
                    <div>
                      <button disabled={tasks.idestado >= 4} type="button" className={`btn btn-outline-${tasks.idestado >= 4 ? 'secondary' : 'primary'} btn-sm`}><i className='fa fa-pencil-square-o' style={{ fontSize: 15 }} onClick={() => (openModalEdit(tasks.id, tasks.tarea, tasks.descripcion, tasks.idPrioridad, tasks.idcategoria, tasks.idestado, tasks.avance))}></i></button>&nbsp;
                      <button disabled={tasks.idestado >= 4} type="button" className={`btn btn-outline-${tasks.idestado >= 4 ? 'secondary' : 'primary'} btn-sm`} data-bs-toggle="modal" data-bs-target="#conf" onClick={() => (l_submitHandler(tasks.id, 4, tasks.tarea, tasks.avance))}><i className='fa fa-check-circle' style={{ fontSize: 15 }}></i></button>&nbsp;
                      <button disabled={tasks.idestado >= 4} type="button" className={`btn btn-outline-${tasks.idestado >= 4 ? 'secondary' : 'primary'} btn-sm`} data-bs-toggle="modal" data-bs-target="#conf" onClick={() => (l_submitHandler(tasks.id, 6, tasks.tarea, tasks.avance))}><i className='fa fa-times-circle' style={{ fontSize: 15 }}></i></button>&nbsp;
                      <button disabled={tasks.idestado >= 4} type="button" className={`btn btn-outline-${tasks.idestado >= 4 ? 'secondary' : 'primary'} btn-sm`} data-bs-toggle="modal" data-bs-target="#conf" onClick={() => (l_submitHandler(tasks.id, 5, tasks.tarea, tasks.avance))}><i className='fa fa-trash' style={{ fontSize: 16 }}></i></button>&nbsp;
                    </div>
                  </div>
                </div>
                : null)
            ))}
          </div>
        </DragDropContext>
        
      </div>

      {showModal ?
        <div className="modal fade show" id="conf" style={{ display: 'block' }} data-bs-backdrop="static" data-bs-keyboard='false' aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header" style={{ backgroundColor: `${colorModal}` }}>
                <h1 className="modal-title" id="staticBackdropLabel" style={{ fontSize: 12 }} ><b>Update task | Todo List</b></h1>
                <button type="button" className="btn-close" onClick={() => { closeModal(); }} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p style={{ fontSize: 15 }}><span className={`${style.colorRed}`}><i className='fa fa-exclamation-triangle' style={{ fontSize: "17px" }}></i>&nbsp;<b>Cuidado!</b></span></p>
                <p style={{ fontSize: 14 }}>Está seguro que desea <b>{operacion}</b> la tarea <b>{tarea}</b>?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-primary btn-sm" style={{ fontSize: "12px" }} onClick={() => { closeModal(); }}>Cancelar</button>
                <button type="button" className="btn btn-primary btn-sm" style={{ fontSize: "12px" }} onClick={() => { execute(); }}>Aceptar</button>
              </div>
            </div>
          </div>
        </div>
        : null
      }

      {showModalCreate ?
        <div className="modal fade show" id="create" style={{ display: 'block' }} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog" style={{}}>
            <div className="modal-content" style={{ border: `2px solid black` }}>
              <div className="modal-header" style={{ backgroundColor: '#DF0174' }}>
                <h1 className="modal-title" id="staticBackdropLabel" style={{ fontSize: 12, color: 'white' }} ><b>Crear Tarea | Todo List</b></h1>
                <button type="button" className="btn-close" onClick={() => { closeModalCreate(); }} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <h5 style={{ fontSize: 14 }}><b>Crear nueva tarea</b></h5>
                <div className='border' style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 10, fontSize: 13 }}>
                  <div className="input-group mb-3">
                    <span className="input-group-text"><i className='fa fa-tag' style={{ fontSize: "15px" }}></i>&nbsp;</span>
                    <input type="text" className="form-control" aria-label="" minLength={15} maxLength={50} placeholder='Nombre de la tarea' onChange={(e) => setTarea(e.target.value)} style={{ fontSize: 13 }} />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text"><i className='fa fa-align-left' style={{ fontSize: "15px" }}></i>&nbsp;</span>
                    <textarea className="form-control" placeholder="Describe tu tarea" id="floatingTextarea2" style={{ height: '100px', fontSize: 13 }} onChange={(e) => setDescripcion(e.target.value)}></textarea>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text"><i className='fa fa-ticket' style={{ fontSize: "175x" }}></i>&nbsp;</span>
                    <select className="form-select" aria-label="Default select example" required defaultValue={"-1"} onChange={(e) => setIdcategoria(Number(e.target.value))} style={{ fontSize: 13 }}>
                      <option disabled value="-1">Tipo tarea </option>
                      <option value="1">Personal</option>
                      <option value="2">Familiar</option>
                      <option value="3">Laboral</option>
                      <option value="4">Negocio</option>
                      <option value="5">Educativo</option>
                      <option value="6">Recordatorio</option>
                    </select>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text"><i className='fa fa-flag' style={{ fontSize: "15px" }}></i>&nbsp;</span>
                    <select className="form-select" defaultValue={-1} required aria-label="Default select example" onChange={(e) => setPrioridad(Number(e.target.value))} style={{ fontSize: 13 }}>
                      <option disabled value="-1">Prioridad</option>
                      <option value="1">Baja</option>
                      <option value="2">Media</option>
                      <option value="3">Alta</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-primary btn-sm" style={{ fontSize: "12px" }} onClick={() => { closeModalCreate(); }}>Cancelar</button>
                <button type="button" className="btn btn-primary btn-sm" style={{ fontSize: "12px" }} onClick={() => { guardarNuevo(); }}>Guardar</button>
              </div>
            </div>
          </div>
        </div>
        : null
      }

      {showModalEdit ?
        <div className="modal fade show" id="edit" style={{ display: 'block' }} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog" style={{}}>
            <div className="modal-content" style={{ border: `2px solid black` }}>
              <div className="modal-header" style={{ backgroundColor: '#DF0174' }}>
                <h1 className="modal-title" id="staticBackdropLabel" style={{ fontSize: 12, color: 'white' }} ><b>Modificar Tarea | Todo List</b></h1>
                <button type="button" className="btn-close" onClick={() => { closeModalEdit(); }} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <h5 style={{ fontSize: 14 }}><b>Modificar nueva tarea</b></h5>
                <div className='border' style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 10, fontSize: 13 }}>
                  <div className="input-group mb-3">
                    <span className="input-group-text"><i className='fa fa-tag' style={{ fontSize: "15px" }}></i>&nbsp;</span>
                    <input type="text" className="form-control" aria-label="" minLength={15} maxLength={50} placeholder='Nombre de la tarea' onChange={(e) => setTarea(e.target.value)} style={{ fontSize: 13 }} defaultValue={tarea} />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text"><i className='fa fa-align-left' style={{ fontSize: "15px" }}></i>&nbsp;</span>
                    <textarea className="form-control" placeholder="Describe tu tarea" id="floatingTextarea2" style={{ height: '100px', fontSize: 13 }} onChange={(e) => setDescripcion(e.target.value)} defaultValue={descripcion}></textarea>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text"><i className='fa fa-ticket' style={{ fontSize: "175x" }}></i>&nbsp;</span>
                    <select className="form-select" aria-label="Default select example" required defaultValue={""+idcategoria} onChange={(e) => setIdcategoria(Number(e.target.value))} style={{ fontSize: 13 }}>
                      <option disabled value="-1">Tipo tarea </option>
                      <option value="1">Personal</option>
                      <option value="2">Familiar</option>
                      <option value="3">Laboral</option>
                      <option value="4">Negocio</option>
                      <option value="5">Educativo</option>
                      <option value="6">Recordatorio</option>
                    </select>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text"><i className='fa fa-flag' style={{ fontSize: "15px" }}></i>&nbsp;</span>
                    <select className="form-select" aria-label="Default select example" required defaultValue={""+prioridad} onChange={(e) => setPrioridad(Number(e.target.value))} style={{ fontSize: 13 }}>
                      <option disabled value="-1">Prioridad</option>
                      <option value="1">Baja</option>
                      <option value="2">Media</option>
                      <option value="3">Alta</option>
                    </select>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text"><i className='fa fa-circle-o-notch fa-spin fa-3x fa-fw' style={{ fontSize: "15px" }}></i>&nbsp;</span>
                    <input type="number" className="form-control" aria-label="" min={0} max={100} placeholder='Avance' onChange={(e) => setAvance(Number(e.target.value))} style={{ fontSize: 13, textAlign: 'right' }} defaultValue={avance} />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text"><i className='fa fa-toggle-on' style={{ fontSize: "175x" }}></i>&nbsp;</span>
                    <select className="form-select" aria-label="Default select example" defaultValue={""+idestado} onChange={(e) => setIdestado(Number(e.target.value))} style={{ fontSize: 13 }}>
                      <option disabled value="-1">Estado</option>
                      <option value="1">Por hacer</option>
                      <option value="2">En progreso</option>
                      <option value="3">Atrasada</option>
                      <option value="4">Finalizada</option>
                      <option value="5">Borrado</option>
                      <option value="6">Cancelada</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-primary btn-sm" style={{ fontSize: "12px" }} onClick={() => { closeModalEdit(); }}>Cancelar</button>
                <button type="button" className="btn btn-primary btn-sm" style={{ fontSize: "12px" }} onClick={() => { guardarEdit(); }}>Guardar</button>
              </div>
            </div>
          </div>
        </div>
        : null
      }
    </div>
  );
};

export default Tablero;