import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Practice from './pages/practice';
import Rank from './pages/rank';
import PageNotFound from './pages/page-not-found';
import Card from './components/Card/Card';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Card />}>
          <Route index element={<Practice />} />
          <Route path='rank' element={<Rank />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
