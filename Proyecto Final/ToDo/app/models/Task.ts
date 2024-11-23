
export interface Task {
    id: number;
    tarea: string;
    descripcion: string;
    estado: string;
    avance: number;
    creado_por: string;
    fecha_creacion: string;
    modificado_por: string;
    fecha_modificacion: string;
    icon: string;
    color: string;
    tipo_letra: string | null;
    idestado: number;
    border_class: string | null;
    evaluacion: number;
    prioridad: number;
    classestado: string;
    idcategoria: number,
    categoria: string
  }