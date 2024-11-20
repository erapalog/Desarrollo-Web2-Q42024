const express = require('express');
const Employees = require('./models/Employees')
const Products = require('./models/Products');
const sequelize= require('./config/db');

const app= express();
app.use(express.json());
var port = 5000;

// SELECT category_code, SUM(value) total FROM products GROUP BY category_code
app.get('/totalByCategoryCode', async(req,resp) =>{

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

app.listen(port, ()=>{
    console.log('Servicio ejecutandose en :' , port)
})