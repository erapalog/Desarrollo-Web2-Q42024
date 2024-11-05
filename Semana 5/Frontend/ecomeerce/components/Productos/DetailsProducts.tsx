import { useContextCarrito } from '@/Context/ProviderProducto'
import React, { useContext, useEffect } from 'react'

export default function DetailsProducts() {

  const {productos, setProductos} = useContextCarrito()

  async function cargarProductos(){
    try {

     const res= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/productos`)
     const data= await res.json();
    
     setProductos(data)

     console.log(productos)

    } catch (error) {
        console.log("Ocurrio un error", error)
    }
  }

  useEffect(()=>{
        cargarProductos()
  },[])

  return (
    <div>DetailsProducts</div>
  )
}
