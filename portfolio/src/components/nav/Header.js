import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.scss";

import coderBoy from "../../assets/personal/africanmanpc.png";

const Header = () => {
  return (
    <Container fluid className="nav-container">
      <Navbar collapseOnSelect expand="md">
        <Navbar.Brand>
          <Image src={coderBoy} fluid className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end nav-links"
          id="responsive-navbar-nav"
        >
          <Nav>
            <Nav.Item className="nav-links-container-style">
              <Link to="/" className="link-style">
                Projects
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-links-container-style">
              <Link to="/about" className="link-style">
                About
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-links-container-style">
              <Link to="/blog" className="link-style">
                Blogs
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-links-container-style">
              <a
                href="../../assets/personal/jcsmileyjr-resume.pdf"
                download
                className="link-style"
              >
                Download Resume
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
