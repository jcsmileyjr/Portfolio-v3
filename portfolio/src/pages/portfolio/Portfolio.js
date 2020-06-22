import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './portfolio.scss';

import Skills from '../../components/skills/Skills.js';
import ProjectSection from '../../components/project-section/ProjectSection.js';

const Portfolio = () => {
	return(
		<Container fluid className="container-fluid">
			<Row className="fixRow">
				<Col sm={4} lg={3}><Skills /></Col>
				<Col sm={8} lg={9}><ProjectSection /></Col>
			</Row>
		</Container>
	);
}

export default Portfolio;