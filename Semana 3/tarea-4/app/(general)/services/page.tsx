import React from 'react';
import Card from '@/app/components/Card';

export default function Page() {
  const itemButtons = [];

  return (
      <main>
        <div className="ml-3">
          <Card titlePage="Nuestros servicios" itemButtons={itemButtons}></Card>
        </div>
      </main>
  )
}
