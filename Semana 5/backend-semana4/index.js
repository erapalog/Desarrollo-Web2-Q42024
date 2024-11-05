const express = require('express')
const Producto= require('./Models/Producto')
const Ventas= require('./Models/Venta')

const app= express()

app.use(express.json())

//get permitir consultar todos los contactos

app.get('/productos', async (req,res) =>{

    try {
        
        //select *from contacto
        const contacto = await Producto.findAll();

        res.status(200).json(contacto);

    } catch (error) {
        res.status(500).json({error: 'Ocurrio un error'});
    }
})


app.post('/ventas', async (req,res) =>{

    try {
        

        console.log(req.body)
        const ventas = await Ventas.create(req.body)
        

        res.status(200).json(ventas);

    } catch (error) {
        res.status(500).json({error: 'Ocurrio un error' + error});
    }
})






app.listen(5001,()=>{
    console.log('aplcacion ejecutando en puerto 5001')
})