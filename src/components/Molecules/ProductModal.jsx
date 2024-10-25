/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const ProductModal = ({ show, onHide, onSubmit, initialProduct }) => {
  const [formData, setFormData] = useState(
    initialProduct || {
      name: "",
      description: "",
      price: "",
      // ... other fields
    }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          {initialProduct ? "Edit Product" : "Add Product"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formProductName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          {/* Add more form fields for description, price, etc. */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" type="submit">
          {initialProduct ? "Save Changes" : "Add Product"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
