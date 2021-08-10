import React from 'react';
import { useContext } from 'react';
import { Nav, Navbar ,Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import PersonIcon from '@material-ui/icons/Person';

const Menubar = () => {
    const [loggedInUser , setLoggedInUser] =useContext(UserContext)
    return (
        <Navbar bg="primary" variant='dark' expand="lg">
        <Container>
          <Navbar.Brand href="#home">Alif-Al-Hasan</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
              <Nav.Link href="#link">Contact Us</Nav.Link>
              <Nav.Link href="#link"><PersonIcon />{loggedInUser.name}</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Menubar;