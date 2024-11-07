const express = require('express')
const Producto= require('./Models/Producto')
const Ventas= require('./Models/Venta')
var cors = require('cors')

const app= express()

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors())
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






app.listen(5000,()=>{
    console.log('aplcacion ejecutando en puerto 5000')
})