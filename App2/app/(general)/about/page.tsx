'use client'
import CardComponent from "@/Components/CardComponent";
import ProviderContacto, { useTema } from "@/Contexto/ProviderContacto";

export default function page() {

  const {tema} = useTema()
  return (
    <main>


        {tema}
      <CardComponent title="Card de prueba" body="Card de prueba para generar componente"></CardComponent>

      
    </main>
  )
}
