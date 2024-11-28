'use client';
import React, { } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/font-awesome/css/font-awesome.min.css';
import style from "../styles/styles.module.css";
import { UseContext } from '../context/Provider';

interface TaskProps {
  title: string;
  icon: string;
  color: string;
  idEstado: number;
}

const Tablero: React.FC<TaskProps> = ({ title, icon, color, idEstado }) => {
  const { listTask, randomColor } = UseContext();

  return (
    <div>
      <div className={`card`}>
        <div className={`card-header`} style={{ backgroundColor: `${color}`, borderColor: `${color}` }}>
          <h4 className={`${style.kanbanTitle} text-center`}>{title}</h4>
        </div>
        <div className={`${style.kanbanColumn} ${style[`${color}`]}`} style={{ backgroundColor: `${color}`, borderColor: `${color}` }}>
          {listTask.map((tasks) => (
            Number(tasks.idestado) === Number(idEstado) ? (
              <div className={`${style.card} card`} key={tasks.id}>
                <div className={`${style.cardTitle} card-header`}>
                  <span>
                    <h1 className={`${style.faIconTack} ${style[`${randomColor()}`]}`}>
                      <i className="fa fa-thumb-tack"></i>
                    </h1>
                    {tasks.tarea.length > 38 ? (
                      <span>&nbsp;&nbsp;<b>{tasks.tarea.substring(0, 38)}...</b></span>
                    ) : (
                      <span>&nbsp;&nbsp;<b>{tasks.tarea}</b></span>
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
                            <td>Cat.: <b>{tasks.categoria}</b></td>
                            <td>Prioridad: <b>{tasks.prioridad}</b></td>
                            <td>Avance: <b>{tasks.avance + "%"}</b></td>
                          </tr>
                        </tbody>
                      </table>
                      <div style={{ borderTop: '1px solid #A4A4A4', paddingTop: '5px', width: '100%' }} className={`${style.fontSize9} mt-1`}>
                        <i className='fa fa-user' style={{ fontSize: 10 }}></i>&nbsp;Creado: <b></b>{tasks.creado_por} &nbsp;|&nbsp;&nbsp;
                        <i className='fa fa-calendar-o' style={{ fontSize: 10 }}></i>&nbsp;<b></b>{tasks.fecha_creacion}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-body-secondary d-flex justify-content-center align-items-center" >
                  <button type="button" className="btn btn-outline-primary btn-sm"><i className='fa fa-check-circle' style={{ fontSize: 15 }}></i></button>&nbsp;
                  <button type="button" className="btn btn-outline-primary btn-sm"><i className='fa fa-check-square-o' style={{ fontSize: 15 }}></i></button>&nbsp;
                  <button type="button" className="btn btn-outline-primary btn-sm"><i className='fa fa-times-circle' style={{ fontSize: 15 }}></i></button>&nbsp;
                  <button type="button" className="btn btn-outline-primary btn-sm"><i className='fa fa-trash' style={{ fontSize: 16 }}></i></button>&nbsp;
                </div>
              </div>
            ) : null
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tablero;