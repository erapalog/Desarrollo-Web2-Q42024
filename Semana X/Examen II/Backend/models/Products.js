import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Products = sequelize.define('products', {
    PART_NUMBER: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    PRODUCT_TYPE: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    CATEGORY_CODE: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    BRAND_CODE: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    FAMILY_CODE: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    LINE_CODE: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    PRODUCT_SEGMENT_CODE: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    STATUS: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    VALUE: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    VALUE_CURRENCY: {
        type: DataTypes.STRING(10),
        allowNull: true,
    },
    DEFAULT_QUANTITYUNITS: {
        type: DataTypes.STRING(10),
        allowNull: true,
    },
    NAME: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    DESCRIPTION: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    PLANNER_CODE: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    SOURCE_LINK: {
        type: DataTypes.STRING(255),
        allowNull: true,
    }
}, {
    tableName: 'products',
    timestamps: false
});

export default Products;