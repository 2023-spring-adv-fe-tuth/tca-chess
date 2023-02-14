import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';


function App() {
  return (
    <Container fluid className="container">

      <Row className="row">
        <Col className="col">
          <h1>Title of Player</h1>
        </Col>
      </Row>

      <Row className="row">
        <Col className="col">
          <h2>First Move</h2>

          <label for="E4">E4</label>
          <input type="checkbox" name="E4"></input>

          <label for="B4">B4</label>
          <input type="checkbox" name="B4"></input>

          <label for="C4">C4</label>
          <input type="checkbox" name="C4"></input>

          <label for="D4">D4</label>
          <input type="checkbox" name="D4"></input>
        </Col>
        <Col className="col">
          <h2>1st piece captured</h2>

          <label for="pawn">Pawn</label>
          <input type="checkbox" name="pawn"></input>

          <label for="knight">Knight</label>
          <input type="checkbox" name="knight"></input>

          <label for="rook">Rook</label>
          <input type="checkbox" name="rook"></input>

          <label for="bishop">Bishop</label>
          <input type="checkbox" name="bishop"></input>

          <label for="queen">Queen</label>
          <input type="checkbox" name="queen"></input>

          <label for="castle">Castle</label>
          <input type="checkbox" name="castle"></input>
        </Col>
      </Row>

      <Row className="row">

      </Row>
    </Container>
  );
}

export default App;
