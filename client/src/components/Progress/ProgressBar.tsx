import './ProgressBar.css';

interface ProgressProps {
  value: number;
}

const ProgressBar: React.FC<ProgressProps> = ({ value }) => {
  return (
    <div className='progress-container'>
      <progress className='progress' max='100' value={value}>
        {value}%
      </progress>
      {value}%
    </div>
  );
};

export default ProgressBar;
