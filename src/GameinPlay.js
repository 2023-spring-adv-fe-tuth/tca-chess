import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import localforage from 'localforage';

function GameinPlay({username, white,  black, saveNumberOfChecks, setCurrentTime, setTotalTurns, endGame, setEndOfGame, addGameResult}) {

    const nav = useNavigate();

    const [localCheck, setLocalCheck] = useState(0);

    const endOfGame = async(result) => {
        
        if (result === 1) {
            endGame = 'I Won';
        } else if (result === 2) {
            endGame = 'Opponent Won';
        } else if (result === 3) {
            endGame = 'Draw';
        }
        console.log('end game equals:', endGame);
        try{
           setEndOfGame(await localforage.setItem(
                "gameResult",
                endGame
            ))
        } catch (err){
            console.error(err);
        }
        addGameResult({
           gameResult: endGame
        });
    };
    
    const onSubmitHandler = () =>  {
        saveNumberOfChecks(localCheck);
        nav('/');
    }

    const [timer, setTimer] = useState(0);
    const [numOfTurns, setNumOfTurns] = useState(0);
    const [start, setStart] = useState(false);
    const firstStart = useRef(true);
    const tick = useRef();


    useEffect(() => {
        if (firstStart.current) {
        firstStart.current = !firstStart.current;
        return;
        }
        
        if (start === true) {
        tick.current = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
        setNumOfTurns((numOfTurns) => numOfTurns + 1 );
        } else {
        setCurrentTime(document.getElementById('timer').innerText);
        setTotalTurns(document.getElementById('numOfTurns').innerText);
        clearInterval(tick.current);
        }

        return () => clearInterval(tick.current);

    }, [setCurrentTime, start, setTotalTurns]);

    const toggleStart = (event) => {
        event.preventDefault();
        setStart(!start);
    };

    return(
    <>
        <Container fluid className="container">

            <Row className="row">
                <Col className="col">
                <h1>{username}</h1>
                <h1>{white && 'Playing as: white'}</h1>
                <h1>{ black && 'Playing as: black'}</h1>
                </Col>
            </Row>

            <Row className="row">
                <Col className="col">

                <Form.Group>
                        <h2>Start and stop the timer during your turn</h2>
                        <h2 id="timer">{timer}</h2>
                        <p>Number of Turns:</p>
                        <p id="numOfTurns">{numOfTurns}</p>
                        <div className="startDiv">
                            <button className="startButton" onClick={toggleStart}>
                            {!start ? "START" : "STOP"}
                            </button>
                        </div>
                    </Form.Group>

                    <h2>Number of Times Your King went into Check</h2>
                    <Form onSubmit={onSubmitHandler}>
                        <Form.Group class="d-flex flex-row justify-content-between align-items-center">
                            <button 
                            
                                type="button"
                                value={localCheck}
                                onClick={() => setLocalCheck(localCheck +1)}
                            > +1 </button>

                            <p> {localCheck} </p>

                            <button
                            
                                type="button"
                                value={localCheck}
                                onClick={() => setLocalCheck(localCheck -1)}
                            > -1 </button>
                        </Form.Group>

                        <Row className="row">
                            <Col className="col">
                                <button  className="actionButtons" onClick={() => {endOfGame(1);}}>I won</button>
                            </Col>
                            <Col className="col">
                                <button className="actionButtons" onClick={() => {endOfGame(2);}}>Opponent Won</button>
                            </Col>  
                            <Col className="col">
                                <button  className="actionButtons" onClick={() => {endOfGame(3);}}>Draw</button>
                            </Col>
                        </Row>   
                        
                    </Form>
                </Col>
            </Row>    
        </Container>
    </>
    );
}

export default GameinPlay;