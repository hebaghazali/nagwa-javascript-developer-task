import { MouseEventHandler } from 'react';
import './Button.css';

interface PoSProps {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<PoSProps> = ({
  children,
  onClick,
  className,
  disabled,
}) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
