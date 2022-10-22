import { Outlet } from 'react-router-dom';
import './Card.css';
import CardContent from './CardContent';

const Card: React.FC = () => {
  return (
    <div className='card'>
      <CardContent>
        <Outlet />
      </CardContent>
    </div>
  );
};

export default Card;
