const {  DataTypes } = require('sequelize')
const sequelize  =require('../db/connection');

const Venta = sequelize.define('Venta', {

    IdVenta :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    IdProducto  : {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    TotalVenta :{
        type:DataTypes.DECIMAL,
        allowNull: false
    },
    FechaVenta  :{
        type:DataTypes.DATE,
        allowNull: false
    }
    
       
},
{
    tableName:'Venta',
    timestamps: false,
}

);

module.exports= Venta
