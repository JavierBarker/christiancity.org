import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import routeV1 from '../../routes/v1';


export default (app: express.Application) => {
    //CONFIGURACION DE MIDDLEWARES
    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(morgan('dev'));

    //ROUTES
    app.use('/api', routeV1);

    //ERRORS HANDLERS 
}