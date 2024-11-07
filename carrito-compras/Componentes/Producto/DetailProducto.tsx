'use client'
import { useContexCarrito } from '@/Context/ProviderProducto'
import React, { useEffect } from 'react'

export default function DetailProducto() {
    const {productosCarrito, total, totalSinIsv, totalIsv, eliminarCarrito, setProductosCarrito} = useContexCarrito()

    const guardarVenta = async (e: any) =>{
      try {
        const url = "http://localhost:5001/ventas"
        const fecha = new Date()
        for(let i=0; i < productosCarrito.length; i++){
          let {IdProducto, PrecioProducto} = productosCarrito[i]
          const res = await fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({IdProducto, TotalVenta:PrecioProducto, FechaVenta:fecha})
          })
        }
        setProductosCarrito([])
        
      } catch (error) {
        console.log("Error: ", error)
      }
    }

    return (    
    <div>
      {
        productosCarrito.map((item, index)=>(
          <div className='row p-3' key={index}>
          
              <div className='col-2'>
                <img src={item.imagenProducto} alt=""  style={{"height" :"9rem"}}/>
              </div>
              <div className='col-8'>
                <p>{item.NombreProducto}</p>
                <p>Precio: {item.PrecioProducto} Lps.</p>
                <p>Isv: {item.IsvProducto}Lps.</p>
                <button onClick={()=>eliminarCarrito(item.IdProducto)}>eliminar</button>
              </div>

          </div>
        ))
      }
      <p>SubTotal: {totalSinIsv}</p>
      <p>Isv: {totalIsv}</p>
      <p>Total: {total}</p>
      <button onClick={guardarVenta}>Guargar</button>
    </div>
  )
}
