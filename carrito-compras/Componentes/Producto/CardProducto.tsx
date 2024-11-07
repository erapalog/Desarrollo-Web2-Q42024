'use client'
import { useContexCarrito } from '@/Context/ProviderProducto'
import { ParametrosCard } from '@/Modelos/ParametrosCard'
import { Producto } from '@/Modelos/Producto'
import React, { useEffect } from 'react'

export default function CardProducto({IdProducto, NombreProducto, PrecioProducto, IsvProducto, imagenProducto, btnAgregar, btnEliminar}:ParametrosCard) {

  const {agregarCarrito, productosCarrito} = useContexCarrito()  
  const producto:Producto = {
    IdProducto : IdProducto,
    NombreProducto: NombreProducto,
    PrecioProducto: PrecioProducto,
    IsvProducto: IsvProducto,
    imagenProducto: imagenProducto,
  }

  return (
    <div>
      <div className="card p-2" style={{"width" :"18rem"}} >
                    <img src={imagenProducto} className="card-img-top" alt="..." ></img>
                    <div className="card-body">
                        <h5 className='card-title'>{NombreProducto}</h5>
                        <p className="card-text">{PrecioProducto}</p>
                        <a href="#" className="btn btn-primary" hidden={btnAgregar} onClick={()=>agregarCarrito(producto)}>Agregar</a>
                        <a href="#" className="btn btn-primary" hidden={btnEliminar}>Eliminar</a>
                    </div>
                </div>
    </div>
  )
}

