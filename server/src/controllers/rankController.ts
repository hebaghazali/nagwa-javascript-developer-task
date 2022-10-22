import { Request, Response } from 'express';
import data from '../data/getData';
import calculateRank from '../utils/calculateRank';

export const getAllRanks = (req: Request, res: Response) => {
  const scores: number[] = data.scoresList;

  const ranks: number[] = [];
  const uniqueRanks = new Set(); // a set is used to avoid duplicates

  // loop through each score to calculate its rank
  for (const score of scores) {
    const rank = calculateRank(score);

    // if ranks already exists, don't do anything, if it does, add it to both the set and the array
    if (!uniqueRanks.has(rank)) {
      uniqueRanks.add(rank);
      ranks.push(Number(rank.toFixed(2)));
    }
  }

  const sortedRanks = [...ranks].sort((x, y) => x - y).reverse(); // sort ranks and reverse it to use it descendingly
  res.status(200).json(sortedRanks);
};

export const setRank = (req: Request, res: Response) => {
  const { score } = req.body;

  const rank = calculateRank(score);

  // send back calculated rank
  res.status(200).json(rank);
};
