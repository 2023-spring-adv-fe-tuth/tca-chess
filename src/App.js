import './App.css';
import './styles.css';
import GameinPlay from './GameinPlay';
import Home from './Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import localforage from 'localforage';



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
    const [previousResult, setPreviousResult] = useState();

    //For game in play form data
    const[numOfChecks, saveNumberOfChecks] = useState('');
    const [current, setCurrentTime] = useState([]);
    const [ave, calculateAverage] = useState();
    const [totalTurns, setTotalTurns] = useState();
    const [endGame, setEndOfGame] = useState();

    useEffect(() => {
    //Runs on every render
    //And any time any dependency value changes
    let totalTime = '';
    totalTime += current;
    let numberTotalTime = parseInt(totalTime);
    let numberTotalTurns = parseInt(totalTurns);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    calculateAverage(numberTotalTime/numberTotalTurns);
    }, [current, totalTurns, ave]);


    useEffect( () => {
      const loadGameResult = async() => {
        try{
          setPreviousResult(await localforage.getItem("gameResult"));
        } catch (err) {
          console.error(err);
        }
      }
      loadGameResult();
    }, [endGame])

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
              current={current}
              ave={ave}
              previousResult={previousResult}
              />}/>
            <Route path="/GameinPlay" element={<GameinPlay 
            username={username} 
            white={white} 
            black={black} 
            saveNumberOfChecks={saveNumberOfChecks}
            setCurrentTime={setCurrentTime}
            setTotalTurns={setTotalTurns}
            endGame={endGame}
            setEndOfGame={setEndOfGame}
            />}/>
          </Routes>
        </HashRouter>
      </>
    );
  
}

export default App;



