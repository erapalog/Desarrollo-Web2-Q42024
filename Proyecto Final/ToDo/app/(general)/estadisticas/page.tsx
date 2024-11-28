'use client';
import React, { useEffect, useState } from 'react';
import ChartComponent from '../../components/Charts';
import style from '../../styles/styles.module.css';
import { UseContext } from '../../context/Provider';

export default function Page() {
    const { dataCountStatus, dataCountCategory, dataCountPriority, dataCountTask } = UseContext();
    
    const Statuslabels = dataCountStatus.map((item: any) => item.estado);
    const Statustotal = dataCountStatus.map((item: any) => item.cantidad);
    const StatusColor = dataCountStatus.map((item: any) => item.color);

    const databar = {
        labels: Statuslabels,
        datasets: [
            {
                label: 'Cantidad',
                data: Statustotal,
                borderColor: StatusColor,
                backgroundColor: StatusColor,
                borderWidth: 2,
            },
        ],
    };

    const charBarOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Cantidad de Tareas por Estado',
            },
            datalabels: {
                display: true,
                color: 'black',
                font: {
                    weight: 'none',
                    size: 14,
                },
                anchor: 'center',
                align: 'center',
                offset: 0,
                backgroundColor: 'white',
                padding: 4,
                borderRadius: 4,
                borderColor: 'black',
                borderWidth: 1,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
            },
        },
    };

    const Prioritylabels = dataCountPriority.map((item: any) => item.estado);
    const Prioritytotal = dataCountPriority.map((item: any) => item.cantidad);
    const PriorityColor = dataCountPriority.map((item: any) => item.color);

    const dataPie = {
        labels: Prioritylabels,
        datasets: [
            {
                label: 'Cantidad',
                data: Prioritytotal,
                backgroundColor: PriorityColor,
            },
        ],
    };

    const charPieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            title: {
                display: true,
                text: 'Distribución de Prioridades',
            },
            datalabels: {
                display: true,
                color: 'black',
                font: {
                    weight: 'none',
                    size: 19,
                },
                anchor: 'center',
                align: 'center',
                offset: 0,
                backgroundColor: 'white',
                padding: 4,
                borderRadius: 4,
                borderColor: 'black',
                borderWidth: 1,
                formatter: (value) => {
                    return `${value}%`;
                },
            },
        },
    };

    const Categorylabels = dataCountCategory.map((item: any) => item.estado);
    const Categorytotal = dataCountCategory.map((item: any) => item.cantidad);

    const dataBarLines = {
        labels: Categorylabels,
        datasets: [
            {
                label: 'Ventas',
                data: Categorytotal,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const charBaLinesOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Cantidad de Tareas por Categoría',
            },
            datalabels: {
                display: true,
                color: 'black',
                font: {
                    weight: 'none',
                    size: 14,
                },
                anchor: 'center',
                align: 'center',
                offset: 0,
                backgroundColor: 'white',
                padding: 4,
                borderRadius: 4,
                borderColor: 'black',
                borderWidth: 1,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
            },
        },
    };

    const Tasklabels = dataCountTask.map((item: any) => item.mesNombre);
    const Tasktotal = dataCountTask.map((item: any) => item.cantidad);
    const TaskNumber = dataCountTask.map((item: any) => item.mesNumero);

    const dataLine = {
        labels: Tasklabels,
        datasets: [
          {
            label: 'Tareas',
            data: Tasktotal,
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            tension: 0.1
          }
        ]
      };

      const charLineOptions = {
        type: 'line',
        maintainAspectRatio: false,
        data: Tasktotal,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Serie de tiempo de tareas creadas',
            },
            datalabels: {
                display: true,
                color: 'black',
                font: {
                    weight: 'none',
                    size: 11,
                },
                anchor: 'center',
                align: 'center',
                offset: 0,
                backgroundColor: 'white',
                padding: 4,
                borderRadius: 4,
                borderColor: 'black',
                borderWidth: 1,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
            },
        },
      };

    return (
        <div className={`${style.container}`} style={{ marginLeft: 360, marginRight: 260, marginTop: 70 }}>
            <div className={`${style.box}`}>
                <ChartComponent type="bar" data={databar} options={charBarOptions} />
            </div>
            <div className={`${style.box}`}>
                <ChartComponent type="bar" data={dataBarLines} options={charBaLinesOptions} />
            </div>
            <div className={`${style.box}`}>
                <ChartComponent type="pie" data={dataPie} options={charPieOptions} />
            </div>
            <div className={`${style.box}`}>
                <ChartComponent type="line" data={dataLine} options={charLineOptions} />
            </div>
        </div>
    );
}
