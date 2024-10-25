import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Container>
        <p className="text-white">Copyright &copy; 2024 My E-commerce App</p>
      </Container>
    </Navbar>
  );
};

export default Footer;
