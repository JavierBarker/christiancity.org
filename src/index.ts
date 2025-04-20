import express from "express";
import config from "./config/dotenv/config";
import server from './config/server/server';
import { validateConnection } from "./config/databases/postgres";


async function start(){
    const app = express();
    await server(app);
    await validateConnection();

    app.listen(config.app.port, () => {
        console.debug(`[server]: Server is running at ${config.app.port}`);
    }).on('error', (err) => {
        console.error(err);
    })
}

start();