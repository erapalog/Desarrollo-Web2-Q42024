import { useContextCarrito } from '@/Context/ProviderProducto'
import { Producto } from '@/Modelos/Producto'
import React from 'react'

export default function EliminarCarrito(item:Producto) {

 const {productoCarrito, setProductoCarrito}= useContextCarrito()

 function eliminarDelCarrito(producId: number){


    setProductoCarrito(productoCarrito.filter(producto => producto.IdProducto!==producId))

 }
  return (
   <div>
      <a href="#" className="btn btn-danger" onClick={()=> eliminarDelCarrito(item.IdProducto)}>Eliminar del carrito</a>

    </div>
  )
}
