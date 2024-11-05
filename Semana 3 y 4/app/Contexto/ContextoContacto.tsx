'use client'

import { createContext } from "react"

export const TemaAplicacion = createContext({
    tema: 'ligth',
    cambiarTema: () =>{}
})