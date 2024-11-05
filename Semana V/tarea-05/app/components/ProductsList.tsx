'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { UseContext } from '../context/Provider';
import {DuplicateIcon } from '@primer/octicons-react';
import style from '../styles/styles.module.css';

export default function ProductsList() {
    const { addToCart, listaProductos, loadProducts} = UseContext();

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div className="row">
            {listaProductos.length > 0 ? (
                listaProductos.map(producto => (
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={producto.IdProducto}>
                        <div className="card" style={{ height: '385px' }}>
                            <div style={{ height: '390px', position: 'relative' }}>
                                <Image src={producto.imagenProducto} alt={producto.NombreProducto} layout="fill" objectFit="cover" className="card-img-top" />
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h5 className={`${style.fontSize14} card-title`}><b>Nombre: </b>{producto.NombreProducto}</h5>
                                <p className={`${style.fontSize14} card-title`}><b>Precio: L. </b>{producto.PrecioProducto}</p>
                                <p className={`${style.fontSize14} card-title`}><b>Impuesto: L. </b>{producto.IsvProducto}</p>
                                <p className={`${style.fontSize15} card-title`}><b>Precio Total: L. </b>{Number(producto.PrecioProducto) + Number(producto.IsvProducto)}</p>
                                <button className="btn btn-primary mt-auto" onClick={() => addToCart(producto.IdProducto, producto.NombreProducto, producto.PrecioProducto, producto.IsvProducto, producto.imagenProducto)}><DuplicateIcon size={24} />&nbsp; Comprar</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No hay productos disponibles.</p>
            )}
        </div>
    );
}
