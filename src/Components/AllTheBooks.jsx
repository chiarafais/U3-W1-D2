import books from "../data/romance.json";
import { Component } from "react";
import { Container, Row, Card, Badge, Col } from "react-bootstrap";
class AllTheBooks extends Component {
  render() {
    return (
      <div className="containerCard">
        <Container fluid>
          <Row>
            {books.map((book) => {
              return (
                <Col xs={12} sm={6} md={4} xl={3} className="text-center">
                  <Card style={{ width: "270px", height: "600px" }} key={book.asin} className="mt-5">
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>
                        <Badge className="bg-success">€{book.price}</Badge>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default AllTheBooks;
