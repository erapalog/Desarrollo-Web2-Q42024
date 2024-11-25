"use client";
import { getAvgByLineCode } from "@/Services/Api";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function AvgByLineComponet() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: [""],
      },
    ],
  });

  useEffect(() => {
    getAvgByLineCode()
      .then((data) => {
        const lineCode = data.map((item: any) => item.lineCode);
        const avgValues = data.map((item: any) => item.valorPromedio);

        setChartData({
          labels: lineCode,
          datasets: [
            {
              label: "Valor Promedio por LineCode",
              data: avgValues,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
            },
          ],
        });
      })
      .catch((error) => console.log("ocurrio un problema ", error));
  }, []);
  return (
    <div>
      {chartData ? (
        <div>
          <h3>titulo del componente</h3>
          <Bar data={chartData}></Bar>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
