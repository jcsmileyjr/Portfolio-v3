import React from 'react';
import {Container, Row, Col, Image, Nav, Navbar} from 'react-bootstrap';
import './header.scss';

import coderBoy from '../../assets/personal/africanmanpc.png';

const Header = () => {
	return(
		<Container fluid className="nav-container">
			<Navbar collapseOnSelect expand="md">
				<Navbar.Brand><Image src={coderBoy} fluid className="logo"/></Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse className="justify-content-end nav-links" id="responsive-navbar-nav">
					<Nav >
						<Nav.Item className="nav-links-container-style">
							<Nav.Link className="nav-links-text-style">Projects</Nav.Link>
						</Nav.Item>
						<Nav.Item className="nav-links-container-style">
							<Nav.Link className="nav-links-text-style">About</Nav.Link>
						</Nav.Item>
						<Nav.Item className="nav-links-container-style">
							<Nav.Link className="nav-links-text-style">DownLoad Resume</Nav.Link>
						</Nav.Item>
						<Nav.Item className="nav-links-container-style">
							<Nav.Link className="nav-links-text-style">Blogs</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
	
			</Navbar>
	
		</Container>
	);
}

export default Header;