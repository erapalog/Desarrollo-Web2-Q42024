'use client';
import React, { useEffect, useState } from 'react';
import style from '../styles/styles.module.css';
import { UseContext } from '../context/Provider';
import ChartComponent from '../components/Charts';

export default function Page() {
    const { ejercicio1, ejercicio2, ejercicio3 } = UseContext();

    const lineCatLabels = ejercicio1.map((item: any) => item.category_code);
    const lineValues = ejercicio1.map((item: any) => item.promedio);

    const dataBarLines = {
        labels: lineCatLabels,
        datasets: [
            {
                label: 'Cantidad',
                data: lineValues,
                borderColor: '#ff6384',
                backgroundColor: '#ffb1c1',
                borderWidth: 2,
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
                text: 'Valor Promedio por Categoría',
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

    const pieCatLabels = ejercicio2.map((item: any) => item.brand_code	);
    const pieValues = ejercicio2.map((item: any) => item.total);

    const dataPie = {
        labels: pieCatLabels,
        datasets: [
            {
                label: 'Cantidad',
                data: pieValues,
                backgroundColor: ['#ff6384','#4bc0c0','#36a2eb'],
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
                text: 'Cantidad de Productos por Marca',
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
            },
        },
    };

    const douCatLabels = ejercicio3.map((item: any) => item.category_code);
    const dueValues = ejercicio3.map((item: any) => item.total);

    const dataDou = {
        labels: douCatLabels,
        datasets: [
            {
                label: 'Dataset 1',
                data: dueValues,
                backgroundColor: ['#4bc0c0', '#ff6384', '#F6CECE', '#F3F781','#81DAF5','#F781F3','#04B4AE','#298A08','#DF0101','#0040FF','#FF00FF','#BDBDBD','#FE9A2E', '#D7DF01','#FF0000','#F8E0F1','#0000FF','#F7F2E0']
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
                text: 'Valor por categoria',
            },
            datalabels: {
                display: false,
                color: 'black',
                font: {
                    weight: 'none',
                    size: 12,
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
                <ChartComponent type="line" data={dataBarLines} options={charBaLinesOptions} />
            </div>
            <div className={`${style.box}`}>
                <ChartComponent type="pie" data={dataPie} options={charPieOptions} />
            </div>
            <div className={`${style.box}`}>
                <ChartComponent type="doughnut" data={dataDou} options={charDouOptiones} />
            </div>
            <div className={`${style.box}`}>
                <ChartComponent type="bar" data={dataDou} options={charDouOptiones} />
            </div>

        </div>
    );
}
