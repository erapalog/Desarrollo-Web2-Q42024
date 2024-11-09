'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import Image from 'next/image';
import logo from './logoUnitec.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeIcon, RepoIcon, ServerIcon, CacheIcon } from '@primer/octicons-react';
import "./globals.css";
import './assets/font-awesome/css/font-awesome.min.css';
import style from "./styles/styles.module.css";
import toast from 'react-hot-toast';
import Provider from './context/Provider';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [login, setLogin] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.info("Login");

    if (usuario === 'admin' && clave === 'admin123'){
      setLogin(true);
    } else {
      toast.error('Usuario / clave invalido');
      setLogin(false);
    }
  };

  return (
    <Provider>
    <html lang="en">
      <title>Tarea 5</title>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster position="top-center" />
        <div>
          {!login ? (
            (
              <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="card shadow-lg" style={{ width: '25rem' }}>
                  <div className="card-body">
                    <h5 className="card-title text-center">Autenticación de usuario</h5>
                      <form onSubmit={loginHandler}>
                        <div className="input-group input-group-sm mb-1">
                          <span className={`${style.formControlIcon} input-group-text`}><i className="fa fa-user"></i></span>
                          <span className={`${style.formControlLabel} input-group-text`}>Usuario</span>
                          <input type="text" className={`${style.formControlInput} form-control`} id="text" name="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                        </div>
                        <div className="input-group input-group-sm mb-1">
                          <span className={`${style.formControlIcon} input-group-text`}><i className="fa fa-key"></i></span>
                          <span className={`${style.formControlLabel} input-group-text`}>Clave</span>
                          <input type="password" className={`${style.formControlInput} form-control`} id="text" name="text" value={clave} onChange={(e) => setClave(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
                      </form>
                  </div>
                </div>
              </div>
            )
          ) :
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <Image src={logo} alt="Unitec Logo" style={{ width: 60 }} />
                <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">Examen 1</span>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                  <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                  </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                  <ul style={{ backgroundColor: '#40b1b0' }} className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                      <Link href="../" className={`${style.hover} card-title hover block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500`} aria-current="page"><HomeIcon size={24} />&nbsp;Home</Link>
                    </li>
                    <li>
                      <Link href="/presupuesto" className={`${style.hover} card-title hover block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500`}><RepoIcon size={24} />&nbsp;Presupuestos</Link>
                    </li>
                    <li>
                      <Link href="/gastos" className={`${style.hover} card-title hover block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500`}><ServerIcon size={24} />&nbsp;Gastos</Link>
                    </li>
                    <li>
                      <Link href="/resumen" className={`${style.hover} card-title hover block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500`}><CacheIcon size={24} />&nbsp;Resumen</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          }
        </div>

        {children}
      </body>
    </html>
    </Provider>
  );
}
