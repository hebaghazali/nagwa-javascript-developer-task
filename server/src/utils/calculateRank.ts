import data from '../data/getData';

export default (score: number) => {
  const scores: number[] = data.scoresList;

  let rank: number = 0;

  // loop through scores and each score is called 's', if 's' is less than the score we got from client side, increase rank
  for (const s of scores) {
    if (s < score) rank += 100 / scores.length;
  }

  return Number(rank.toFixed(2));
};
