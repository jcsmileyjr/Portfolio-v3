import React from "react";
import {
  Container,
  Row,
  Col,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";

import "./projectSection.scss";
import Project from "../project/Project.js";
import LevelUpDev from "../../assets/project-images/level-up-dev.mp4";
import edgeMotors from "../../assets/project-images/edge-motors.jpg";
import blackjack from "../../assets/project-images/black-jack.mp4";
import activeCases from "../../assets/project-images/active-cases.png";
import monster from "../../assets/project-images/monster.png";
import agentPedia from "../../assets/project-images/agent-pedia.png";

const ProjectSection = () => {
  return (
    <Container>
      <Row className="project-section-summary">
        <Col>
          I'm a self-taught full-stack developer with a focus on web and mobile
          development. My primary passion is building up my local tech community
          by organizing tech meetups. I'm a Code Connector's Memphis Chapter
          leader and a co-founder of the North Mississippi chapter. You can
          contact me at jcsmileyjr@gmail.com or linkedin.com/in/jcsmileyjr or
          twitter.com/JCSmiley4
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
          >
            All
          </ToggleButton>
          <ToggleButton
            type="radio"
            name="technologyType"
            value="NodeExpress"
            className="space-Between-Radio-Buttons"
            variant="outline-primary"
          >
            Node/Express
          </ToggleButton>
          <ToggleButton
            type="radio"
            name="technologyType"
            value="ReactNative"
            className="space-Between-Radio-Buttons"
            variant="outline-primary"
          >
            React Native (mobile)
          </ToggleButton>
          <ToggleButton
            type="radio"
            name="technologyType"
            value="React"
            className="space-Between-Radio-Buttons"
            variant="outline-primary"
          >
            React
          </ToggleButton>
          <ToggleButton
            type="radio"
            name="technologyType"
            value="AngularJS"
            className="space-Between-Radio-Buttons"
            variant="outline-primary"
          >
            AngularJS
          </ToggleButton>
        </ToggleButtonGroup>
      </Row>
      <Row>
        <Project
          type="video"
          picture={LevelUpDev}
          title="Level Up Dev"
          description="Mobile app to help developers plan their goals, milestones, and view successes."
          reactNative
          html
          bootstrap
          code="https://github.com/jcsmileyjr/LevelUp"
          demo="https://play.google.com/store/apps/details?id=com.levelup.mobile"
        />
        <Project
          type="picture"
          picture={edgeMotors}
          title="Edge Motors Car Museum"
          description="Paid Freelance mobile app completed in April of 2019"
          reactNative
          css
          html
        />
        <Project
          type="video"
          picture={blackjack}
          title="Black-Jack"
          description="A traditional Black-Jack card game developed as a React web app."
          react
          html
          bootstrap
          code="https://github.com/jcsmileyjr/BlackJack"
          demo="https://jcsmileyjr.github.io/BlackJack/"
        />
      </Row>
      <Row>
        <Project
          type="picture"
          picture={activeCases}
          title="Active Cases"
          description="A case management app designed to keep the user informed of the status of each case."
          react
          node
          bootstrap
          code="https://github.com/jcsmileyjr/active-cases"
          demo="https://active-cases.herokuapp.com/"
        />
        <Project
          type="picture"
          picture={monster}
          title="Chasing the 10 Pound Monster"
          description="A biggest loser style web app where the objective is to be the first player to lose 10 pounds."
          angular
          node
          bootstrap
          code="https://github.com/jcsmileyjr/10MON"
          demo="https://jcsmileyjr.github.io/10MON/"
        />
        <Project
          type="picture"
          picture={agentPedia}
          title="Agent Pedia"
          description="Online field guide for gaming law enforcement agents."
          angular
          node
          materializeCSS
          code="https://github.com/jcsmileyjr/agent-guide"
          demo="https://jcsmileyjr.github.io/agent-guide/"
        />
      </Row>
    </Container>
  );
};

export default ProjectSection;
