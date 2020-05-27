import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import './skills.scss'

import HeadShot from '../../assets/personal/meetup-head-shot-small.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
const languages = ["JavaScript", "HTML5", "CSS3", "Java", "Python"];
const frameworks = ["ReactJS", "React Native", "Angular", "AngularJS", "Node/Expres", "Spring Boot", "Boostrap"];

const DisplaySkills = (props) => {
	return(
		<div className="align-Item-Side-By-Side"><FontAwesomeIcon icon={faCheck} className="check-icon-style" />{props.text}</div>
	); 
}

const Skills = () => {
	return(
		<Container fluid>
			{/*My personal head shot */}
			<Row>
				<Col xs={{span:6,offset:3}} className="center-content">
					<Image src={HeadShot} className="image-style" />
				</Col>
			</Row>
			
			{/*My Name */}
			<Row>
				<Col className="center-content">
					<p className="portfolio-name-style">JC Smiley Jr.</p>
				</Col>
			</Row>

			{/*Personal Titles */}
			<Row className="center-content">
				<Col sm={12}>Software Developer</Col>
				<Col xs={{span:2,offset:5}} sm={{span:3,offset:4}} md={{span:2,offset:5}} lg={{span:2, offset:5}} className="separator-bar"></Col>	
				<Col sm={12}>Tech Meetup Organizer</Col>		
			</Row>
			
			<Row className="white-space-above">
				{/*Skills: Languages */}
				<Col xs={6} sm={{span:6,offset:3}} md={{span:9, offset:3}} className="white-space-below">
					<h5>Languages</h5>
					{
						languages.map((language, id) => {
							return(
								<DisplaySkills key={id} text={language} />
							);						
						})
					}
				</Col>
				{/*Skills: Frameworks */}
				<Col xs={6} sm={{span:6,offset:3}} md={{span:9, offset:3}} className="">
					<h5>Framework</h5>
					{
						frameworks.map((framework, id) => {
							return(
								<DisplaySkills key={id} text={framework} />
							);						
						})
					}
				</Col>	
			</Row>
		</Container>
	);
}



export default Skills;