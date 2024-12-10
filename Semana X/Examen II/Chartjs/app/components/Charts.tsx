"use client";
import { Line, Bar, Pie, Radar, Doughnut, Bubble, PolarArea } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, CategoryScale, LinearScale, RadialLinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  ChartDataLabels
);

const Charts = ({ type, data, options }) => {
  switch (type) {
    case 'bar':
      return <Bar data={data} options={options} />;
    case 'line':
      return <Line data={data} options={options} />;
    case 'pie':
      return <Pie data={data} options={options} />;
    case 'radar':
      return <Radar data={data} options={options} />;
    case 'doughnut':
      return <Doughnut data={data} options={options} />;
    case 'polar':
      return <PolarArea data={data} options={options} />;
    default:
      return null;
  }
};

export default Charts;