import { createContext } from 'react';
import { DataChartCount, DataEjercicio1, DataEjercicio2, DataEjercicio3 } from '../models/DataChartCount';

export const Content = createContext<{
    ejercicio1: DataEjercicio1[],
    ejercicio2: DataEjercicio2[],
    ejercicio3: DataEjercicio3[],
    dataCountStatus: DataChartCount[],
    dataCountCategoryCode: DataChartCount[],
    dataCountPlannerCode: DataChartCount[],
    
}>({
    ejercicio1: [],
    ejercicio2: [],
    ejercicio3: [],
    dataCountStatus: [],
    dataCountCategoryCode: [],
    dataCountPlannerCode: [],
});
