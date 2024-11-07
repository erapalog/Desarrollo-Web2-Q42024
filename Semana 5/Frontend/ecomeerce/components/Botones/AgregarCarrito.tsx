import { useContextCarrito } from '@/Context/ProviderProducto'
import { Producto } from '@/Modelos/Producto'
import React from 'react'

export default function AgregarCarrito(item:Producto) {

    const {productoCarrito, setProductoCarrito}= useContextCarrito();

    function agregarCarrito(item:Producto){
        setProductoCarrito([...productoCarrito, item])
    }

  return (
    <div>
      <a href="#" className="btn btn-primary" onClick={()=> agregarCarrito(item)}>Agregar al carrito</a>

    </div>
  )
}
