'use client';
import React from 'react';
import style from '../styles/styles.module.css';
import '../assets/font-awesome/css/font-awesome.min.css';
import toast from 'react-hot-toast';
import '../globals.css';
import { UseContext } from '../context/Provider';
import DataTable from '../components/DataTable';

export default function Gastos() {
  const { setMonto, setCategoria, setDescripcion, setFecha, guardarGasto, monto, categoria, descripcion, fecha, montoPresupuesto} = UseContext();
  
  const guardar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (monto <= 0) {
        toast.error('El monto debe ser mayor que cero.');
        return;
      }
      
      guardarGasto();

      setMonto(0);
      setCategoria('');
      setDescripcion('');
      setFecha('');
      
      toast.success('Gasto guardado correctamente');
  };

  return (
    <div>
      <div className="mx-3 row" style={{ marginTop: '140px' }}>
        <div className="col-lg-3 col-md-3 col-sm-3">&nbsp;</div>
        <div className="col-lg-7 col-md-7 col-sm-7 border row mb-3">
              <form onSubmit={guardar} className='mx-3 mb-3'>
                <fieldset>
                  <legend className={`${style.fontSize22}`}>Establecer presupuesta mensual</legend>
                  <div className="input-group input-group-sm mb-3">
                    <span className={`${style.formControlIcon} input-group-text`}><i className="fa fa-money"></i></span>
                    <span className={`${style.formControlLabel} input-group-text`}>Presupuesto</span>
                    <input disabled type="number" className={`${style.formControlInput} form-control text-end `} id="monto" name="monto" defaultValue={montoPresupuesto} />
                  </div>
                  <div className="input-group input-group-sm mb-3 ">
                    <span className={`${style.formControlIcon} input-group-text`}><i className="fa fa-money"></i></span>
                    <span className={`${style.formControlLabel} input-group-text`}>Monto</span>
                    <input type="number" className={`${style.formControlInput} form-control text-end `} id="monto" name="monto" value={monto} onChange={(e) => setMonto(Number(e.target.value))} />
                  </div>
                  <div className="input-group input-group-sm mb-3">
                    <span className={`${style.formControlIcon} input-group-text`}><i className="fa fa-bookmark"></i></span>
                    <span className={`${style.formControlLabel} input-group-text`}>Categoría</span>
                    <input type="text" className={`${style.formControlInput} form-control text-end `} id="categoria" name="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
                  </div>
                  <div className="input-group input-group-sm mb-3">
                    <span className={`${style.formControlIcon} input-group-text`}><i className="fa fa-sliders"></i></span>
                    <span className={`${style.formControlLabel} input-group-text`}>Descripción</span>
                    <input type="text" className={`${style.formControlInput} form-control text-end `} id="descripcion" name="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                  </div>
                  <div className="input-group input-group-sm mb-3">
                    <span className={`${style.formControlIcon} input-group-text`}><i className="fa fa-calendar"></i></span>
                    <span className={`${style.formControlLabel} input-group-text`}>Fecha</span>
                    <input type="date" className={`${style.formControlInput} form-control text-end `} id="fecha" name="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                  </div>
                  <div className='text-end'> 
                      <button type="submit" className="btn btn-primary btn-sm mb-5">Guardar</button>
                    </div>
                  </fieldset>
              </form>
              <DataTable tipo={0}></DataTable>
          </div>
            <div className="col-lg-1 col-md-1 col-sm-1">&nbsp;
            </div>
      </div>
    </div>
  );
}