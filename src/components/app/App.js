import Navigation from '../nav/Nav';
import '../app/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Companies from '../Companies/Companies';
import Stocks from '../Stocks/Stocks';

function App() {
  return (
    <><Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Companies />} />
        <Route path='stocks' element={<Stocks />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
