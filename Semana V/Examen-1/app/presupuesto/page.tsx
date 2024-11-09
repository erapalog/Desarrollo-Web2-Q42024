import Presupuesto from '../components/Presupuesto';
import { Toaster } from "react-hot-toast";
import "../globals.css";

export default function Page() {
  return (
    <main>
      <div className="ml-3">
      <Toaster position="top-center" />
        <Presupuesto/>
      </div>
    </main>
  )
}
