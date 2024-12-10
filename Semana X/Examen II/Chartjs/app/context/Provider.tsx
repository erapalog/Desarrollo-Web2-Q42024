'use client';
import React, { useContext, useState, useEffect } from 'react';
import { Content } from './Context';
import { configDotenv } from 'dotenv';
import { DataEjercicio1, DataEjercicio2, DataEjercicio3 } from '../models/DataChartCount';

configDotenv();
const URL_API = process.env.NEXT_PUBLIC_URL_API;

if (!URL_API) {
  console.error('La variable NEXT_PUBLIC_URL_API no está definida en .env');
}

interface Props {
  children: React.ReactNode;
}

export default function AppProvider({ children }: Props) {
  const [ejercicio1, setEjercicio1] = useState<DataEjercicio1[]>([]);
  const [ejercicio2, setEjercicio2] = useState<DataEjercicio2[]>([]);
  const [ejercicio3, setEjercicio3] = useState<DataEjercicio3[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        await Promise.all([promByCategoryCode(), totalByBrandCode(), totalByCategoryCode()]);
      } catch (error) {
        console.error("Error loading data", error);
      }
    };

    loadData();
  }, []);

  const promByCategoryCode = async () => {
    const response = await fetch(`${URL_API}/promByCategoryCode`);
    const data = await response.json();
    
    if (Array.isArray(data)) {
      setEjercicio1(data);
    } else {
      console.error('Response from /status is not valid');
    }
  };

  const totalByBrandCode = async () => {
    const response = await fetch(`${URL_API}/totalByBrandCode`);
    const data = await response.json();

    if (Array.isArray(data)) {
      setEjercicio2(data);
    } else {
      console.error('Response from /status is not valid');
    }
  };

  const totalByCategoryCode = async () => {
    const response = await fetch(`${URL_API}/totalByCategoryCode`);
    const data = await response.json();

    if (Array.isArray(data)) {
      setEjercicio3(data);
    } else {
      console.error('Response from /status is not valid');
    }
  }

  const value = {
    ejercicio1,
    ejercicio2,
    ejercicio3
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
