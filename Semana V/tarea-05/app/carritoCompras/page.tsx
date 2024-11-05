'use client';
import { UseContext } from '../context/Provider';
import '../assets/font-awesome/css/font-awesome.min.css';
import "../globals.css";
import Link from 'next/link';
import ProductsList from '../components/ProductsList';
import { TagIcon } from '@primer/octicons-react';
import { ThumbsdownIcon } from '@primer/octicons-react';
import { AppsIcon } from '@primer/octicons-react';

export default function Page() {
  const { listaProductos, car } = UseContext();

  return (
    <main>
        <div className="" style={{ marginLeft: 300, marginRight: 300, marginTop: 140, marginBottom: 150 }}>
          <ul className="nav nav-pills nav-fill" style={{ marginBottom: 10 }}>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/carritoCompras"><AppsIcon size={22} />&nbsp;Productos<span className="position-absolute top-22 start-33 translate-middle badge rounded-pill bg-danger">{listaProductos.length}</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link position-relative" href="/carritoCompras/car"><i className="fa fa-shopping-cart" style={{ fontSize: 21 }}></i>&nbsp;Carrito<span className="position-absolute top-2 start-31 translate-middle badge rounded-pill bg-danger">{car.length}</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/carritoCompras/car"><TagIcon size={22} />&nbsp;Compras<span id="carcc" className="position-absolute top-20 start-100 translate-middle badge rounded-pill bg-danger">0</span></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true"><ThumbsdownIcon size={22} />&nbsp;Devoluciones</a>
            </li>
          </ul>
          <ProductsList></ProductsList>
        </div>
    </main>
  )
}