import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="/count">Count </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link active" href="/max">Maximo Salario</Link>
            </li>
            <li>
                <Link href="/suma">
                <button type="button" className="btn btn-warning">
                SUM Salary <span className="badge badge-light">0</span>
                    <span className="sr-only">Suma</span>
                </button>
                </Link>
          
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/">Inicio</Link>
            </li>
          
        </ul>

    </div>
</nav>
  )
}
