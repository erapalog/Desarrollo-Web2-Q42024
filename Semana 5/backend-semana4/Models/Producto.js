const {  DataTypes } = require('sequelize')
const sequelize  =require('../db/connection');

const Producto = sequelize.define('Producto', {

    IdProducto:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NombreProducto : {
        type:DataTypes.STRING,
        allowNull: false
    },
    PrecioProducto:{
        type:DataTypes.DECIMAL,
        allowNull: false
    },
    IsvProducto :{
        type:DataTypes.DECIMAL,
        allowNull: false
    },
    imagenProducto :{
        type:DataTypes.STRING,
        allowNull: false
    },
    
       
},
{
    tableName:'Producto',
    timestamps: false,
}

);

module.exports= Producto
