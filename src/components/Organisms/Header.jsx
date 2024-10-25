import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed='top'>
      <Container>
        <Navbar.Brand href="#home">My E-commerce App - Admin</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">Products</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;