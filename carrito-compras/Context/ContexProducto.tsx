'use client'

import { Producto } from "@/Modelos/Producto"
import { createContext } from "react"

export const ContexCarrito = createContext({
   productosCarrito: [] as Producto[],
   setProductosCarrito: (productos: Producto[]) =>{},
   productos: [] as Producto[],
   setProductos: (productos: Producto[]) =>{},
   agregarCarrito: (producto:Producto)=>{},
   eliminarCarrito: (index:number)=>{},
   totalIsv: 0,
   totalSinIsv: 0,
   total: 0
})