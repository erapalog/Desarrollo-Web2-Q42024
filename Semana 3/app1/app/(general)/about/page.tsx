import Card_AboutProps  from "../cards/card_about"
import React from "react"

export default function page() {
  return (

    <main>
      <Card_AboutProps 
        header="Noteworthy technology acquisitions 2021"
        body="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
      />
    
    
    </main>

  )
};

/*
Ing. Me revente el morro pensando el por que no me daba Card_About
y resulta que no es un componente tipado y estuve sin mentirle como 38 minutos creo
buscando algo de informacion y hasta que me salio que era por el Props que lo hace tipado para Tysript
y se me fue el 20 jaja termianda y casi me pego un tiro jaja
*/
