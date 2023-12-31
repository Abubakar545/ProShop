import React from 'react';
import { Navbar, Nav, Container, NavbarCollapse} from 'react-bootstrap';
import { FaShoppingCart, FaUser} from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header>
         <Navbar bg="success" variant='dark' expand="lg" collapseOnSelect>
           <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>
                <img src={logo} alt="logo"/>
                ProShop
                </Navbar.Brand>
            </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <NavbarCollapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <LinkContainer to="/cart">
                    <Nav.Link>
                      <FaShoppingCart />
                       Cart
                    </Nav.Link>
                    </LinkContainer>
                  <LinkContainer  to="/login">
                    <Nav.Link>
                      <FaUser />
                       Sign In
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
              </NavbarCollapse>
           </Container>
         </Navbar>
    </header>
  )
}

export default Header