import './App.css';
import './styles.css';
import GameinPlay from './GameinPlay';
import Home from './Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

const mostCommonFirstMove = ['a3', 'b3', 'c3', 'd3', 'e3','f3','g3','h3',
'a4', 'b4', 'c4', 'd4', 'e4', 'e4', 'f4','g4','h4',
'Ka3', 'Kc3', 'Kf3', 'Kh3'];

const mostCommonFirstPiece = ['pawn', 'knight', 'bishop', 'pawn', 'pawn'];


function App() {

  const [mostCommon, setMostCommon] = useState(mostCommonFirstMove);

  const calculateFirstMove = (mostCommonFirstMove) => {
    const hashmap = mostCommonFirstMove.reduce( (acc, val) => {
        acc[val] = (acc[val] || 0 ) + 1
        return acc
    },{});
    const hashmapReduced = Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b);
    return hashmapReduced;
  }

  const [firstPiece, setfirstPiece] = useState(mostCommonFirstPiece);

    const calculateFirstPiece = (mostCommonFirstPiece) => {
    const hashmap = mostCommonFirstPiece.reduce( (acc, val) => {
        acc[val] = (acc[val] || 0 ) + 1
        return acc
    },{});
    const hashmapReduced = Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b);
    return hashmapReduced;
  }

  return (
        <>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home firstMove={calculateFirstMove(mostCommon)} firstPiece={calculateFirstPiece(firstPiece)}/>}/>
            <Route path="/GameinPlay" element={<GameinPlay/>}/>
          </Routes>
        </HashRouter>
      </>
    );
  
}

export default App;
