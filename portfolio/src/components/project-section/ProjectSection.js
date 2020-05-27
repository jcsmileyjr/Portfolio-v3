import React, { useState, useEffect } from 'react'
import {
  Container,
  Row,
  Col,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";

import "./projectSection.scss";
import Project from "../project/Project.js";

import finishedProjects from '../../data/finishedProjects.js';
import LevelUpDev from "../../assets/project-images/level-up-dev.mp4";
import edgeMotors from "../../assets/project-images/edge-motors.jpg";
import blackjack from "../../assets/project-images/black-jack.mp4";
import activeCases from "../../assets/project-images/active-cases.png";
import monster from "../../assets/project-images/monster.png";
import agentPedia from "../../assets/project-images/agent-pedia.png";
const listOfImageNames =["LevelUpDev", "edgeMotors", "blackjack", "activeCases", "monster", "agentPedia"];
const listOfImages =[LevelUpDev, edgeMotors, blackjack, activeCases, monster, agentPedia];

const ProjectSection = () => {

const [showTechnologyOption, setTechnologyOption] = useState("All");

  return (
    <Container>
      <Row className="project-section-summary">
        <Col>
          I'm a self-taught full-stack developer with a focus on web and mobile
          development. My primary passion is building up my local tech community
          by organizing tech meetups. I'm a Code Connector's Memphis Chapter
          leader and a co-founder of the North Mississippi chapter. You can
          contact me at jcsmileyjr@gmail.com or on <a href="https://linkedin.com/in/jcsmileyjr" target="_blank" rel="noopener noreferrer">LinkedIn</a> or
          on <a href="https://twitter.com/JCSmiley4" target="_blank" rel="noopener noreferrer">Twitter</a>.
        </Col>
      </Row>
      <Row className="center-buttons">
        <ToggleButtonGroup
          type="radio"
          name="technologyType"
          toggle
          defaultValue="All"
        >
          <ToggleButton
            type="radio"
            name="technologyType"
            value="All"
            className="space-Between-Radio-Buttons"
            variant="outline-primary"
            onClick = {()=> {setTechnologyOption("All")}}
          >
            All
          </ToggleButton>
          <ToggleButton
            type="radio"
            name="technologyType"
            value="NodeExpress"
            className="space-Between-Radio-Buttons"
            variant="outline-primary"
            onClick = {()=> {setTechnologyOption("node")}}
          >
            Node/Express
          </ToggleButton>
          <ToggleButton
            type="radio"
            name="technologyType"
            value="ReactNative"
            className="space-Between-Radio-Buttons"
            variant="outline-primary"
            onClick = {()=> {setTechnologyOption("reactNative")}}
          >
            React Native (mobile)
          </ToggleButton>
          <ToggleButton
            type="radio"
            name="technologyType"
            value="React"
            className="space-Between-Radio-Buttons"
            variant="outline-primary"
            onClick = {()=> {setTechnologyOption("react")}}
          >
            React
          </ToggleButton>
          <ToggleButton
            type="radio"
            name="technologyType"
            value="AngularJS"
            className="space-Between-Radio-Buttons"
            variant="outline-primary"
            onClick = {()=> {setTechnologyOption("angular")}}
          >
            AngularJS
          </ToggleButton>
        </ToggleButtonGroup>
      </Row>
      <Row>
        
        {        
          finishedProjects.map((project, id) => {
            let indexOfImage = listOfImageNames.findIndex(imageName => project.picture === imageName );

            if(showTechnologyOption === "All" || showTechnologyOption === project.tech1 || showTechnologyOption === project.tech2){
              return <Project key={id}
                        type= {project.type}
                        picture= {listOfImages[indexOfImage]}
                        title= {project.title}
                        description= {project.description}
                        code= {project.code}
                        demo = {project.demo}
                      />
            }        
          })
          
        }
      </Row>
    </Container>
  );
};

export default ProjectSection;
