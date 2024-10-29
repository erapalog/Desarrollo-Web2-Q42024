import Link from "next/link";
import { text } from "stream/consumers";
import ActiveLink from "./ActiveLink";
import { AccessibilityIcon, ArchiveIcon, BookIcon, HomeIcon } from "@primer/octicons-react";

export default function NavBar() {

 const navItem=[
    {path:'/contacto', text:"Contacto" , icon: <AccessibilityIcon/>},
    {path:'/about', text:"Informacion", icon: <ArchiveIcon/>},
    {path:'/', text:"Otros", icon: <BookIcon/>}
 ]
  return (
    <div>
         <nav className="bg-gray-800">


    <div className="hidden sm:ml-6 sm:block">

            <div className="flex space-x-4">
                <Link href="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">
                 <HomeIcon></HomeIcon> Home
                </Link>

                {
                    navItem.map(navItem =>(
                        <ActiveLink key={navItem.path} {...navItem}></ActiveLink>
                    ))
                }
   
            </div>


    </div>
    </nav>
    </div>
  )
}
