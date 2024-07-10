import React from "react";
import { Navbar, Nav, Container,NavLink } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" id="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <FontAwesomeIcon icon={faCode} /> Rudra Panchal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">   
          <Nav className="me-auto">
            <a className="btnclick" href="#navbar">Home</a>
            <a className="btnclick" href="#aboutme">About</a>
            <a className="btnclick" href="#skills">Skills</a>
            <a className="btnclick" href="#works">Works</a>
            <a className="btnclick" href="#contact">Contact</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
