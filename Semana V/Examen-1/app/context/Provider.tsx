'use client';
import React, { useContext, useState, useEffect } from 'react';
import { Content } from './Context';
import { configDotenv } from 'dotenv';
import Gasto from '../models/Gasto';

configDotenv();
const URL_API = process.env.NEXT_PUBLIC_URL_API;

interface Props {
  children: React.ReactNode;
}

export default function ThemeLocalProvider({ children }: Props) {
    
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  const [montoPresupuesto, setMontoPresupuesto] = useState<number>(0);
  const [saldoPresupuesto, setSaldoPresupuesto] = useState<number>(montoPresupuesto);
  
  const [accion, setAccion] = useState<number>(0);

  const [id, setId] = useState<number>(0);
  const [monto, setMonto] = useState<number>(0);
  const [categoria, setCategoria] = useState<string>('');
  const [descripcion, setDescripcion] = useState<string>('');
  const [fecha, setFecha] = useState<string>('');   
  const [listGastos, setListaGastos] = useState<Gasto[]>([]);

  const guardaPresupuesto = (monto: number) => {
    setMontoPresupuesto(monto);
  };

  async function load() {
    try {
        const request = await fetch(`${URL_API}/gasto`); 
        const response = await request.json();
        setListaGastos(response);
    } catch (error) {
        console.error("Error de conexión a " + URL_API, error);
    }
}

  async function guardarGasto() {
    let method = '';
    let gasto;
    let url = '';

    try {
        url = `${URL_API}/gasto`;
        method = 'POST';
        if (accion == 0){ 
            gasto = {
                "categoria": categoria, "monto": monto, "fecha": fecha
            };
    } else {
        url = `${URL_API}/gasto/${id}`;
        method = 'PUT';
        gasto = {
            "idgasto": id, "categoria": categoria, "monto": monto, "fecha": fecha
        };
    }

        console.info(gasto);
        const request = await fetch(url,{
            method: method,
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(gasto)
          }); 
        const response = await request.json();
        
        setSaldoPresupuesto(prev => prev - monto);
        setMonto(0);
        setDescripcion('');
        setFecha('');
        setCategoria('');
        load();
        setAccion(0);
    } catch (error) {
        console.error("Error de conexión a " + URL_API, error);
    }
}

async function borrar(id: number) {
    try {
        const request = await fetch(`${URL_API}/gasto/${id}`,{
            method:'DELETE',
            headers: {'Content-Type':'application/json'},
          }); 
        const response = await request.json();
        
        load();
    } catch (error) {
        console.error("Error de conexión a " + URL_API, error);
    }
}

const editar = (id: number, monto: number, categoria: string, fecha: string) => {
    setId(id);
    setMonto(monto);
    setDescripcion('Actualizacion');
    setFecha(fecha);
    setCategoria(categoria);
    setAccion(1);
  };

  const formatNumber = (number: number) => {
    return number.toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    });
  };

  useEffect(() => { load(); setSaldoPresupuesto(montoPresupuesto - monto);},  [montoPresupuesto, monto]); 

  const value = {
    isDarkTheme,
    toggleTheme,
    montoPresupuesto,
    guardaPresupuesto,
    formatNumber,
    setMonto,
    setCategoria,
    setDescripcion,
    setFecha,
    guardarGasto,
    listGastos,
    monto,
    categoria,
    descripcion,
    fecha,
    saldoPresupuesto,
    borrar,
    editar
  };

  return (
    <Content.Provider value={value}>
      {children}
    </Content.Provider>
  );
}

export const UseContext = () => {
  return useContext(Content);
};
