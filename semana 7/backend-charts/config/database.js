const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('empleados','root','admin123',{
    host:'localhost',
    dialect:'mysql'
})

module.exports=sequelize;