import './App.css';
import './styles.css';
import GameinPlay from './GameinPlay';
import Home from './Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';


//hard coded data
/*const mostCommonFirstMove = ['a3', 'b3', 'c3', 'd3', 'e3','f3','g3','h3',
'a4', 'b4', 'c4', 'd4', 'e4', 'e4', 'f4','g4','h4',
'Ka3', 'Kc3', 'Kf3', 'Kh3']; */

//const mostCommonFirstPiece = ['pawn', 'knight', 'bishop', 'pawn', 'pawn'];


function App() {

  //   const calculateFirstPiece = (mostCommonFirstPiece) => {
  //   const hashmap = mostCommonFirstPiece.reduce( (acc, val) => {
  //       acc[val] = (acc[val] || 0 ) + 1
  //       return acc
  //   },{});
  //   const hashmapReduced = Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b);
  //   return hashmapReduced;
  //}

  //For Home Component form data
    const [username, setUserName] = useState("");
    const [white, setWhite] = useState(false);
    const [black, setBlack] = useState(false);

  //For game in play form data
  const[numOfChecks, saveNumberOfChecks] = useState('');


  return (
        <>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home 
              username={username}
              setUserName={setUserName}
              white={white}
              setWhite={setWhite}
              black={black}
              setBlack={setBlack}
              numOfChecks={numOfChecks}
              />}/>
            <Route path="/GameinPlay" element={<GameinPlay 
            username={username} 
            white={white} 
            black={black} 
            saveNumberOfChecks={saveNumberOfChecks}
            />}/>
          </Routes>
        </HashRouter>
      </>
    );
  
}

export default App;



