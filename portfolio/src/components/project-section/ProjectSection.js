import React from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';

import './projectSection.scss';

const ProjectSection = () => {
	return(
		<Container fluid>
			<Row>
				<Col>I'm a self-taught full-stack developer with a focus on web and mobile development. My primary passion is building up my local tech community by organizing tech meetups.
				I'm a Code Connector's Memphis Chapter leader and a co-founder of the North Mississippi chapter. You can contact me at jcsmileyjr@gmail.com or linkedin.com/in/jcsmileyjr or twitter.com/JCSmiley4				
				</Col>
			</Row>
			<Row className="project-selection-section">
				<Button variant="light" active>All</Button>
				<Button variant="light">Node/Express</Button>
				<Button variant="light">React Native (mobile)</Button>
				<Button variant="light">React</Button>
				<Button variant="light">AngularJS</Button>
			</Row>
		</Container>
	);
}

export default ProjectSection;