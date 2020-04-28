import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './portfolio.scss';

import Header from '../../components/nav/Header.js';
import Skills from '../../components/skills/Skills.js';
import ProjectSection from '../../components/project-section/ProjectSection.js';

const Portfolio = () => {
	return(
		<Container fluid className="container-fluid">
			<Header />
			<Row className="fixRow">
				<Col sm={4}><Skills /></Col>
				<Col sm={8}><ProjectSection /></Col>
			</Row>
		</Container>
	);
}

export default Portfolio;