import React from 'react'
import Link from 'next/link'

interface PropiedadLink{
    path:string
    text:string
}

export default function ActiveLink({path,text}:PropiedadLink) {
     

  return (
    <div>
          <Link key={path} href={path} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page" >{text}</Link>      
    </div>
  )
}
