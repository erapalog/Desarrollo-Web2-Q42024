const {Sequelize} = require('sequelize')


const sequelize = new Sequelize('empleados', 'root', 'MySecretPassword', {
    host: 'localhost',
    dialect: 'mysql',

})

module.exports = sequelize