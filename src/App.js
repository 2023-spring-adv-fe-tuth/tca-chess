import './App.css';
import './styles.css';
import GameinPlay from './GameinPlay';
import Home from './Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import localforage from 'localforage';
import { saveGameToCloud, loadGamesFromCloud } from './tca-cloud-api';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


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
							ek
							, "tca-chess"
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

		// Save the game result to the cloud.
		saveGameToCloud(
			emailKeySaved
			, "tca-chess"
			, r.end
			, r
		);

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

  return (
        <>
        <Container fluid className="container">
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter new player name"
              value={emailKeyInput} 
              onChange={(e) => setEmailKeyInput(e.target.value)}
            />
            <Button
              onClick={saveEmailKey}
            >
              Save
            </Button>
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



