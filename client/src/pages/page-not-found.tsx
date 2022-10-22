import Button from '../components/Buttons/Button';

const PageNotFound: React.FC = () => {
  return (
    <>
      <h1>Page not found</h1>

      <div style={{ margin: '1.5rem' }}>
        <hr />
      </div>

      <Button className='full-width' onClick={() => window.history.back()}>
        Go Back
      </Button>
    </>
  );
};

export default PageNotFound;
