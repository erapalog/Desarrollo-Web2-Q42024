'use client';
import React, { } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../app/styles/globals.css";
import './assets/font-awesome/css/font-awesome.min.css';
import AppProvider from './context/Provider';
import Link from 'next/link';

export default function RootLayout({ children }) {

  return (
    <AppProvider>
      <html lang="en">
        <title>Examen II | DAW II</title>
        <body>

          <nav className="dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600" style={{ marginTop: 1, backgroundColor: '#0d6efd' }}>
            <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto px-1">
              <a className="flex items-center space-x-3 rtl:space-x-reverse">
              </a>
              <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-0 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
                </button>
              </div>
              <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky" style={{marginBottom: 5}}>
                <ul className="flex flex-col p-1 md:p-1 mt-1 border rounded-lg md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <Link href="/chartjs">
                    <button type="button" className="btn btn-primary"><i className='fa fa-building-o' style={{fontSize: 22}}></i>&nbsp;ChartJS</button><span style={{paddingRight: 7}}></span>
                  </Link>
                </ul>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
    </AppProvider >
  );
}
