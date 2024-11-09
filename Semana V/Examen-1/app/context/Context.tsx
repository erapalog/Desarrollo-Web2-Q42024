import { createContext } from 'react';
import Gasto from '../models/Gasto';

export const Content = createContext<{
    isDarkTheme: boolean;
    toggleTheme: () => void;
    montoPresupuesto: number;
    guardaPresupuesto: (monto: number) => void; 
    formatNumber: (monto: number) => string;
    setMonto: (monto: number) => void; 
    setCategoria: (categoria: string) => void; 
    setDescripcion: (descripcion: string) => void; 
    setFecha: (fecha: string) => void; 
    guardarGasto: () => void; 
    listGastos: Gasto[];
    monto: number;
    categoria: string;
    descripcion: string;
    fecha: string;
    saldoPresupuesto: number;
    borrar: (id: number) => void; 
    editar: (id: number, monto: number, categoria: string, fecha: string) => void; 

}>({
    isDarkTheme: false,
    toggleTheme: () => {},
    montoPresupuesto: 0,
    guardaPresupuesto: (monto: number) => {}, 
    formatNumber: (number: number) => string,
    setMonto: (monto: number) => {}, 
    setCategoria: (categoria: string) => {}, 
    setDescripcion: (descripcion: string) => {}, 
    setFecha: (fecha: string) => {}, 
    guardarGasto: () => {},
    listGastos: [],
    monto: 0, 
    categoria: '',
    descripcion: '', 
    fecha: '', 
    saldoPresupuesto: 0,
    borrar:() => {},
    editar:() => {},
});
