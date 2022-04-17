import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';
import logo from "../../../images/logo.png";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="home">
            <img src={logo} height={40} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
                <CustomLink className="me-5 menu-item" as={Link} to="home">HOME</CustomLink>
                <CustomLink className="me-5 menu-item" as={Link} to="blogs">BLOGS</CustomLink>
                <CustomLink className="me-5 menu-item" as={Link} to="about">ABOUT</CustomLink>
                <CustomLink className="me-5 menu-item" as={Link} to="contact">CONTACT</CustomLink>
                <CustomLink className="me-5 menu-item" as={Link} to="login">SIGN IN</CustomLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
