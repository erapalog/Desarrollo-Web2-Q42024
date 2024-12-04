import { createContext } from 'react';
import { Task } from '../models/Task';
import { Status } from '../models/Status';
import { Category } from '../models/Category';
import { Priority } from '../models/Priority';
import { DataChartCount } from '../models/DataChartCount';

export const Content = createContext<{
    listTask: Task[];
    dataCountTask: DataChartCount[],
    randomColor: () => void;
    listStatus: Status[];
    listPriority: Priority[];
    listCategory: Category[];
    dataCountStatus: DataChartCount[],
    dataCountCategory: DataChartCount[],
    dataCountPriority: DataChartCount[],
    updateTaskStatus:() => void, createTask:() => void, editTask:() => void,
    id: (id:number) => void,
    setId: (id:number) => void, 
    tarea: (tarea:string) => void, 
    setTarea: (tarea:string) => void,
    descripcion: (descripcion:string) => void, 
    setDescripcion: (descripcion:string) => void,
    avance: (avance:number) => void, 
    setAvance: (avance:number) => void,
    prioridad: number, 
    setPrioridad: (prioridad:number) => void, 
    idestado: (idestado:number) => void, 
    setIdestado: (idestado:number) => void,
    idcategoria: number, 
    setIdcategoria: (idcategoria:number) => void,    
}>({
    listTask: [],
    dataCountTask: [],
    randomColor: () => { },
    listStatus: [],
    listPriority: [],
    listCategory: [],
    dataCountStatus: [],
    dataCountCategory: [],
    dataCountPriority: [],
    updateTaskStatus: () => { }, createTask: () => { }, editTask:() => {},
    id: () => { },
    setId: () => { },
    tarea: () => { }, 
    setTarea: () => { }, 
    descripcion: () => { }, 
    setDescripcion: () => { }, 
    avance: () => { }, 
    setAvance: () => { }, 
    prioridad: 0, 
    setPrioridad: () => { }, 
    idestado: () => { }, 
    setIdestado: () => { }, 
    idcategoria: 0, 
    setIdcategoria: () => { }, 
});
