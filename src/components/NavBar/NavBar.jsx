import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">BskBeats Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Beats</Nav.Link>
            <Nav.Link href="#features">Samples/Loops</Nav.Link>
            <Nav.Link href="#pricing">Drum Kits</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    );
};

export default NavBar;