import Navigation from '../nav/Nav';
import '../app/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Companys from '../Companys/Companys';
import Stocks from '../Stocks/Stocks';

function App() {
  return (
    <><Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Companys />} />
        <Route path='stocks' element={<Stocks />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
