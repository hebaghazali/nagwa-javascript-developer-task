import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/Progress/ProgressBar';
import PoSButtons from '../components/Buttons/PoSButtons';
import { getWords } from '../services/words';
import NextButton from '../components/Buttons/NextButton';
import IWord from '../interfaces/word';

const Practice: React.FC = () => {
  const [words, setWords] = useState<IWord[]>([]);

  // track current word
  const [currentWordIdx, setCurrentWordIdx] = useState<number>(0);

  // 'correct' or 'incorrect'
  const [PoSResult, setPoSResult] = useState<string>('');

  // from 0 to 100
  const [progress, setProgress] = useState<number>(0);

  // use it to calculate the score
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] =
    useState<number>(0);

  // use it to navigate to rank page when the student's progress is 100%
  const navigate = useNavigate();

  useEffect(() => {
    // get the random words from API
    getWords(setWords);
  }, []);

  useEffect(() => {
    // when the result is set (whether it's correct or incorrect) calculate the student's progress
    if (PoSResult !== '') setProgress(((currentWordIdx + 1) / 10) * 100);
  }, [PoSResult, currentWordIdx]);

  const incrementNumberOfCorrectAnswers = () => {
    setNumberOfCorrectAnswers(current => current + 1);
  };

  const goToNextQuestion = () => {
    // increment to move on to the next word
    setCurrentWordIdx(currentWordIdx + 1);

    // reset the result back to an empty string
    setPoSResult('');

    // go to rank page and pass his/her score with it
    if (progress === 100)
      navigate('/rank', { state: (numberOfCorrectAnswers / 10) * 100 });
  };

  return (
    <>
      <ProgressBar value={progress} />

      <h1>{words[currentWordIdx]?.word}</h1>

      <PoSButtons
        correctPoS={words[currentWordIdx]?.pos}
        PoSResult={PoSResult}
        setPoSResult={setPoSResult}
        incrementNumberOfCorrectAnswers={incrementNumberOfCorrectAnswers}
      />

      <p style={{ height: '1.5rem' }}>
        {PoSResult !== '' && // if we have a result, display text
          (PoSResult === 'correct' ? `Correct! 👏😊` : `Incorrect! 😢`)}
      </p>

      <NextButton onClick={goToNextQuestion} disabled={PoSResult === ''}>
        {progress === 100 ? 'Submit' : 'Next'}
      </NextButton>
    </>
  );
};

export default Practice;
