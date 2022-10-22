import { useEffect, useRef } from 'react';
import './RankList.css';

interface Props {
  data: number[];
  studentRank: number;
}

const Table: React.FC<Props> = ({ data, studentRank }) => {
  const ranks = useRef<number[]>(data); // useRef is used to avoid re-rendering

  useEffect(() => {
    ranks.current = data;
  }, [data]);

  return (
    <div className='rank-list-container'>
      <h3>Rank List</h3>
      <ul>
        {ranks.current?.map((rank: number) => (
          <li
            key={rank}
            className={`${rank === studentRank ? 'selected-rank' : ''}`}
          >
            {rank}
            {rank === studentRank && <p>You're here</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Table;
