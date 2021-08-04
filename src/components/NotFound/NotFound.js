import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function NotFound() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>404 Page Not Found 😬</h1>

          <Link to="/">
            <Button>Back to home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
