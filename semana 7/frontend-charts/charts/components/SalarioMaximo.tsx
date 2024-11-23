'use client'
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,ArcElement } from 'chart.js';
import { getDeptos, getSalarioMaximo } from '@/service/Api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,ArcElement);


export default function SalarioMaximo() {

    const [departmentId,setDepartmentId]= useState(50);
    const [options, setOptions] = useState([]);


    const [chartData, setChartData] = useState({
        labels: [] as string[], // Array de etiquetas
        datasets: [
            {
                data: [] as any, // Datos del gráfico
                backgroundColor: [] as any, // Colores opcionales
            },
        ],
    });

    function CargarDeptos(){
        getDeptos().then(data => {
            setOptions(data)
         
        });
    }

    useEffect(() => {
        getSalarioMaximo(departmentId).then(data => {
            const maxSalary = parseFloat(data[0]?.Salario_Total || 0);

            setChartData({
                labels: ['Max Salary', 'Remaining'],
                datasets: [
                    {
                        data: [maxSalary, 100000 - maxSalary], // Ajustar valor total
                        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
                    },
                ],
            });
        });
    }, [departmentId]);

    useEffect(()=>{
        CargarDeptos()
    },[])


    const handleChange = (event:any) => {
        setDepartmentId(event.target.value);
        console.log("Seleccionado:", event.target.value);
      };

  return (
    <div className='container'>
        <label htmlFor="comboBox">Selecciona una opción:</label>
      <select
        id="comboBox"
        value={departmentId}
        onChange={handleChange}
        className='form-control'
      >
        <option value="" disabled>
          -- Selecciona --
        </option>
        {options.map((option:any) => (
          <option key={option.DEPARTMENT_ID} value={option.DEPARTMENT_ID}>
            {option.DEPARTMENT_ID}
          </option>
        ))}
      </select>
   

        {
            
            chartData ? (
                <div style={{"height":'400px'}}>
                    <h3>Max Salary in Department {departmentId}</h3>
                    <Pie data={chartData} />
                </div>
            ) : (
                <p>Loading...</p>
            )
        }
    </div>
  )
}
