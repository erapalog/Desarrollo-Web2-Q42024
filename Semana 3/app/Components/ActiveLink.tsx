'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface PropiedadLink{
    path: string
    text: string,
    icon?:JSX.Element
}

export default function ActiveLink({path,text, icon}:PropiedadLink) {

   const pathName= usePathname()

   console.log(pathName)

  return (
    <div>
        <Link key={path} href={path} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page">
         {icon}
         {text}
         </Link>
    </div>
  )
}
