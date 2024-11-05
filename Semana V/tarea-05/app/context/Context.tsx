import { createContext } from 'react';
import { Producto } from '../models/Producto';

// Definir el tipo del contexto
export const Content = createContext<{
    isDarkTheme: boolean;
    toggleTheme: () => void;
    nombre: string;
    precio: number;
    isvProducto: number;
    imagenProducto: string;
    listaProductos: Producto[];
    setNombre: (nombre: string) => void;
    setPrecio: (precio: number) => void;
    setIsvProducto: (isvProducto: number) => void;
    setImagenProducto: (imagenProducto: string) => void;
    loadProducts: () => void;
    addToCart: (id: number, nombre: string, precio: number, isvProducto: number, imagenProducto: string) => void;
    removeFromCart: (id: number) => void;
    car: Producto[];
    formatNumber: (number: number) => string;
    save:() => void;
}>({
    isDarkTheme: false,
    toggleTheme: () => {},
    nombre: '',
    precio: 0,
    isvProducto: 0,
    imagenProducto: '',
    listaProductos: [],
    setNombre: (nombre: string) => {},
    setPrecio: (precio: number) => {},
    setIsvProducto: (isvProducto: number) => {},
    setImagenProducto: (imagenProducto: string) => {},
    loadProducts: () => {},
    addToCart: (id: number, nombre: string, precio: number, isvProducto: number, imagenProducto: string) => {},
    removeFromCart: (id: number) => {}, 
    car: [],
    formatNumber: (number: number) => string,
    save:() => {},
});
