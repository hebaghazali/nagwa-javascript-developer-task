import { Dispatch } from 'react';
import axiosInstance from '../config/axiosConfig';

export const getRank = (score: number, setRank: Dispatch<number>) => {
  axiosInstance
    .post('/ranks', { score })
    .then(res => res.data)
    .then(setRank)
    .catch(err => console.log(err));
};

export const getAllRanks = (setRanks: Dispatch<number[]>) => {
  axiosInstance
    .get('/ranks')
    .then(res => res.data)
    .then(setRanks)
    .catch(err => console.log(err));
};
