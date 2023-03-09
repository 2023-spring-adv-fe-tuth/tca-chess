import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.css';
import { useNavigate } from 'react-router-dom';

/* a3, b3, c3, d3, e3,f3,g3,h3

a4, b4, c4, d4, e4,f4,g4,h4

Ka3, Kc3, Kf3, Kh3*/

function GameinPlay({username, white,  black}) {

    console.log(username);
    const nav = useNavigate();
    return(
    <>
        <Container fluid className="container">

            <Row className="row">
                <Col className="col">
                <h1>{username}</h1>
                <h2>{white && 'white'}</h2>
                <h2>{black && 'black'}</h2>
                </Col>
            </Row>

            <Row className="row">
                <Col className="col">
                    <h2>First Move</h2>
                    <Form>
                        <Form.Group>
                            <Form.Check 
                                type="checkbox"
                                id={`a3`}
                                label={`a3`}
                            />

                            <Form.Check
                                type="checkbox"
                                label={`b3`}
                                id={`b3`}
                            />
                            
                            <Form.Check
                                type="checkbox"
                                label={`c3`}
                                id={`c3`}
                            />
                            
                            <Form.Check
                                type="checkbox"
                                label={`d3`}
                                id={`d3`}
                            />
                            
                            <Form.Check
                                type="checkbox"
                                label={`e3`}
                                id={`e3`}
                            />
                            
                            <Form.Check
                                type="checkbox"
                                label={`f3`}
                                id={`f3`}
                            />
                            
                            <Form.Check
                                type="checkbox"
                                label={`g3`}
                                id={`g3`}
                            />
                            
                            <Form.Check
                                type="checkbox"
                                label={`h3`}
                                id={`h3`}
                            />
                            
                            <Form.Check
                                type="checkbox"
                                label={`a4`}
                                id={`a4`}
                            />
                            
                            <Form.Check
                                type="checkbox"
                                label={`b4`}
                                id={`b4`}
                            />
                            
                            <Form.Check
                                type="checkbox"
                                label={`c4`}
                                id={`c4`}
                            />
                            
                            <Form.Check
                                type="checkbox"
                                label={`d4`}
                                id={`d4`}
                            />
                            
                            <Form.Check
                                type="checkbox"
                                label={`e4`}
                                id={`e4`}
                            />
                            
                            <Form.Check
                                type="checkbox"
                                label={`f4`}
                                id={`f4`}
                            />
                            
                            <Form.Check
                                type="checkbox"
                                label={`g4`}
                                id={`g4`}
                            />
                            
                            <Form.Check
                                type="checkbox"
                                label={`h4`}
                                id={`h4`}
                            />
                            
                            <Form.Check
                                type="checkbox"
                                label={`Ka3`}
                                id={`Ka3`}
                            />
                            
                            <Form.Check
                                type="checkbox"
                                label={`Kc3`}
                                id={`Kc3`}
                            />
                            
                            <Form.Check
                                type="checkbox"
                                label={`Kf3`}
                                id={`Kf3`}
                            />
                            
                            <Form.Check
                                type="checkbox"
                                label={`Kh3`}
                                id={`Kh3`}
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
                    <Button variant="secondary" onClick={() => nav(-1)}>Player One Won</Button>
                </Col>
                <Col className="col">
                    <Button variant="secondary" onClick={() => nav(-1)}>Opponent Won</Button>
                </Col>
            </Row>   
            <Row className="row">
                <Col className="col">
                    <Button variant="secondary" onClick={() => nav(-1)}>Draw</Button>
                </Col>
            </Row>         
        </Container>
    </>
    );
}

export default GameinPlay;