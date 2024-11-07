"use client";
import { Producto } from "@/Modelos/Producto";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { ContexCarrito } from "./ContexProducto";

interface VistaComponente {
  children: ReactNode;
}

export default function ProviderProducto({ children }: VistaComponente) {
  
  const [productosCarrito, setProductosCarrito] = useState<Producto[]>([]);
  const [productos, setProductos] = useState<Producto[]>([]);
  const [total, setTotal] = useState(0)
  const [totalIsv, setTotalIsv] = useState(0)
  const [totalSinIsv, setTotalSinIsv] = useState(0)
   
  function agregarCarrito (producto:Producto){
    console.log(producto)
    setProductosCarrito([...productosCarrito, producto])    
   }

   function eliminarCarrito(ID:number){
    setProductosCarrito(productosCarrito.filter(producto => producto.IdProducto != ID))    
   }

   useEffect(()=>{
    productosCarrito.forEach(producto => {
      setTotal(total + parseFloat(producto.PrecioProducto))
      setTotalIsv(totalIsv + parseFloat(producto.IsvProducto))
      setTotalSinIsv(totalSinIsv + (parseFloat(producto.PrecioProducto) - parseFloat(producto.IsvProducto)))  
    }); 

    if(productosCarrito.length == 0){
      setTotal(0)
      setTotalIsv(0)
      setTotalSinIsv(0)
    }

    
   },[productosCarrito])
   
  return (
    <ContexCarrito.Provider
      value={{ productosCarrito, setProductosCarrito, productos, setProductos, agregarCarrito, total, totalIsv, totalSinIsv, eliminarCarrito}}
    >
      {children}
    </ContexCarrito.Provider>
  );
}

export function useContexCarrito() {
  return useContext(ContexCarrito);
}
