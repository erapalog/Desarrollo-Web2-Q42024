
import { Persona } from './Persona';

export const New_Persona = (
  e: React.FormEvent,
  setNew_Persona: React.Dispatch<React.SetStateAction<Persona[]>>,
  cliente: Persona[],
  nombre: string,
  apellido: string,
  telefono: string,
  correo: string,
  nacimiento: string
) => {
  e.preventDefault();
  const nuevoCliente: Persona = { nombre, apellido, telefono, correo, nacimiento };
  setNew_Persona([...cliente, nuevoCliente]);

  return { nombre: '', apellido: '', telefono: '', correo: '', nacimiento: '' };
};
