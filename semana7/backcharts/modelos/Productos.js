const { DataTypes } = require('sequelize')
const sequilize = require('../config/database')

const Producto = sequilize.define('producto',{
    partNumber:{
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    productType:{
        type: DataTypes.STRING,
    },
    categoryCode:{
        type: DataTypes.STRING,
    },
    brandCode:{
        type: DataTypes.STRING,
    },
    familyCode:{
        type: DataTypes.STRING,
    },
    lineCode:{
        type: DataTypes.STRING,
    },
    productSegmentCode:{
        type: DataTypes.STRING,
    },
    status:{
        type: DataTypes.STRING,
    },
    value:{
        type: DataTypes.STRING,
    },
    valueCurrency:{
        type: DataTypes.STRING,
    },
    defaultQuantityUnits:{
        type: DataTypes.STRING,
    },
    name:{
        type: DataTypes.STRING,
    },
    description:{
        type: DataTypes.STRING,
    },
    plannerCode:{
        type: DataTypes.STRING,
    },
    sourceLink:{
        type: DataTypes.STRING,
    }
},
{
    tableName:'producto',
    timestamps: false,
})

module.exports = Producto