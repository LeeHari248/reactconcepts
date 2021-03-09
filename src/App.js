import logo from "./logo.svg";
import "./App.css";
import {
  Container,Row, Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm="12">
            <h2>Sample text</h2>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://via.placeholder.com/350x150"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Card subtitle---
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Lee />
    </div>
  );
}

export default App;

function Lee() {
  return <div>Leela function</div>;
}
