import './App.css';
import './styles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Home({firstMove, firstPiece}) {
    
    const nav = useNavigate();
    const responseBody = {username: "", white: "", black: ""};
    const [username, setUserName] = useState("");
    const [white, setWhite] = useState("False");
    const [black, setBlack] = useState("False");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        responseBody.username = username;
        responseBody.white = white;
        responseBody.black = black;
        console.log(JSON.stringify(responseBody));
        nav("/GameinPlay");
    }
  return (
        <>
        <Container fluid className="container">

            <Row className="row">
                <Col className="col">
                <h1>Title of Player</h1>
                </Col>
            </Row>

            <Row className="row">
                <Col className="col">
                    <h2>New Game</h2>
                    <Form onSubmit={onSubmitHandler}>
                        <Form.Group>
                            <Form.Label>Who's Playing?</Form.Label>
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
                                value={white}
                                onChange={(event) => setWhite(event.target.value = true)}
                            />

                            <Form.Check
                                type="checkbox"
                                label={`Black`}
                                name="black"
                                id="black"
                                value={black}
                                onChange={(event) => setBlack(event.target.value = true)}
                            />
                        </Form.Group>
                        
                          <button type='submit'>
                            Start Game
                          </button> 
                    </Form>
                </Col>
            </Row>
        </Container>
        
        <Container fluid className="container">

            <Row className="row">
                <Col className="col">
                <h1>Leaderboard</h1>
                </Col>
            </Row>

            <Row className="row">
                <Col className="col">
                    <h2>Most common first move</h2>
                    <p>{firstMove}</p>
                </Col>
            </Row>

            
            <Row className="row">
                <Col className="col">
                    <h2>Most common first piece captured</h2>
                    <p>{firstPiece}</p>
                </Col>
            </Row>

            <Row className="row">
                <Col className="col">
                    <h2>Number of Games ending in a draw</h2>
                </Col>
            </Row>
        </Container>
      </>
    );
  
}

export default Home;
