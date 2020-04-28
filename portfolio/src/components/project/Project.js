import React from 'react';
import {Col, Image} from 'react-bootstrap';

import './project.scss';
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

export default Project;