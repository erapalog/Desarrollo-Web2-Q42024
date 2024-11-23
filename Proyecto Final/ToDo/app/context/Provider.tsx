'use client';
import React, { useContext, useState, useEffect } from 'react';
import { Content } from './Context';
import { configDotenv } from 'dotenv';
import { Task } from '../models/Task';
import { Status } from '../models/Status';
import { Category } from '../models/Category';
import { Priority } from '../models/Priority';
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
  const [listTask, setLlistTask] = useState<Task[]>([]);
  const [listStatus, setLlistStatus] = useState<Status[]>([]);
  const [listPriority, setListPriority] = useState<Priority[]>([]);
  const [listCategory, setListCategory] = useState<Category[]>([]);
  const [dataCountStatus, setDataCountStatus] = useState<DataChartCount[]>([]);
  const [dataCountCategory, setDataCountCategory] = useState<DataChartCount[]>([]);
  const [dataCountPriority, setDataCountPriority] = useState<DataChartCount[]>([]);
  const [dataCountTask, setDataCountTask] = useState<DataChartCount[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        await Promise.all([loadStatus(), loadStatusCount(), loadCategory(), loadCategoryCount(), loadPriority(), loadPriorityCount(), loadTask(), loadTaskTotal()]);
      } catch (error) {
        console.error("Error loading data", error);
      }
    };

    loadData();
  }, []);

  const loadTaskTotal = async () => {
    const response = await fetch(`${URL_API}/taskTotal`);
    const data = await response.json();

    if (Array.isArray(data)) {
      setDataCountTask(data);
    } else {
      console.error('Response from /status is not valid');
    }
  };

  const loadStatus = async () => {
    const response = await fetch(`${URL_API}/status`);
    const data = await response.json();

    if (Array.isArray(data)) {
      setLlistStatus(data);
    } else {
      console.error('Response from /status is not valid');
    }
  };

  const loadStatusCount = async () => {
    const response = await fetch(`${URL_API}/statusTotal`);
    const data = await response.json();

    if (Array.isArray(data)) {
      setDataCountStatus(data);
    } else {
      console.error('Response from /status is not valid');
    }
  };

  const loadTask = async () => {
    const response = await fetch(`${URL_API}/-1/2`);
    const data = await response.json();

    if (Array.isArray(data)) {
      setLlistTask(data);
    } else {
      console.error('Response from /-1/2 is not valid');
    }
  };

  const loadCategory = async () => {
    const response = await fetch(`${URL_API}/categoria`);
    const data = await response.json();

    if (Array.isArray(data)) {
      setListCategory(data);
    } else {
      console.error('Response from /categoria is not valid');
    }
  };

  const loadCategoryCount = async () => {
    const response = await fetch(`${URL_API}/categoriaTotal`);
    const data = await response.json();

    if (Array.isArray(data)) {
      setDataCountCategory(data);
    } else {
      console.error('Response from /status is not valid');
    }
  };

  const loadPriority = async () => {
    const response = await fetch(`${URL_API}/prioridad`);
    const data = await response.json();

    if (Array.isArray(data)) {
      setListPriority(data);
    } else {
      console.error('Response from /prioridad is not valid');
    }
  };

  const loadPriorityCount = async () => {
    const response = await fetch(`${URL_API}/prioridadTotal`);
    const data = await response.json();

    if (Array.isArray(data)) {
      setDataCountPriority(data);
    } else {
      console.error('Response from /status is not valid');
    }
  };

  const randomColor = (): string => {
    const classes = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6', 'color7', 'color8', 'color9', 'color10'];
    const randomIndex = Math.floor(Math.random() * classes.length);
    return classes[randomIndex];
  };

  const value = {
    listTask,
    dataCountTask,
    randomColor,
    listStatus,
    dataCountStatus,
    listPriority,
    dataCountPriority,
    listCategory,
    dataCountCategory,
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
