'use client'
import { useContexCarrito } from "@/Context/ProviderProducto";
import Link from "next/link";
import React from "react";

export default function Navegacion() {
  const {productosCarrito} = useContexCarrito()
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Ecomerce
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/producto">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/carrito">
                  <button type="button" className="btn btn-primary">
                    Carrito <span className="badge text-bg-secondary">{productosCarrito.length}</span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
