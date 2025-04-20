import express, {Request, Response} from 'express';

const routeV1 = express.Router();

routeV1.get('/', (req: Request, res: Response) => {
    console.log('hola');
    res.json({
        message: 'Hello world'
    });
})

export default routeV1;