import Form from '../components/Form';
import { Toaster } from "react-hot-toast";
import "../globals.css";

export default function Page() {
  return (
    <main>
      <div className="ml-3">
      <Toaster position="top-center " />
        <Form/>
      </div>
    </main>
  )
}
