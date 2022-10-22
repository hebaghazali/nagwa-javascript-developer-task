import { Dispatch } from 'react';
import axiosInstance from '../config/axiosConfig';
import IWord from '../interfaces/word';

export const getWords = (setWords: Dispatch<IWord[]>) => {
  axiosInstance
    .get('/words')
    .then(res => res.data)
    .then(setWords)
    .catch(err => console.log(err));
};
