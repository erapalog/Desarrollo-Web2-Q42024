'use client';
import React, { useEffect, useState } from 'react';
import style from '../styles/styles.module.css';
import { UseContext } from '../context/Provider';
import ChartComponent from '../components/Charts';

export default function Page() {
    const { dataCountStatus, dataCountCategoryCode, dataCountPlannerCode } = UseContext();

    const categoryLabels = dataCountCategoryCode.map((item: any) => item.category_code);
    const categoryTotal = dataCountCategoryCode.map((item: any) => item.Total);

    const databar = {
        labels: categoryLabels,
        datasets: [
            {
                label: 'Cantidad',
                data: categoryTotal,
                borderColor: 'rgba(255, 205, 86, 0.2)',
                backgroundColor: 'rgb(255, 205, 86)',
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
                text: 'Inventario Categoría',
            },
            datalabels: {
                display: false,
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

    const PlannerCode = dataCountPlannerCode.map((item: any) => item.plannercode);
    const PlannerTotal = dataCountPlannerCode.map((item: any) => item.Total);

    const dataBarLines = {
        labels: PlannerCode,
        datasets: [
            {
                label: 'Cantidad',
                data: PlannerTotal,
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
                text: 'Cantidad disponibles Planner Code',
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

    const Statuslabels = dataCountStatus.map((item: any) => item.status);
    const Statustotal = dataCountStatus.map((item: any) => item.Total);

    const dataDou = {
        labels: Statuslabels,
        datasets: [
            {
                label: 'Dataset 1',
                data: Statustotal,
                backgroundColor: ['#4bc0c0', '#ff6384']
            }
        ]
    };

    const charDouOptiones = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: 'Cantidad por Estado',
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
    };

    const dataPolar = {
        labels: PlannerCode,
        datasets: [
            {
                label: 'Cantidad',
                data: PlannerTotal,
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
                borderWidth:2,
            },
        ],
    };

    const charPolarOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: 'Inventario de Planner Code',
            },
            datalabels: {
                display: false,
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
    };

    return (
        <div className={`${style.container}`} style={{ marginLeft: 360, marginRight: 260, marginTop: 60 }}>
            <div className={`${style.box}`}>
                <ChartComponent type="bar" data={databar} options={charBarOptions} />
            </div>
            <div className={`${style.box}`}>
                <ChartComponent type="bar" data={dataBarLines} options={charBaLinesOptions} />
            </div>
            <div className={`${style.box}`}>
                <ChartComponent type="doughnut" data={dataDou} options={charDouOptiones} />
            </div>
            <div className={`${style.box}`}>
                <ChartComponent type="polar" data={dataPolar} options={charPolarOptions} />
            </div>

        </div>
    );
}
