import React from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';

import './projectSection.scss';
import HeadShot from '../../assets/personal/meetup-head-shot-small.jpg';
import coderBoy from '../../assets/personal/africanmanpc.png';

const Project = (props) => {
	return(
		<Col className="project-container">			
			<Image src={HeadShot} className="img-fluid" responsive />			
			<p>Title</p>
			<p>Description</p>
			<div className="project-display-tech">
				<section className="tech-image-style">
					<Image src={coderBoy} fluid />
					<p>Tech</p>
				</section>
				<section className="tech-image-style">
					<Image src={coderBoy} fluid />
					<p>Tech</p>
				</section>
				<section className="tech-image-style">
					<Image src={coderBoy} fluid />
					<p>Tech</p>
				</section>
				<section className="tech-image-style">
					<Image src={coderBoy} fluid />
					<p>Tech</p>
				</section>
			</div>
			<div className="project-links-container">
				<a href="">GitHub</a>
				<a href="">Demo</a>
			</div>
		</Col>
	);
}

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
			<Row>
				<Project />
				<Project />
				<Project />
			</Row>
			<Row>
				<Project />
				<Project />
				<Project />
			</Row>
		</Container>
	);
}

export default ProjectSection;