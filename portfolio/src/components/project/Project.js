import React from 'react';
import {Col, Image} from 'react-bootstrap';

import './project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faCss3, faHtml5, faJs, faNodeJs, faBootstrap, faAngular} from '@fortawesome/free-brands-svg-icons'

const Project = (props) => {
	return(
		<Col xs={12} sm={12} md={12} lg={4} className="project-container">
			<section className="data-container">
				{props.type ==="video" &&
					<video className="video-style" controls autoPlay={true}>
						<source src={props.picture} type="video/mp4" />
					</video>
				}
				{props.type ==="picture" &&
					<Image src={props.picture} className="img-fluid image-white-space" responsive= "true" />
				}			
							
				<p className="whitespace">{props.title}</p>
				<p className="whitespace">{props.description}</p>
				<div className="project-display-tech whitespace">
					{props.react && 
						<section className="tech-image-style">
							<FontAwesomeIcon className="blueIcon" icon={faReact} />
							<p>React</p>
						</section>
					}

					{props.reactNative && 
						<section className="tech-image-style">
							<FontAwesomeIcon className="blueIcon" icon={faReact} />
							<p>React Native</p>
						</section>
					}					

					{props.html && 
						<section className="tech-image-style">
							<FontAwesomeIcon className="orangeIcon" icon={faHtml5} />
							<p>HTML5</p>
						</section>
					}
					{props.css && 
						<section className="tech-image-style">
							<FontAwesomeIcon className="blueIcon" icon={faCss3} />
							<p>CSS3</p>
						</section>
					}

					{props.js && 
						<section className="tech-image-style">
							<FontAwesomeIcon icon={faJs} />
							<p>JavaScript</p>
						</section>
					}

					{props.bootstrap && 
						<section className="tech-image-style">
							<FontAwesomeIcon className="purpleIcon"  icon={faBootstrap} />
							<p>Bootstrap</p>
						</section>
					}	

					{props.node && 
						<section className="tech-image-style">
							<FontAwesomeIcon className="greenIcon" icon={faNodeJs} />
							<p className="smallerFont">Node Express</p>
						</section>
					}

					{props.angular && 
						<section className="tech-image-style">
							<FontAwesomeIcon className="redIcon" icon={faAngular} />
							<p className="smallerFont">AngularJS</p>
						</section>
					}

					{props.materializeCSS && 
						<section className="tech-image-style">
							<p className="smallerFont">Materialize CSS</p>
						</section>
					}							

				</div>
				{props.code &&
					<div className="project-links-container whitespace">
						<a href={props.code}>GitHub</a>
						<a href={props.demo}>Demo</a>
					</div>
				}

				{!props.code  &&
					<div className="whitespace">
						<p>The code is private to the employer</p>
					</div>
				}				
			</section>
		</Col>
	);
}

export default Project;