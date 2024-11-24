import { createContext } from 'react';
import { DataChartCount } from '../models/DataChartCount';

export const Content = createContext<{
    dataCountStatus: DataChartCount[],
    dataCountCategoryCode: DataChartCount[],
    dataCountPlannerCode: DataChartCount[],
    
}>({
    dataCountStatus: [],
    dataCountCategoryCode: [],
    dataCountPlannerCode: [],
});
