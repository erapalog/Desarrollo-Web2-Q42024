import React from 'react'
import Card from '@/app/components/Card';
import {CopyIcon } from '@primer/octicons-react';
import {BellFillIcon } from '@primer/octicons-react';
import {CommentDiscussionIcon } from '@primer/octicons-react';
import {CodeSquareIcon } from '@primer/octicons-react';

export default function Page() {
  
  const itemButtons = [
    {title: 'Clase', content: 'Desarrollo de aplicaciones Web II', icon: <CopyIcon/>},
    {title: 'Redes sociales', content: 'Facebook, Instagran', icon: <BellFillIcon/>},
    {title: 'WhatsApp', content: '+504 9998-3698', icon: <CommentDiscussionIcon/>},
    {title: 'Desarrollos', content: 'Descargar catalogo', icon: <CodeSquareIcon/>}
  ];

  return (
      <main>
        <div className="ml-3">
          <Card titlePage="Sobre nosotros" itemButtons={itemButtons}></Card>
        </div>
      </main>
  )
}
