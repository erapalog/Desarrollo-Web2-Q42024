'use client'
import { useContextCarrito } from '@/Context/ProviderProducto'
import Link from 'next/link'
import React from 'react'

export default function Nav() {

    const {productoCarrito} = useContextCarrito()
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                 
                    <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link active" href="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/carrito">
                        <button type="button" className="btn btn-primary">
                        Carrito <span className="badge bg-secondary">{productoCarrito.length}</span>
                        </button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/producto">Productos</Link>
                    </li>
                   
                    </ul>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>

    )
}
