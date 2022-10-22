import { Request, Response } from 'express';
import getRandomWords from '../utils/getRandomWords';

const getWords = (req: Request, res: Response): void => {
  const randomWords = getRandomWords();

  res.status(200).json(randomWords);
};

export default getWords;
