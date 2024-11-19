const express = require('express')
const sequelize= require('./config/database')
const Empleado = require('./modelos/Empleado')

const app= express();
app.use(express.json())
var port = 5000;

//SELECT SUM(SALARY),DEPARTMENT_ID FROM EMPLEADO group by DEPARTMENT_ID;

app.get('/suma-salario-departamento', async(req,resp) =>{

    try {
        
        const result = await Empleado.findAll({
            attributes:[
                'DEPARTMENT_ID',
                [sequelize.fn('SUM', sequelize.col('SALARY')), 'Salario Total']
            ],
            group: ["DEPARTMENT_ID"]
        });

        resp.json(result)

    } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
    }

});


//select MAX(SALARY),DEPARTMENT_ID from empleado where DEPARTMENT_ID=50 group by DEPARTMENT_ID;

app.get('/maximo-salario-departamento/:idDeparment', async(req,resp) =>{

    const {idDeparment} = req.params;


    try {
        
        const result = await Empleado.findAll({
            attributes:[
                'DEPARTMENT_ID',
                [sequelize.fn('MAX', sequelize.col('SALARY')), 'Salario Total']
            ],
            where: {DEPARTMENT_ID:idDeparment },
            group: ["DEPARTMENT_ID"]
        });

        resp.json(result)

    } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
    }

});


app.listen(port, ()=>{
    console.log('aplicacion ejecutando en puerto:' , port)
})