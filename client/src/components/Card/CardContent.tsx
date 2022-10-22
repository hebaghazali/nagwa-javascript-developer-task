import { ReactNode } from 'react';
import './CardContent.css';

interface Props {
  children: ReactNode;
}

const CardContent: React.FC<Props> = ({ children }) => {
  return <div className='card-content'>{children}</div>;
};

export default CardContent;
