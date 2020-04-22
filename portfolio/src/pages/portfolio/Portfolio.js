import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './portfolio.scss';
import Header from '../../components/nav/Header.js';

const Portfolio = () => {
	return(
		<Container fluid className="container-fluid">
			<Header />
			<h1>Hello World</h1>
		</Container>
	);
}

export default Portfolio;