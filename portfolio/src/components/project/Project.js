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
					<video src={props.picture} className="video-style" controls autoPlay={true} />
				}
				{props.type ==="picture" &&
					<Image src={props.picture} className="img-fluid image-white-space" responsive= "true" />
				}			
				<article className="text-container">			
					<p className="whitespace">{props.title}</p>
					<p className="whitespace">{props.description}</p>
					<div className="project-display-tech whitespace">

					{(props.tech1 === "react" || props.tech2 ==="react" || props.tech3 ==="react") && 
						<section className="tech-image-style">
							<FontAwesomeIcon className="blueIcon" icon={faReact} />
							<p>React</p>
						</section>
					}

					{(props.tech1 === "reactNative" || props.tech2 ==="reactNative" || props.tech3 ==="reactNative") && 
						<section className="tech-image-style">
							<FontAwesomeIcon className="blueIcon" icon={faReact} />
							<p>React Native</p>
						</section>
					}					

					{(props.tech1 === "html" || props.tech2 ==="html" || props.tech3 ==="html") && 
						<section className="tech-image-style">
							<FontAwesomeIcon className="orangeIcon" icon={faHtml5} />
							<p>HTML5</p>
						</section>
					}
					{(props.tech1 === "css" || props.tech2 ==="css" || props.tech3 ==="css") && 
						<section className="tech-image-style">
							<FontAwesomeIcon className="blueIcon" icon={faCss3} />
							<p>CSS3</p>
						</section>
					}

					{(props.tech1 === "js" || props.tech2 ==="js" || props.tech3 ==="js") && 
						<section className="tech-image-style">
							<FontAwesomeIcon icon={faJs} />
							<p>JavaScript</p>
						</section>
					}

					{(props.tech1 === "bootstrap" || props.tech2 ==="bootstrap" || props.tech3 ==="bootstrap") && 
						<section className="tech-image-style">
							<FontAwesomeIcon className="purpleIcon"  icon={faBootstrap} />
							<p>Bootstrap</p>
						</section>
					}	

					{(props.tech1 === "node" || props.tech2 ==="node" || props.tech3 ==="node") && 
						<section className="tech-image-style">
							<FontAwesomeIcon className="greenIcon" icon={faNodeJs} />
							<p className="smallerFont">Node Express</p>
						</section>
					}

					{(props.tech1 === "angular" || props.tech2 ==="angular" || props.tech3 ==="angular") && 
						<section className="tech-image-style">
							<FontAwesomeIcon className="redIcon" icon={faAngular} />
							<p className="smallerFont">AngularJS</p>
						</section>
					}

					{(props.tech1 === "materializeCSS" || props.tech2 ==="materializeCSS" || props.tech3 ==="materializeCSS") && 
						<section className="tech-image-style">
							<p className="smallerFont materialize-text-style">Materialize CSS</p>
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
							<p className="align-text ">Code is private to employer</p>
						</div>
					}
				</article>				
			</section>
		</Col>
	);
}

export default Project;