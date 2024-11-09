'use client';
import React, { useState} from 'react';
import style from '../styles/styles.module.css';
import '../assets/font-awesome/css/font-awesome.min.css';
import toast from 'react-hot-toast';
import '../globals.css';
import { UseContext } from '../context/Provider';

export default function Presupuesto() {
  const [monto, setMonto] = useState('');
  const { montoPresupuesto, guardaPresupuesto, saldoPresupuesto} = UseContext();
  const [mostrar, setMostrar] = useState(false);
  
  const guardar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.info("guardando "+monto);
    if (parseFloat(monto) <= 0) {
      toast.error('El monto del presupuesto debe ser mayor a L 0.00');
      return;
    } else {
      guardaPresupuesto(monto);
      toast.success('Presupuesto establecido correctamente');
    }
  };

  return (
    <div>
      <div className="mx-3 row" style={{ marginTop: '140px' }}>
        <div className="col-lg-3 col-md-3 col-sm-3">&nbsp;</div>
        <div className="col-lg-5 col-md-5 col-sm-5 border row mb-3">
              <form onSubmit={guardar} className='mx-3 mb-3'>
                <fieldset>
                  <legend className={`${style.fontSize22}`}>Establecer presupuesta mensual</legend>
                  <div className="input-group input-group-sm mb-3">
                    <span className={`${style.formControlIcon} input-group-text`}><i className="fa fa-money"></i></span>
                    <span className={`${style.formControlLabel} input-group-text`}>Monto</span>
                    <input type="number" className={`${style.formControlInput} form-control text-end `} id="monto" name="monto" defaultValue={montoPresupuesto} onChange={(e) => setMonto(e.target.value)} />
                  </div>montoPresupuesto={montoPresupuesto}, saldoPresupuesto{saldoPresupuesto} = 
                  {((montoPresupuesto/montoPresupuesto-saldoPresupuesto)*100)}% 
                  { montoPresupuesto > 0 ?
                      null
                    : 
                    <div className='text-end'> 
                      <button type="submit" className="btn btn-primary btn-sm mb-5">Guardar</button>
                    </div>
                    }
                    {
                      saldoPresupuesto > 0 ?
                      ((montoPresupuesto/montoPresupuesto-saldoPresupuesto)*100) > 80 ?
                      <div className="alert alert-warning" role="alert">
                        <i className="fa fa-exclamation-triangle"></i>&nbsp;<b>Alerta </b>Haz alcanzado {(((montoPresupuesto - saldoPresupuesto)/montoPresupuesto)*100)}% de tu presupuesto
                      </div>
                      :
                      (((montoPresupuesto - saldoPresupuesto)/montoPresupuesto)*100) > 100 ?
                      <div className="alert alert-danger" role="alert">
                        <i className="fa fa-times"></i>&nbsp;<b>Cuidado </b>Has superado el límite del presupuesto, debes ajustar gastos {saldoPresupuesto} {montoPresupuesto} {(((montoPresupuesto - saldoPresupuesto)/montoPresupuesto)*100)}%
                      </div>
                      : 
                      <div className="alert alert-success" role="alert">
                      <i className="fa fa-check-square-o"></i>&nbsp;<b>Muy bien </b>Tu presupuesto esta en control, saldo {saldoPresupuesto}, presu {montoPresupuesto} felicidades {(((montoPresupuesto - saldoPresupuesto)/montoPresupuesto)*100)}% gastado
                    </div>
                    :
                    null
                    }
                  </fieldset>
              </form>
          </div>
            <div className="col-lg-1 col-md-1 col-sm-1">&nbsp;
            </div>
      </div>
    </div>
  );
}