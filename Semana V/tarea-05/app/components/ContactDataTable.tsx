interface User {
  id: number,
  nombre: string;
  correo: string;
  descripcion: string;
}

interface DataTableInfo {
  title: string;
  columns: string[];
  data: User[];
  editHandler: (id:number, nombre: string, correo:string, descripcion:string) => void;
  deleteConfirm: (id: number) => void;
}

export default function DataTable ({ title, columns, data, editHandler, deleteConfirm} :DataTableInfo) {
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
              data.map((contact) => (
                <tr key={contact.id}>
                    <td className="font-size-10">{contact.id}</td>
                    <td className="font-size-10">{contact.nombre}</td>
                    <td className="font-size-10">{contact.correo}</td>
                    <td className="font-size-10">{contact.descripcion}</td>
                    <td className="font-size-10">
                      <button type="submit" className="btn btn-primary btn-sm" onClick={() => editHandler(contact.id, contact.nombre, contact.correo, contact.descripcion)}><i className="fa fa-edit"></i></button>&nbsp;
                      <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteConfirm(contact.id)}><i className="fa fa-trash-o"></i></button>
                    </td>
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
