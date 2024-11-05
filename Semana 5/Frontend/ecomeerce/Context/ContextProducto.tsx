//Listado productos
//metodo me permita completar o cargar lista de productos
//listado para productos en el carrito
//metodo que permita agregar al carrito

'use client'

import { Producto } from "@/Modelos/Producto"
import { createContext } from "react"

export const ContextProducto = createContext({
    productos: [] as Producto[],
    setProductos: (producto:Producto[] ) =>{},
    productoCarrito: [] as Producto[],
    setProductoCarrito: (producto:Producto[] ) =>{}
})