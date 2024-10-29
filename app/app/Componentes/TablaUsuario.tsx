import React from 'react'
import { Usuario } from '../Modelos/Iformulario'

interface TablaUsuarioProps {
    usuarios: Usuario[]; // Define el tipo de usuarios como un array de Usuario
}

const TablaUsuario: React.FC<TablaUsuarioProps> = ({ usuarios }) => {
    return (
        <table className="table-auto border-collapse border border-gray-400 w-full mt-5">
          <thead>
            <tr>
              <th className="border border-gray-300">Nombre</th>
              <th className="border border-gray-300">Apellido</th>
              <th className="border border-gray-300">Teléfono</th>
              <th className="border border-gray-300">Correo</th>
              <th className="border border-gray-300">Fecha de Nacimiento</th>
              <th className="border border-gray-300">Edad</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario, index) => (
              <tr key={index}>
                <td className="border border-gray-300">{usuario.nombre}</td>
                <td className="border border-gray-300">{usuario.apellido}</td>
                <td className="border border-gray-300">{usuario.telefono}</td>
                <td className="border border-gray-300">{usuario.correo}</td>
                <td className="border border-gray-300">{usuario.fnacimiento}</td>
                <td className="border border-gray-300">{usuario.edad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
}

export default TablaUsuario