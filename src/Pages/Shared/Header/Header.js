import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';
import logo from "../../../images/logo.png";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} height={40} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="me-5 menu-item" as={Link} to="home">HOME</Nav.Link>
              <Nav.Link className="me-5 menu-item" as={Link} to="blogs">BLOGS</Nav.Link>
              <Nav.Link className="me-5 menu-item" as={Link} to="about">ABOUT</Nav.Link>
              <Nav.Link className="me-5 menu-item" as={Link} to="contact">CONTACT</Nav.Link>
              <Nav.Link className="me-5 menu-item" as={Link} to="login">LOGIN</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
