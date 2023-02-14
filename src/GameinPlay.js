import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.css';

function GameinPlay() {
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
                    <h2>First Move</h2>
                    <Form>
                        <Form.Group>
                            <Form.Check 
                                type="checkbox"
                                id={`E4`}
                                label={`E4`}
                            />

                            <Form.Check
                                type="checkbox"
                                label={`B4`}
                                id={`B4`}
                            />
                        </Form.Group>
                    </Form>
                </Col>
                <Col className="col">
                <h2>1st piece captured</h2>
                    <Form>
                        <Form.Group>
                            <Form.Check 
                                type="checkbox"
                                id={`pawn`}
                                label={`pawn`}
                            />

                            <Form.Check
                                type="checkbox"
                                label={`knight`}
                                id={`knight`}
                            />

                            <Form.Check
                                type="checkbox"
                                label={`rook`}
                                id={`rook`}
                            />

                            <Form.Check
                                type="checkbox"
                                label={`bishop`}
                                id={`bishop`}
                            />

                            <Form.Check
                                type="checkbox"
                                label={`queen`}
                                id={`queen`}
                            />

                            <Form.Check
                                type="checkbox"
                                label={`castle`}
                                id={`castle`}
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
        
        <Container fluid className="container">

            <Row className="row">
                <Col className="col">
                <h1>Title of Player</h1>
                </Col>
            </Row>

            <Row className="row">
                <Col className="col">
                    <h2>First Move</h2>
                    <Form>
                        <Form.Group>
                            <Form.Check 
                                type="checkbox"
                                id={`E4`}
                                label={`E4`}
                            />

                            <Form.Check
                                type="checkbox"
                                label={`B4`}
                                id={`B4`}
                            />
                        </Form.Group>
                    </Form>
                </Col>
                <Col className="col">
                <h2>1st piece captured</h2>
                    <Form>
                        <Form.Group>
                            <Form.Check 
                                type="checkbox"
                                id={`pawn`}
                                label={`pawn`}
                            />

                            <Form.Check
                                type="checkbox"
                                label={`knight`}
                                id={`knight`}
                            />

                            <Form.Check
                                type="checkbox"
                                label={`rook`}
                                id={`rook`}
                            />

                            <Form.Check
                                type="checkbox"
                                label={`bishop`}
                                id={`bishop`}
                            />

                            <Form.Check
                                type="checkbox"
                                label={`queen`}
                                id={`queen`}
                            />

                            <Form.Check
                                type="checkbox"
                                label={`castle`}
                                id={`castle`}
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>

        <Container fluid className="container">
            <Row className="row">
                <Col className="col">
                    <h2>Checkmate!</h2>
                </Col>
            </Row>  
            <Row className="row">
                <Col className="col">
                    <Button variant="secondary">Player One Won</Button>
                </Col>
                <Col className="col">
                    <Button variant="secondary">Opponent Won</Button>
                </Col>
            </Row>   
            <Row className="row">
                <Col className="col">
                    <Button variant="secondary">Draw</Button>
                </Col>
            </Row>         
        </Container>
    </>
    );
}

export default GameinPlay;