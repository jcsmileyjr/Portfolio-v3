import React from 'react';
import {Col, Image} from 'react-bootstrap';

import './project.scss';
import HeadShot from '../../assets/personal/meetup-head-shot-small.jpg';
import coderBoy from '../../assets/personal/africanmanpc.png';

const Project = (props) => {
	return(
		<Col className="project-container">			
			<Image src={HeadShot} className="img-fluid image-white-space" responsive />			
			<p className="whitespace">Title</p>
			<p className="whitespace">Description</p>
			<div className="project-display-tech whitespace">
				<section className="tech-image-style">
					<Image src={coderBoy} fluid />
					<p className="project-text">Tech</p>
				</section>
				<section className="tech-image-style">
					<Image src={coderBoy} fluid />
					<p className="project-text">Tech</p>
				</section>
				<section className="tech-image-style">
					<Image src={coderBoy} fluid />
					<p className="project-text">Tech</p>
				</section>
				<section className="tech-image-style">
					<Image src={coderBoy} fluid />
					<p className="project-text">Tech</p>
				</section>
			</div>
			<div className="project-links-container whitespace">
				<a href="">GitHub</a>
				<a href="">Demo</a>
			</div>
		</Col>
	);
}

export default Project;