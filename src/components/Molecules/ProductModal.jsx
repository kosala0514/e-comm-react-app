/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";



const ProductModal = ({ show, onHide, onSubmit, initialProduct }) => {
  axios.defaults.withCredentials = true; 

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    if (initialProduct) {
      setFormData(initialProduct);
    }
  }, [initialProduct]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(formData);
    onHide();
    // console.log(token);
    // e.preventDefault();
    // try {
    //         const response = await axios.post(
    //           "http://localhost:8000/product/store",
    //           formData
    //         );
    //         console.log(response.data);
    //         // Handle success, e.g., show a success message
    //     } catch (error) {
    //         console.error(error);
    //         // Handle error, e.g., show an error message
    //     }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          {initialProduct ? "Edit Product" : "Add Product"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          
          <Form.Group controlId="formProductName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter product name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Enter product description"
              value={formData.description}
              onChange={handleChange}
              required
            />

            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              placeholder="Enter product price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" type="button" onClick={handleSubmit}>
          {initialProduct ? "Save Changes" : "Add Product"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
