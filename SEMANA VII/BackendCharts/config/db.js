const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ceutec', 'ssi', 'Hon.2020', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate();
module.exports = sequelize;