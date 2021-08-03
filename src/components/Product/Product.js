import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createProduct } from "../../services/api";

function Product() {
  const [form, setForm] = useState({
    customerID: "",
    productName: "",
    domain: "",
    startDate: "",
    duration: "",
  });

  function postProduct(event) {
    event.preventDefault();
    createProduct(form).catch((error) => {
      // setIsError(true);
      throw error;
    });
  }

  function handleFormChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Create product form</h1>
          <Form isInvalid>
            <Form.Group className="mb-3">
              <Form.Label>Customer Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., Cust123"
                onChange={handleFormChange}
                value={form.customerID}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., domain"
                onChange={handleFormChange}
                value={form.productName}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Domain</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., xyzzy.com"
                onChange={handleFormChange}
                value={form.domain}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="e.g., 2020-01-01"
                onChange={handleFormChange}
                value={form.startDate}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Duration in Months</Form.Label>
              <Form.Control
                type="integer"
                placeholder="e.g., 12"
                onChange={handleFormChange}
                value={form.duration}
              />
            </Form.Group>
            <Button variant="primary" size="lg">
              Submit
            </Button>
          </Form>
        </Col>
        <Col>
          <h1>Second form</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Product;
