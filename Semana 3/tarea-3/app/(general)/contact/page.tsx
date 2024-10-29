import Card from '@/app/components/Card';
import React from 'react';
import {PersonFillIcon, CopilotIcon, CommentDiscussionIcon, GearIcon } from '@primer/octicons-react';

export default function Page() {
   const itemButtons = [
    {title: 'Profile', content: 'Andres L. Oliva', icon: <PersonFillIcon/>},
    {title: 'Redes sociales', content: 'andres.oliva y aoliva', icon: <CopilotIcon/>},
    {title: 'WhatsApp', content: '+504 3398-9999', icon: <CommentDiscussionIcon/>},
    {title: 'Productos', content: 'Desarrollos JS', icon: <GearIcon/>}
  ];

  return (
    <main>
      <div className="ml-3">
        <Card titlePage="Contáctanos" itemButtons={itemButtons} />
      </div>
    </main>
  )
}
