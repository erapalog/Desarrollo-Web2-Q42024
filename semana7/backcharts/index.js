const express = require('express')
const Producto = require('./modelos/Productos')
const sequelize = require('./config/database')

const app = express()

app.use(express.json())

app.get('/valorTotalxProducType', async (req,res)=>{
    try {
        const producto = await Producto.findAll({
            attributes:[
                "productType",
                [sequelize.fn("sum", sequelize.col("value")), "valorTotal"]
            ],
            group: ["productType"]
        });
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({error: 'ocurrio un error'})
    }
})

app.get('/promedioxLinecode', async (req,res)=>{
    try {
        const producto = await Producto.findAll({
            attributes:[
                "lineCode",
                [sequelize.fn("avg", sequelize.col("value")), "valorPromedio"]
            ],
            group: ["lineCode"]
        });
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({error: 'ocurrio un error'})
    }
})

app.get('/productosDisponiblesPorEstatus', async (req,res)=>{
    try {
        const producto = await Producto.findAll({
            attributes:[
                "status",
                [sequelize.fn("count", sequelize.col("status")), "NroProductos"]
            ],
            group: ["status"]
        });
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({error: 'ocurrio un error'})
    }
})

app.listen(5000,()=>{
    console.log('Servidor en el puerto 5000')
})