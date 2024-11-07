'use client'
import { useContextCarrito } from '@/Context/ProviderProducto'
import React from 'react'
import Card from '../Productos/Card'
import EliminarCarrito from '../Botones/EliminarCarrito'

export default function Cart() {

    const { productoCarrito } = useContextCarrito()
    return (
        <>
            <div className='container'>

                <div className='row'>

                    {
                        productoCarrito.map((item) => (
                            <div className='col-md-4' key={item.IdProducto}>
                                <Card  {...item}></Card>
                                <EliminarCarrito {...item}></EliminarCarrito>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>

    )
}
