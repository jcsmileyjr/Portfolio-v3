import React from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';

import './projectSection.scss';
import Project from '../project/Project.js';
import LevelUpDev from '../../assets/project-images/level-up-dev.mp4';
import edgeMotors from '../../assets/project-images/edge-motors.jpg';
import blackjack from '../../assets/project-images/black-jack.mp4';
import activeCases from '../../assets/project-images/active-cases.png';
import monster from '../../assets/project-images/monster.png';
import agentPedia from '../../assets/project-images/agent-pedia.png';

const ProjectSection = () => {
	return(
		<Container fluid>
			<Row className="project-section-summary">
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
				<Project type="video" picture={LevelUpDev} />
				<Project type="picture" picture={edgeMotors}/>
				<Project type="video" picture={blackjack}/>
			</Row>
			<Row>
				<Project type="picture" picture={activeCases}/>
				<Project type="picture" picture={monster}/>
				<Project type="picture" picture={agentPedia}/>
			</Row>
		</Container>
	);
}

export default ProjectSection;