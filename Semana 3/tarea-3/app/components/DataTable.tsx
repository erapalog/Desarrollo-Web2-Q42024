interface User {
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  fechaNacimiento: string;
  edad: number;
}

interface DataTableInfo {
  title: string;
  columns: [];
  data: User[];
}

export default function DataTable ({ title, columns, data} :DataTableInfo) {
  return (
    <div>
      <h3>{title}</h3>
      <div className="table-scroll">
        <table className="table table-striped table-hover border">
          <thead>
          <tr>
          {columns.map((col) => (
        <th key={col} className="font-size-10">
          {col}
        </th>
      ))}
          </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((user) => (
                <tr key={user.nombre+user.edad}>
                    <td className="font-size-10">{user.nombre}</td>
                    <td className="font-size-10">{user.apellido}</td>
                    <td className="font-size-10">{user.telefono}</td>
                    <td className="font-size-10">{user.correo}</td>
                    <td className="font-size-10">{user.fechaNacimiento}</td>
                    <td className="font-size-10">{user.edad}</td>
                </tr>
              ))
            ) : (
              <tr>
                <th colSpan={columns.length} className="font-size-10">
                  No se encontraron registros
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
