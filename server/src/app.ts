import express, { Request, Response, Application, NextFunction } from 'express';
import cors from 'cors';
import AppError from './appError';
import getWords from './controllers/wordsController';
import { getAllRanks, setRank } from './controllers/rankController';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.route('/words').get(getWords);
app.route('/ranks').get(getAllRanks).post(setRank);

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`There is no ${req.originalUrl} on this server`, 404));
});

export default app;
