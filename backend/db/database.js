import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
dotenv.config();

const sequelize = new Sequelize({
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected');
  })
  .catch((err) => {
    console.log('Error', err);
  });

export default sequelize;
