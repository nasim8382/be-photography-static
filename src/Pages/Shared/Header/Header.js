import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';
import logo from "../../../images/logo.png";
import CustomLink from "../CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
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
                <CustomLink className="me-5 menu-item" to="home">HOME</CustomLink>
                <CustomLink className="me-5 menu-item" to="blogs">BLOGS</CustomLink>
                <CustomLink className="me-5 menu-item" to="about">ABOUT</CustomLink>
                <CustomLink className="me-5 menu-item" to="contact">CONTACT</CustomLink>
                {
                  user ?
                  <button className="btn btn-link text-white text-decoration-none sign-out-btn" onClick={handleSignOut}>SIGN OUT</button> :
                  <CustomLink className="me-5 menu-item" to="login">SIGN IN</CustomLink>
                }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
