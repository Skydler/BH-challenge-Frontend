import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CreationForm from "./CreationForm";
import DeletionForm from "./DeletionForm";

function Product() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Create product form</h1>
          <CreationForm />
        </Col>
        <Col>
          <h1>Remove product form</h1>
          <DeletionForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Product;
