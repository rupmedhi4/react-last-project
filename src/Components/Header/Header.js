import React from 'react'
import {Navbar,Container,Nav,Button} from 'react-bootstrap';
import Cart from '../Cart/Cart';

const header = () => {
  return (
    <div>
      <Navbar className='' bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Medicine-Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Cart title="CART" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default header
