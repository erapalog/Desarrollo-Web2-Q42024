const express = require('express')
const Contacto= require('./Modelos/Contacto')
const { where } = require('sequelize')

const app= express()

app.use(express.json())

//get permitir consultar todos los contactos

app.get('/contacto', async (req,res) =>{

    try {
        
        //select *from contacto
        const contacto = await Contacto.findAll();

        res.status(200).json(contacto);

    } catch (error) {
        res.status(500).json({error: 'Ocurrio un error'});
    }
})


//get,post, put, delete, patch
app.post('/contacto', async (req,res) =>{

    try {
        
        //insercion del regisntro insert into contacto values(nombre, correo, descripcion)

        console.log(req.body)
        const contacto = await Contacto.create(req.body)
        

        res.status(200).json(contacto);

    } catch (error) {
        res.status(500).json({error: 'Ocurrio un error' + error});
    }
})

app.put('/contacto/:id', async (req,res) =>{

    try {
        

        //const contacto = await Contacto.findByPk();
        const [updated] = await Contacto.update(req.body,{
            where: {id: req.params.id}
        })

        if(updated){
            res.status(200).json({'mesnaje': 'Actualizado correctamente'});
        }
        else{
            res.status(400).json({'mesnaje': 'No se actualizo'});
        }
       

    } catch (error) {
        res.status(500).json({error: 'Ocurrio un error' + error});
    }
})

app.listen(5000,()=>{
    console.log('aplcacion ejecutando en puerto 5000')
})