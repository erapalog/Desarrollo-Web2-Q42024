'use client'
import ProductList from '@/components/Productos/ProductList'
import { useContextCarrito } from '@/Context/ProviderProducto'
import React from 'react'

export default function page() {

  const {} = useContextCarrito()
  return (
    <div>
      <ProductList></ProductList>
    </div>
  )
}
