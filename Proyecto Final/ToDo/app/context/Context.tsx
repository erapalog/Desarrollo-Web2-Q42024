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
});
