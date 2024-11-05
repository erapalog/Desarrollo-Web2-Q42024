
'use client'
import { Producto } from '@/Modelos/Producto'
import React, { ReactNode, useContext, useState } from 'react'
import { ContextProducto } from './ContextProducto';

interface VistaComponete{
    children: ReactNode
}

export default function ProviderProducto({children}:VistaComponete) {

  const [productos,setProductos] = useState<Producto[]>([]);
  const [productoCarrito,setProductoCarrito] = useState<Producto[]>([]);

  return (
   
    <ContextProducto.Provider value={{productos,setProductos,productoCarrito,setProductoCarrito}}>
        {children}
    </ContextProducto.Provider>
)
}

export function useContextCarrito(){
    return useContext(ContextProducto)
}
