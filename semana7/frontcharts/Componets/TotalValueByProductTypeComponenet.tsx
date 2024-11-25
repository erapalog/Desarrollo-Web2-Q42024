"use client";
import { getTotalValueByProductType } from "@/Services/Api";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
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

export default function TotalValueByProductTypeComponenet() {
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
    getTotalValueByProductType()
      .then((data) => {
        const productType = data.map((item: any) => item.productType);
        const valorTotal = data.map((item: any) => item.valorTotal);

        setChartData({
          labels: productType,
          datasets: [
            {
              label: "Valor total por Product Type",
              data: valorTotal,
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
          <Pie data={chartData}></Pie>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
