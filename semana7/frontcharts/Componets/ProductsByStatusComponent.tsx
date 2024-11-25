'use client'
import { getProductosDisponiblesPorStatus, getTotalValueByProductType } from '@/Services/Api';
import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from "chart.js";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );

export default function ProductsByStatusComponent() {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
          {
            label: "",
            data: [],
            backgroundColor: [""],
            hoverOffset: 4,
          },
        ],
      });
    
      useEffect(() => {
        getProductosDisponiblesPorStatus()
          .then((data) => {
            const status = data.map((item: any) => item.status);
            const NroProductos = data.map((item: any) => item.NroProductos);
    
            setChartData({
              labels: status,
              datasets: [
                {
                  label: "Productos Disponibles Por Estatus",
                  data: NroProductos,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  hoverOffset: 4,
                },
              ],
            });
          })
          .catch((error) => console.log("Tenemos un error: ", error));
      }, []);
    return (
    <div>
       {chartData ? (
        <div>
          <h3>titulo del Componente</h3>
          <Doughnut data={chartData}></Doughnut>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
