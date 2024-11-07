import Navegacion from "@/Componentes/Navegacion/Navegacion";
import ProviderProducto from "@/Context/ProviderProducto";
import "bootstrap/dist/css/bootstrap.min.css";
export default function LayoutCarrito({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <ProviderProducto>
        <Navegacion></Navegacion>
        {children}
      </ProviderProducto>
    </main>
  );
}
