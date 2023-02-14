import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
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
                    {['radio'].map((type) => (
                        <div key={`E4`} className="mb-3">
                        <Form.Check 
                            type={type}
                            id={`E4`}
                            label={`E4`}
                        />

                        <Form.Check
                            type={type}
                            label={`B4`}
                            id={`B4`}
                        />
                        </div>
                    ))}
                    </Form>
                </Col>
                <Col className="col">
                <h2>1st piece captured</h2>
                    <Form>
                    {['radio'].map((type) => (
                        <div key={`Pawn`} className="mb-3">
                        <Form.Check 
                            type={type}
                            id={`Pawn`}
                            label={`Pawn`}
                        />

                        <Form.Check
                            type={type}
                            label={`Knight`}
                            id={`Knight`}
                        />

                        <Form.Check
                            type={type}
                            label={`Rook`}
                            id={`Rook`}
                        />

                        <Form.Check
                            type={type}
                            label={`Bishop`}
                            id={`Bishop`}
                        />

                        <Form.Check
                            type={type}
                            label={`Queen`}
                            id={`Queen`}
                        />

                        <Form.Check
                            type={type}
                            label={`Castle`}
                            id={`Castle`}
                        />
                        </div>
                    ))}
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
                    {['radio'].map((type) => (
                        <div key={`E4`} className="mb-3">
                        <Form.Check 
                            type={type}
                            id={`E4`}
                            label={`E4`}
                        />

                        <Form.Check
                            type={type}
                            label={`B4`}
                            id={`B4`}
                        />
                        </div>
                    ))}
                    </Form>
                </Col>
                <Col className="col">
                <h2>1st piece captured</h2>
                    <Form>
                    {['radio'].map((type) => (
                        <div key={`Pawn`} className="mb-3">
                        <Form.Check 
                            type={type}
                            id={`Pawn`}
                            label={`Pawn`}
                        />

                        <Form.Check
                            type={type}
                            label={`Knight`}
                            id={`Knight`}
                        />

                        <Form.Check
                            type={type}
                            label={`Rook`}
                            id={`Rook`}
                        />

                        <Form.Check
                            type={type}
                            label={`Bishop`}
                            id={`Bishop`}
                        />

                        <Form.Check
                            type={type}
                            label={`Queen`}
                            id={`Queen`}
                        />

                        <Form.Check
                            type={type}
                            label={`Castle`}
                            id={`Castle`}
                        />
                        </div>
                    ))}
                    </Form>
                </Col>
            </Row>
        </Container>
    </>
    );
}

export default GameinPlay;