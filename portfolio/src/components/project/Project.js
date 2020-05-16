import React from 'react';
import {Col, Image} from 'react-bootstrap';

import './project.scss';
import HeadShot from '../../assets/personal/meetup-head-shot-small.jpg';
import coderBoy from '../../assets/personal/africanmanpc.png';

const Project = (props) => {
	return(
		<Col xs={12} sm={12} md={12} lg={4} className="project-container">
			<section className="data-container">
				{props.type ==="video" &&
					<video className="video-style" controls autoPlay="true">
						<source src={props.picture} type="video/mp4" />
					</video>
				}
				{props.type ==="picture" &&
					<Image src={props.picture} className="img-fluid image-white-space" responsive />
				}			
							
				<p className="whitespace">{props.title}</p>
				<p className="whitespace">{props.description}</p>
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
			</section>
		</Col>
	);
}

export default Project;