'use client';
import React, { useContext, useState, useEffect } from 'react';
import { Producto } from '../models/Producto';
import { Content } from './Context';
import { configDotenv } from 'dotenv';
import toast from 'react-hot-toast';

configDotenv();
const URL_API = process.env.NEXT_PUBLIC_URL_API;

interface Props {
    children: React.ReactNode;
}

export default function ThemeLocalProvider({ children }: Props) {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);
    const [isvProducto, setIsvProducto] = useState(0);
    const [imagenProducto, setImagenProducto] = useState('');
    const [listaProductos, setListaProductos] = useState<Producto[]>([]);
    const [car, setCar] = useState<Producto[]>([]);

    async function loadProducts() {
        try {
            const request = await fetch(`${URL_API}/productos`); 
            const response = await request.json();
            setListaProductos(response);
        } catch (error) {
            console.error("Error de conexión a " + URL_API, error);
        }
    }

    const save = () => {
        car.forEach(producto => {
            saveSales(producto.id, Number(producto.precio) + Number(producto.isvProducto));
        });
    }

    async function saveSales(id:number, total:number) {
        try {
            let venta = {
                "IdProducto": id, "TotalVenta": total, "FechaVenta": new Date
            };
            console.info(venta);
            const request = await fetch(`${URL_API}/ventas`,{
                method:'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(venta)
              }); 
            const response = await request.json();
            setCar([]);
            toast.success("Su compra registrada exitosamente!");
        } catch (error) {
            console.error("Error de conexión a " + URL_API, error);
        }
    }

    const addToCart = (id: number, nombre: string, precio: number, isvProducto: number, imagenProducto: string) => {
        const prod: Producto = { id, nombre, precio, isvProducto, imagenProducto};

        setCar((prevCar) => {
            const productExists = prevCar.some((item) => item.id === id);
            if (!productExists) {
                return [...prevCar, prod];
            } 
            return prevCar;
        });
        
        //setCar((prevCar) => [...prevCar, prod]);
    };

    const removeFromCart = (id: number) => {
        setCar((prevCar) => prevCar.filter((item) => item.id !== id));
    };

    const formatNumber = (number: number) => {
        return number.toLocaleString('en-US', { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
          });
    }

    useEffect(() => { loadProducts(); }, []); 

    const value = {
        isDarkTheme,
        toggleTheme,
        nombre,
        precio,
        isvProducto,
        imagenProducto,
        listaProductos,
        setNombre,
        setPrecio,
        setIsvProducto,
        setImagenProducto,
        loadProducts,
        addToCart,
        removeFromCart,
        car,
        formatNumber,
        save
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
