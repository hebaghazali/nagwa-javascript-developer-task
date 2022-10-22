import { MouseEventHandler } from 'react';
import Button from './Button';

interface Props {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

const NextButton: React.FC<Props> = ({ children, onClick, disabled }) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className='next-btn full-width'
    >
      {children}
    </Button>
  );
};

export default NextButton;
