import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="/count">Visualizacion Graficas </a>
     
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link active" href="/max">Maximo Salario (Max)</Link>
            </li>
            <li className="nav-item">
                <Link   className="nav-link active" href="/count">                      
                Despidos (Count)
                </Link>
          
            </li>
            <li className="nav-item">
                <Link  className="nav-link active" href="/suma">
                        Diferencia Salario (SUM)
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
