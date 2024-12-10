import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('ceutec', 'root', 'Hon.2020', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate();
export { sequelize };