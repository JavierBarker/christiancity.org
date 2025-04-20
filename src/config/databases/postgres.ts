import { Sequelize } from 'sequelize';
import config from '../dotenv/config';

export const connection = new Sequelize(
  config.database.pg.DB_DATABASE,
  config.database.pg.DB_USER,
  config.database.pg.DB_PASSWORD,
  {
    host: config.database.pg.DB_HOST,
    dialect: 'postgres', // o 'postgres', 'sqlite', etc.
  }
);

export const validateConnection = async () => {
  try {
    await connection.authenticate();
    console.log('🟢 Established database connection');
  } catch (error) {
    console.error('🔴 Error connecting to database:', error);
    process.exit(1);
  }
};
