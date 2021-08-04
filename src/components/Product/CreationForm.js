import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createProduct } from "../../services/api";

function CreationForm(props) {
  const [form, setForm] = useState({
    customer_id: "",
    product_name: "",
    domain: "",
    start_date: "",
    duration_months: "",
  });

  const showNotification = props.notificationHandler;

  function handleSubmit(event) {
    event.preventDefault();
    createProduct(form)
      .then((response) => {
        if (response.ok) {
          showNotification("Product was created");
        } else {
          showNotification("Couldn't create product :(");
        }
      })
      .catch((error) => {
        throw error;
      });
  }

  function handleFormChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Customer Id</Form.Label>
        <Form.Control
          type="text"
          placeholder="e.g., Cust123"
          name="customer_id"
          onChange={handleFormChange}
          value={form.customerID}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="e.g., domain"
          name="product_name"
          onChange={handleFormChange}
          value={form.productName}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Domain</Form.Label>
        <Form.Control
          type="text"
          placeholder="e.g., xyzzy.com"
          name="domain"
          onChange={handleFormChange}
          value={form.domain}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="e.g., 2020-01-01"
          name="start_date"
          onChange={handleFormChange}
          value={form.startDate}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Duration in Months</Form.Label>
        <Form.Control
          type="integer"
          placeholder="e.g., 12"
          name="duration_months"
          onChange={handleFormChange}
          value={form.duration}
        />
      </Form.Group>
      <Button variant="success" size="lg" onClick={handleSubmit}>
        Create
      </Button>
    </Form>
  );
}

export default CreationForm;
