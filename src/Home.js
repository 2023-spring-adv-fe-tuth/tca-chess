import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';

import './styles.css';

function Home() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
        console.log(inputs);
    }
    return(
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
                                value={inputs.username || ""} 
                                onChange={handleChange}
                            />
                            <Form.Label>Which pieces are you playing with?</Form.Label>
                            <Form.Check
                                type="checkbox"
                                label={`White`}
                                name="white"
                                value={inputs.white || ""}
                                onChange={handleChange}
                            />

                            <Form.Check
                                type="checkbox"
                                label={`Black`}
                                name="black"
                                value={inputs.black}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        
                         <Link to="/GameinPlay">
                            <button type="submit">
                                Start Game!
                            </button>
                        </Link>

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);

export default Home;