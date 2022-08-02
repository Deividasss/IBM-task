import Navigation from '../nav/Nav';
import '../app/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Companies from '../Companies/Companies';
import Footer from '../Footer/Footer';

function App() {
  return (
    <><Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Companies />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
