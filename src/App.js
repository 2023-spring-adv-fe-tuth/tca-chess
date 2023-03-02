import './App.css';
import './styles.css';
import GameinPlay from './GameinPlay';
import Home from './Home';
import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
        <>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/GameinPlay" element={<GameinPlay/>}/>
          </Routes>
        </HashRouter>
      </>
    );
  
}

export default App;
