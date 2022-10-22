import data from '../data/getData';
import IWord from './../interfaces/iword';

const getRandomIndices = (): number[] => {
  // Declare an array and a set of 10 numbers for random numbers between 0 and 14
  // for example: [8, 7, 14, 1, 15, 10, 9, 11, 6, 3]
  // each number represents the index of each word in the JSON file

  const randomIndices: number[] = [];
  const uniqueIndices: Set<number> = new Set();

  while (randomIndices.length < 10) {
    // generate a random number between 0 and 14
    const randNum = Math.floor(Math.random() * data.wordList.length);

    // if the Set doesn't have that number, add it to both the Set and the Array
    // this Set is used to avoid repeating the index, therefore the word
    if (!uniqueIndices.has(randNum)) {
      uniqueIndices.add(randNum);
      randomIndices.push(randNum);
    }
  }

  return randomIndices;
};

const getRandomObjects = (): IWord[] => {
  const randomIndices = getRandomIndices();

  // Declare a new set to determine whether the part of speech is used or not
  const partOfSpeech = new Set(['adverb', 'noun', 'adjective', 'verb']);

  // array of the random data to be returned
  const randomData: IWord[] = new Array(10);

  // Loop 10 times to get the random data using the random numbers 'randomIndices'
  for (let i = 0; i < 10; i++) {
    const randIdx: number = randomIndices[i];
    const randObj = data.wordList[randIdx];
    randomData[i] = randObj;

    // if PoS is used, delete it from partOfSpeech Set
    if (partOfSpeech.has(randObj.pos)) partOfSpeech.delete(randObj.pos);
  }

  // If there is a part of speech that hasn't been used, call the function again, until the Set is empty
  if (partOfSpeech.size !== 0) return getRandomObjects();

  return randomData;
};

export default getRandomObjects;
