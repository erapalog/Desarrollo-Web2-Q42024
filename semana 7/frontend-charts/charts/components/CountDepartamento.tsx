'use client'
import { getCountDepartamento } from '@/service/Api';
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';

import { Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend,PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend,PointElement, LineElement);

export default function CountDepartamento() {

    const [chartData, setChartData] = useState({
        labels:[],
        datasets:[
            {
                label:'',
                data:[],
                fill: false,
                borderColor: '',
            }
        ]
      })
    
      useEffect(()=>{
        getCountDepartamento().then(data=>{
            const  labels = data.map((item:any) => item.JOB_ID);
            const total = data.map((item:any) => item.total_count);
            
            setChartData({
                labels:labels,
                datasets:[{
                    label: 'Tendencia de Despidos de empleados por area y departamento',
                    data:total,
                    fill:false,
                    borderColor:'rgb(75, 192, 192)'
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

                    <Line data={chartData}/>
                </div>
            ) :(
                <div> loading..</div>
            )
        }
    </div>
        
    </>
  )
}
