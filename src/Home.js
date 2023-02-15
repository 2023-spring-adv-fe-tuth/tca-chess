import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.css';

function Home() {
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
                            <Form.Control></Form.Control>

                            <Form.Label>Which pieces are you playing with?</Form.Label>
                            <Form.Check
                                type="checkbox"
                                label={`White`}
                                id={`White`}
                            />

                            <Form.Check
                                type="checkbox"
                                label={`Black`}
                                id={`Black`}
                            />
                        </Form.Group>
                        <Button variant='primary'>Start Game</Button>
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