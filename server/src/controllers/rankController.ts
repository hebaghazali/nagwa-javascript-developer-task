import { Request, Response } from 'express';
import data from '../data/getData';
import calculateRank from '../utils/calculateRank';

export const getAllRanks = (req: Request, res: Response) => {
  const scores: number[] = data.scoresList;
  const uniqueRanks = new Set();

  const ranks: number[] = [];

  for (const score of scores) {
    const rank = calculateRank(score);

    if (!uniqueRanks.has(rank)) {
      uniqueRanks.add(rank);
      ranks.push(Number(rank.toFixed(2)));
    }
  }

  const sortedRanks = [...ranks].sort((x, y) => x - y).reverse();
  res.status(200).json(sortedRanks);
};

export const setRank = (req: Request, res: Response) => {
  const { score } = req.body;

  const rank = calculateRank(score);

  res.status(200).json(rank);
};
