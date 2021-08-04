import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { deleteProduct } from "../../services/api";

function DeletionForm(props) {
  const [form, setForm] = useState({
    customer_id: "",
    product_name: "",
    domain: "",
  });

  const showNotification = props.notificationHandler;

  function handleSubmit(event) {
    event.preventDefault();
    deleteProduct(form)
      .then((response) => {
        if (response.ok) {
          showNotification("Product was deleted");
        } else {
          showNotification("Couldn't delete product :(");
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
      <Button variant="danger" size="lg" onClick={handleSubmit}>
        Remove
      </Button>
    </Form>
  );
}

export default DeletionForm;
