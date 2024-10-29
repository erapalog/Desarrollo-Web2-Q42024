const {  DataTypes } = require('sequelize')
const sequelize  =require('../db/connection');

const Contacto = sequelize.define('contacto', {

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type:DataTypes.STRING,
        allowNull: false
    },
    correo:{
        type:DataTypes.STRING,
        allowNull: false
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull: false
    },
    
       
},
{
    tableName:'contacto',
    timestamps: false,
}

);

module.exports= Contacto
