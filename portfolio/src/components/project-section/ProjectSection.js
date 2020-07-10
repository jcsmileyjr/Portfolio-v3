import React, { useState} from 'react'
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
import bikeRide from "../../assets/project-images/BikeRide.mp4";
import meetup from "../../assets/project-images/meetup.mp4";
const listOfImageNames =["LevelUpDev", "edgeMotors", "blackjack", "activeCases", "monster", "agentPedia","bikeRide", "meetup"];
const listOfImages =[LevelUpDev, edgeMotors, blackjack, activeCases, monster, agentPedia, bikeRide, meetup];

const ProjectSection = () => {

const [showTechnologyOption, setTechnologyOption] = useState("All");

  return (
    <Container fluid>
      <Row className="project-section-summary">
        <Col>
          These are my favorite projects curated from more than 50 in my GitHub. Several of these are demos of tools I've created for my employer.
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
        </ToggleButtonGroup>
      </Row>
      <Row>
        
        {        
          finishedProjects
            .filter((project) => {
              return showTechnologyOption === "All" || showTechnologyOption === project.tech1 || showTechnologyOption === project.tech2
            })
            .map((project, id) => {
              let indexOfImage = listOfImageNames.findIndex(imageName => project.picture === imageName );            
                return <Project key={id}
                          type= {project.type}
                          picture= {listOfImages[indexOfImage]}
                          title= {project.title}
                          description= {project.description}
                          code= {project.code}
                          demo = {project.demo}
                          tech1 = {project.tech1}
                          tech2 = {project.tech2}
                          tech3 = {project.tech3}
                        />                    
            })          
        }
      </Row>
    </Container>
  );
};

export default ProjectSection;
