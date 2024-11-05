import Nav from "@/components/Navegacion/Nav";
import ProviderProducto from "@/Context/ProviderProducto";
import "bootstrap/dist/css/bootstrap.min.css"

export default function LayoutCarrito({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main>

      <ProviderProducto>
      <Nav></Nav>        
      {children}
      </ProviderProducto>
      
    </main>
  );
}