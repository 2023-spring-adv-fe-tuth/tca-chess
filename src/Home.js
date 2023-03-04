import './App.css';
import './styles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';


function Home({firstMove, firstPiece}) {

    console.log(firstMove, firstPiece);
    
    const nav = useNavigate();
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
                    <Form>
                        <Form.Group>
                            <Form.Label>Who's Playing?</Form.Label>
                            <input 
                                type="text" 
                                name="username" 
                                id="username"
                            />
                            <Form.Label>Which pieces are you playing with?</Form.Label>
                            <Form.Check
                                type="checkbox"
                                label={`White`}
                                name="white"
                                id="white"
                                value="white"
                            />

                            <Form.Check
                                type="checkbox"
                                label={`Black`}
                                name="black"
                                id="black"
                                value="black"
                            />
                        </Form.Group>
                        
                          <button type='submit' onClick={() => nav("/GameinPlay")}>
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
                </Col>
            </Row>

            
            <Row className="row">
                <Col className="col">
                    <h2>Most common first piece captured</h2>
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
