import './App.css';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import GameinPlay from './GameinPlay';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>

      <Routes>
        <Route path="/gameinplay" element={<GameinPlay/>}></Route>
      </Routes>

    </Router>
  );
  
}

export default App;
