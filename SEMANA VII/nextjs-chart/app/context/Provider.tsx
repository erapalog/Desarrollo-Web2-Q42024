'use client';
import React, { useContext, useState, useEffect } from 'react';
import { Content } from './Context';
import { configDotenv } from 'dotenv';
import { DataChartCount } from '../models/DataChartCount';

configDotenv();
const URL_API = process.env.NEXT_PUBLIC_URL_API;

if (!URL_API) {
  console.error('La variable NEXT_PUBLIC_URL_API no está definida en .env');
}

interface Props {
  children: React.ReactNode;
}

export default function AppProvider({ children }: Props) {
  const [dataCountCategoryCode, setDataCountCategoryCode] = useState<DataChartCount[]>([]);
  const [dataCountStatus, setDataCountStatus] = useState<DataChartCount[]>([]);
  const [dataCountPlannerCode, setDataCountPlannerCode] = useState<DataChartCount[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        await Promise.all([totalByPlannerCode(), totalByCategoryCode(), totalByStatus()]);
      } catch (error) {
        console.error("Error loading data", error);
      }
    };

    loadData();
  }, []);

  const totalByPlannerCode = async () => {
    const response = await fetch(`${URL_API}/totalByPlannerCode`);
    const data = await response.json();

    if (Array.isArray(data)) {
      setDataCountPlannerCode(data);
    } else {
      console.error('Response from /status is not valid');
    }
  };

  const totalByCategoryCode = async () => {
    const response = await fetch(`${URL_API}/totalByCategoryCode`);
    const data = await response.json();

    if (Array.isArray(data)) {
      setDataCountCategoryCode(data);
    } else {
      console.error('Response from /status is not valid');
    }
  };

  const totalByStatus = async () => {
    const response = await fetch(`${URL_API}/totalByStatus`);
    const data = await response.json();

    if (Array.isArray(data)) {
      console.info(data);
      setDataCountStatus(data);
    } else {
      console.error('Response from /status is not valid');
    }
  };

  const value = {
    dataCountStatus,
    dataCountCategoryCode,
    dataCountPlannerCode
  };

  return (
    <Content.Provider value={value}>
      {children}
    </Content.Provider>
  );
}

export const UseContext = () => {
  return useContext(Content);
};
