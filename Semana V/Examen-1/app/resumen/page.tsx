'use client';
import DataTable from '../components/DataTable';
import { Toaster } from "react-hot-toast";
import "../globals.css";

export default function Page() {
  return (
    <main>
      <div className="ml-3">
      <Toaster position="top-center" />
        <DataTable tipo={1} />
      </div>
    </main>
  )
}
