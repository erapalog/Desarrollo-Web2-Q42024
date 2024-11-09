import Gastos from '../components/GastosRegistro';
import { Toaster } from "react-hot-toast";
import "../globals.css";

export default function Page() {
  return (
    <main>
      <div className="ml-3">
      <Toaster position="top-center" />
        <Gastos/>
      </div>
    </main>
  )
}
