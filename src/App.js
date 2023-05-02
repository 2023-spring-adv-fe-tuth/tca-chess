import './App.css';
import './styles.css';
import GameinPlay from './GameinPlay';
import Home from './Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import localforage from 'localforage';
import { saveGameToCloud, loadGamesFromCloud } from './tca-cloud-api';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function App() {

  //For Home Component form data
  const [username, setUserName] = useState("");
  const [white, setWhite] = useState(false);
  const [black, setBlack] = useState(false);
  const [previousResult, setPreviousResult] = useState();
  const [winPercentage, setWinPercentage] = useState();

  //For game in play form data
  const[numOfChecks, saveNumberOfChecks] = useState('');
  const [current, setCurrentTime] = useState([]);
  const [ave, calculateAverage] = useState();
  const [totalTurns, setTotalTurns] = useState();
  const [endGame, setEndOfGame] = useState();

  const [emailKeyInput, setEmailKeyInput] = useState("");
	const [emailKeySaved, setEmailKeySaved] = useState("");
  const [results, setGameResults] = useState([]);

  useEffect(
		() => {

			const loadEmailKeyAndGameResults = async () => {
				try {
					const ek = String(await localforage.getItem("emailKey")) ?? "";
					if (ek.length > 0) {
						const resultsFromCloud = await loadGamesFromCloud(
							ek,
							"tca-chess"
						);
						if (!ignore) {
							setGameResults(resultsFromCloud);
						}
					}
					if (!ignore) { 
						setEmailKeyInput(ek);
						setEmailKeySaved(ek);
					}
				}
				catch (err) {
					console.error(err);
				}
			};
			let ignore = false;
			loadEmailKeyAndGameResults();
			return () => {
				ignore = true;
			};
		}
		, [emailKeySaved]
	);

  const addGameResult = (r) => {
    console.log(emailKeySaved);
		// Save the game result to the cloud.
		saveGameToCloud(
			emailKeySaved
			, "tca-chess"
			, new Date().toISOString()
			, r
    );
    console.log(saveGameToCloud);
		// Optimistically update the lifted app state.
		setGameResults([
			...results
			, r
    ]);

	};

  const saveEmailKey = async () => {
		try {
			await localforage.setItem(
				"emailKey"
				, emailKeyInput
			);

			setEmailKeySaved(emailKeyInput);
		}
		catch (err) {
			console.error(err);
		}
	};

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
  },[previousResult])


  let initialValue = 0;

  useEffect( () => {
    const calculateWinPercentage = async() => {
      try{
          await loadGamesFromCloud();
          let totalWins = results.reduce(function(acc, currVal) {
          if (currVal.gameResult === 'I Won') {
            return acc += 1;
          } else if (currVal.gameResult !== 'I Won') {
            return acc;
          }
          },initialValue);

          let totalGames = results.length;
          setWinPercentage((totalWins/totalGames) * 100);
      } catch (err) {
        console.log(err);
      }
    }
    calculateWinPercentage();
  }, [results, initialValue])


  return (
        <>
        <Container fluid className="container">
          <Form.Group id="email">
            <Form.Label>Currently logged in as:</Form.Label>
            <Form.Control 
              type="text" 
              id="emailInput"
              placeholder="Enter new player name"
              value={emailKeyInput} 
              onChange={(e) => setEmailKeyInput(e.target.value)}
            />
            <button
              onClick={saveEmailKey}
            >
              Save New Email Address
            </button>
        </Form.Group>
      </Container>
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
              results={results}
              winPercentage={winPercentage}
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
            addGameResult={addGameResult}
            />}/>
          </Routes>
        </HashRouter>
      </>
    );
  
}

export default App;



