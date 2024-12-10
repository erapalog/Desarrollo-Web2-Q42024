import express from 'express';
import cors from 'cors';
import Products from './models/Products.js';
import { sequelize } from './config/db.js';

const app= express();

app.use(cors());
app.use(express.json());
var port = 5000;

// SELECT category_code, SUM(value) total FROM products GROUP BY category_code
app.get('/totalByCategoryCode1', async(req,resp) =>{

    try {
        const result = await Products.findAll({
            attributes:[
                'category_code',
                [sequelize.fn('SUM', sequelize.col('value')), 'Total']
            ],
            group: ["category_code"]
        });

        resp.json(result);
    } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error});
    }
});


//  SELECT status, SUM(value) total FROM products GROUP BY status
app.get('/totalByStatus', async(req,resp) =>{

    try {
        const result = await Products.findAll({
            attributes:[
                'status',
                [sequelize.fn('SUM', sequelize.col('value')), 'Total']
            ],
            group: ["status"]
        });

        resp.json(result);
    } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error});
    }
});

//  SELECT plannercode, SUM(value) total FROM products GROUP BY plannercode
app.get('/totalByPlannerCode', async(req,resp) =>{

    try {
        const result = await Products.findAll({
            attributes:[
                'plannercode',
                [sequelize.fn('SUM', sequelize.col('value')), 'Total']
            ],
            group: ["plannercode"]
        });

        resp.json(result);
    } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error});
    }
});

/* Examen */
/* 1. Representar a través de un gráfico Lineal (Line Chart) el valor promedio de productos por categoria */
app.get('/promByCategoryCode', async(req,resp) =>{
    try {
        const result = await Products.findAll({
            attributes:[
                'category_code',
                [sequelize.fn('AVG', sequelize.col('value')), 'promedio']
            ],
            group: ["category_code"]
        });

        resp.json(result);
    } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error});
    }
});

/* 2. Representar a través de un gráfico de Pie Chart la cantidad de productos por marca */
app.get('/totalByBrandCode', async(req,resp) =>{
    try {
        const result = await Products.findAll({
            attributes:[
                'brand_code',
                [sequelize.fn('SUM', sequelize.col('value')), 'total']
            ],
            group: ["brand_code"]
        });

        resp.json(result);
    } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error});
    }
});

/* 3. Representar a través de un gráfico de Dona (Doughnut Chart) el valor total por categoria */
app.get('/totalByCategoryCode', async(req,resp) =>{
    try {
        const result = await Products.findAll({
            attributes:[
                'category_code',
                [sequelize.fn('SUM', sequelize.col('value')), 'total']
            ],
            group: ["category_code"]
        });

        resp.json(result);
    } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error});
    }
});

app.listen(port, ()=>{
    console.log('Servicio ejecutandose en :' , port)
})