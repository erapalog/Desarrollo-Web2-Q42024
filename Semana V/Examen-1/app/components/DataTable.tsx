import { UseContext } from '../context/Provider';
import React from 'react';

export default function DataTable({ tipo }: { tipo: number }) {
  const { listGastos, borrar, editar, montoPresupuesto } = UseContext();

  const totalMonto = listGastos.reduce((total, gasto) => total + gasto.monto, 0);

  return (
    <div>
      {
        tipo == 1 ?
          <div style={{marginTop: 150}}></div>
        :
        <div></div>
      }
      <h3 className="mb-4 text-center">Lista de Gastos - Tipo {tipo}</h3>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered shadow-sm">
          <thead>
            <tr>
              <th className="font-size-12 text-center">Id</th>
              <th className="font-size-12 text-center">Monto</th>
              <th className="font-size-12 text-center">Categoría</th>
              <th className="font-size-12 text-center">Fecha</th>
              <th className="font-size-12 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listGastos.length > 0 ? (
              listGastos.map((gasto) => (
                <tr key={gasto.idgasto}>
                  <td className="font-size-12 text-center">{gasto.idgasto}</td>
                  <td className="font-size-12 text-center">{gasto.monto}</td>
                  <td className="font-size-12 text-center">{gasto.categoria}</td>
                  <td className="font-size-12 text-center">{gasto.fecha}</td>
                  <td className="text-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-warning btn-sm" onClick={() => editar(gasto.idgasto, gasto.monto, gasto.categoria, gasto.fecha)}>Editar</button>&nbsp;
                      <button type="button" className="btn btn-danger btn-sm" onClick={() => borrar(gasto.idgasto)}>Borrar</button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="font-size-12 text-center">
                  <strong>No se encontraron gastos registrados</strong>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <hr></hr>
      {tipo == 1 ?
      <div className="table-responsive" style={{width: '30%'}}>
        <table className="table table-striped table-hover table-bordered shadow-sm">
          <thead>
            <tr>
              <th className="font-size-12 text-center">Descripcion</th>
              <th className="font-size-12 text-center">Monto</th>
            </tr>
          </thead>
          <tbody>
                <tr>
                  <td className="font-size-12 text-left">Prespuesto mensual</td>
                  <td className="font-size-12 text-right">Lps {montoPresupuesto}</td>
                </tr>
                <tr>
                  <td className="font-size-12 text-left">Gasto mensual</td>
                  <td className="font-size-12 text-right">Lps {totalMonto}</td>
                </tr>
                <tr>
                  <td className="font-size-12 text-left">Total Gasto</td>
                  <td className="font-size-12 text-right"><b>Lps {montoPresupuesto - totalMonto}</b></td>
                </tr>
          </tbody>
        </table>
      </div>
      :null}
    </div>
  );
}
