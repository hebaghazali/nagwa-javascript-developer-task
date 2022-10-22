import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../components/Buttons/Button';
import RankList from '../components/RankList/RankList';
import { getAllRanks, getRank } from '../services/rank';

const Rank: React.FC = () => {
  // use it to navigate back to practice page
  const navigate = useNavigate();

  // use it to get state passed from practice page
  const location = useLocation();

  const [rank, setRank] = useState<number>();
  const [allRanks, setAllRanks] = useState<number[]>([]);

  useEffect(() => {
    getAllRanks(setAllRanks);
  }, []);

  useEffect(() => {
    // get rank from API after sending the score as a POST request
    getRank(location.state, setRank);
  }, [location.state]);

  const goBackToPracticePage = () => {
    navigate('/');
  };

  return (
    <>
      {location.state === null ? ( // if the student enters the /rank url directly, display a button to go to practice page
        <Button onClick={goBackToPracticePage}>Take a quiz</Button>
      ) : (
        rank !== undefined && ( // when we get rank from API, display its
          <>
            <h1 style={{ textAlign: 'center' }}>Your rank is {rank}</h1>
            <Button onClick={goBackToPracticePage}>Try Again?</Button>
            <RankList data={allRanks} studentRank={rank} />
          </>
        )
      )}
    </>
  );
};

export default Rank;
