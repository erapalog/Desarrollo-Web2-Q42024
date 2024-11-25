import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Graficos con ChartJS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/avgByLineCode">Promedio por LineCode</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="/productByStatus">Numero de Productos por Status</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="/totalValueByProduct">Valor total por Producto</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
