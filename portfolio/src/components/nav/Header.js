import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.scss";
import coderBoy from "../../assets/personal/africanmanpc.png";
import resume from '../../assets/personal/jcsmileyjr-resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faTwitter, faGithub, faDev} from '@fortawesome/free-brands-svg-icons'
const Header = () => {
  return (
    <Container fluid className="nav-container">
      <Navbar collapseOnSelect expand="md">
        <Navbar>
          <Image src={coderBoy} fluid className="logo" />
          <a href="https://www.linkedin.com/in/jcsmileyjr/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="social-media-icons" icon={faLinkedinIn} />
          </a>
          <a href="https://twitter.com/JCSmiley4" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="social-media-icons" icon={faTwitter} />
          </a>
          <a href="https://github.com/jcsmileyjr" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="social-media-icons" icon={faGithub} />
          </a>
          <a href="https://dev.to/jcsmileyjr" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="social-media-icons" icon={faDev} />
          </a>
        </Navbar>
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
                <a href="https://gumroad.com/l/breakingIntoTech" target="_blank" rel="noopener noreferrer" className="link-style">E-Book</a>
            </Nav.Item>
            <Nav.Item className="nav-links-container-style">
              <a
                href={resume}
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
