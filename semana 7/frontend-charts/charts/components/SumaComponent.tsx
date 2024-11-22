'use client'

import { getSumaSalario } from '@/service/Api';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


export default function SumaComponent() {

  const [chartData, setChartData] = useState({
    labels:[],
    datasets:[
        {
            label:'',
            data:[],
            backgroundColor:[] as string[]
        }
    ]
  })

  useEffect(()=>{
    getSumaSalario().then(data=>{
        const  salarios = data.map((item:any) => item.DEPARTMENT_ID);
        const departamentos= data.map((item:any) => item.Salario_Total);
        
        setChartData({
            labels:departamentos,
            datasets:[{
                label: 'Suma de salario por departamento',
                data:salarios,
                backgroundColor:['rgb(255, 99, 132)','rgb(254, 93, 132)' ]
            }
            ]
        })

    })
    .catch((error)=>{console.log('ocurrio un error',error)})
  },[]);

  return (
    <>

    <div>
        {
            chartData ? (
                <div>
                    <h3>Titulo del componente</h3>

                    <Bar data={chartData}></Bar>
                </div>
            ) :(
                <div> loading..</div>
            )
        }
    </div>
        
    </>
  )
}
