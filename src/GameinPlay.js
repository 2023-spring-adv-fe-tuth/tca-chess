import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function GameinPlay({username, white,  black, saveNumberOfChecks}) {

    const nav = useNavigate();

    const [localCheck, setLocalCheck] = useState(0);

    const onSubmitHandler = () =>  {
        saveNumberOfChecks(localCheck);
        nav('/');
    }

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
                    <h2>Number of Times Your King went into Check</h2>
                    <Form onSubmit={onSubmitHandler}>
                        <Form.Group>
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
                                <Button variant="secondary" type="submit"  onClick={() => nav(-1)}>Player One Won</Button>
                            </Col>
                            <Col className="col">
                                <Button variant="secondary" type="submit" onClick={() => nav(-1)}>Opponent Won</Button>
                            </Col>
                        </Row>   
                        <Row className="row">
                            <Col className="col">
                                <Button variant="secondary" type="submit" onClick={() => nav(-1)}>Draw</Button>
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