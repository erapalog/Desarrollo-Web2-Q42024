import Home from "../page";
import Navbar from "../Componentes/Navbar";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <main>
   
     <Navbar></Navbar>




      {children}


    </main>
    </>
  );
}