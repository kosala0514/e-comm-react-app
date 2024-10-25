/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
const ProductCard = ({ product }) => {
  return (
    <Card>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>${product.price}</Card.Text>
        {/* <Button variant="primary">Add to Cart</Button> */}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;