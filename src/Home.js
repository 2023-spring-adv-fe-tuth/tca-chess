import './App.css';
import './styles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Home({username, setUserName, setWhite, setBlack, numOfChecks, current, ave}) {
    
    const nav = useNavigate();

    const [localWhite, setLocalWhite] = useState(false);

    const onSubmitHandler = () =>  {
        setWhite(localWhite);
        setBlack(!localWhite);
        nav('GameinPlay');
    }

    const showForm = () => {
        const myForm = document.getElementById('form');
        myForm.style.visibility = "visible";
    }

  return (
        <>
        <Container fluid className="container">

            <Row className="row">
                <Col className="col">
                    <Row className="row">
                        <Col className="col">
                        <h1>Chess Tracker</h1>
                        </Col>
                    </Row>
                    <button id="newGame" onClick={showForm}>New Game</button>
                    <Form onSubmit={onSubmitHandler} id="form">
                        <Form.Group>
                            <Form.Label>Name:</Form.Label>
                            <input 
                                type="text" 
                                name="username" 
                                id="username"
                                value={username}
                                onChange={(event) => setUserName(event.target.value)}
                            />
                            <Form.Label>Which pieces are you playing with?</Form.Label>
                            <Form.Check
                                type="checkbox"
                                label={`White`}
                                name="white"
                                id="white"
                                checked={localWhite}
                                onChange={(event) => setLocalWhite(event.target.checked)}
                            />

                            <Form.Check
                                type="checkbox"
                                label={`Black`}
                                name="black"
                                id="black"
                                checked={!localWhite}
                                onChange={(event) => setLocalWhite(!event.target.checked)}
                            />
                        </Form.Group>
                        
                          <button type='submit' id="startGame">
                            Start Game
                          </button> 
                    </Form>
                </Col>
            </Row>
        </Container>
        
        <Container fluid className="container" id="stats">

            <Row className="row">
                <Col className="col">
                <h1>Stats</h1>
                </Col>
            </Row>

            <Row className="row">
                <Col className="col">
                    <h2>Number of Times Your King went into Check</h2>
                    <p>{numOfChecks}</p>
                </Col>
            </Row>

            
            <Row className="row">
                <Col className="col">
                    <h2>Total time you spent playing:</h2>
                    <p>{current}</p>
                    <p>Average Time of turn: {ave}</p>
                </Col>
            </Row>

        </Container>
      </>
    );
  
}

export default Home;
