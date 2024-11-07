'use client'
import React, { useEffect } from 'react'
import { useContexCarrito } from '@/Context/ProviderProducto'
import CardProducto from './CardProducto'



export default function ProductList() {
 
    const {productos, setProductos} = useContexCarrito() 

    async function cargarProductos() {
        try {
    
            const res = await fetch('http://localhost:5001/Productos')
            const data = await res.json()
    
            setProductos(data)
    
            console.log(data)
            
        } catch (error) {
            console.log('Ocurrio un error: \n', error)
        }
    }
    
    useEffect(()=>{
        cargarProductos()
    },[])
    
    
 
    return (
    <div className='container'>
        <div className='row'>
            {
             productos.map((item, index)=>(
                <div className='col-sm-12 col-md-6 col-lg-4' key={index}>
                    <CardProducto {...{...item, btnAgregar:false, btnEliminar:true}} ></CardProducto>
                </div>               
             ))   
            }
        </div>
     
    </div>
  )
}
