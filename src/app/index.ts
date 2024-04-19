import express from 'express';
import type { Request, Response, NextFunction } from 'express';

import router from '../routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

// global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err)
    res.status(500).send('Something broke!')
})
export default app;