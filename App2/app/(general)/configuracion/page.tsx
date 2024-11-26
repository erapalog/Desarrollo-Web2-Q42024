import Consumidor from '@/Contexto/Consumidor'
import ProviderContacto from '@/Contexto/ProviderContacto'
import React from 'react'

export default function page() {
  return (
    <div>

        <ProviderContacto>
            <Consumidor></Consumidor>
        </ProviderContacto>
    </div>
  )
}
