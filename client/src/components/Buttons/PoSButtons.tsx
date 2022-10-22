import { Dispatch, useRef, useState } from 'react';
import Button from './Button';
import './PoSButtons.css';

interface Props {
  correctPoS?: string;
  PoSResult?: string;
  setPoSResult: Dispatch<string>;
  incrementNumberOfCorrectAnswers: Function;
}

const PoSButtons: React.FC<Props> = ({
  correctPoS,
  PoSResult,
  setPoSResult,
  incrementNumberOfCorrectAnswers,
}) => {
  const PoS = useRef(['noun', 'adverb', 'adjective', 'verb']); // use it to list the 4 buttons

  const [selectedPoS, setSelectedPoS] = useState<string>(''); // use it to check whether it's correct or not

  const checkCorrectness = (e: any) => {
    setSelectedPoS(e.target.innerText);

    // if the selected PoS matches the correct one, set the result as 'correct', otherwise set it as 'incorrect'
    if (correctPoS === e.target.innerText) {
      setPoSResult('correct');
      incrementNumberOfCorrectAnswers();
    } else setPoSResult('incorrect');
  };

  return (
    <div className='pos-buttons-container'>
      {PoS.current.map(value => (
        <Button
          key={value}
          className={`pos-btn ${value === selectedPoS ? PoSResult : ''}`} // change the color depending on whether the answer is correct or not, 'correct' and 'incorrect' are used as class names
          onClick={checkCorrectness}
          disabled={PoSResult !== ''}
        >
          {value}
        </Button>
      ))}
    </div>
  );
};

export default PoSButtons;
