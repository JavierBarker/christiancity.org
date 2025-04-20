import dotenv from 'dotenv';

const configEnv = dotenv.config();

export default {
    app: {
        name: process.env.APP_NAME || 'AppNode',
        port: process.env.APP_PORT || 3000
    },
    database: {
        pg: {
            DB_HOST: process.env.DB_HOST || '127.0.0.1',
            DB_DATABASE: process.env.DB_DATABASE || 'postgres',
            DB_PASSWORD: process.env.DB_PASSWORD || '123@',
            DB_USER: process.env.DB_USER || 'postgres',
            DB_PORT: process.env.DB_PORT || 5432
        }
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'AppNode'
    }
};