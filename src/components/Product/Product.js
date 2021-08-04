import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

import CreationForm from "./CreationForm";
import DeletionForm from "./DeletionForm";
import "./index.css";

function Product() {
  const [show, setShow] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  function showNotification(message) {
    setShow(true);
    setToastMessage(message);
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Create product form</h1>
          <CreationForm notificationHandler={showNotification} />
        </Col>
        <Col>
          <h1>Remove product form</h1>
          <DeletionForm notificationHandler={showNotification} />
        </Col>
        <ToastContainer className="p-5" position="bottom-end">
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={2000}
            autohide
            position="bottom-end"
            bg="info"
          >
            <Toast.Header>
              <strong className="me-auto">🖖 Hello!</strong>
            </Toast.Header>
            <Toast.Body>{toastMessage}</Toast.Body>
          </Toast>
        </ToastContainer>
      </Row>
      <hr />
      <Row className="email-section">
        <Col>
          <Link to="/email_schedule">
            <Button>Go to email schedule table</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Product;
