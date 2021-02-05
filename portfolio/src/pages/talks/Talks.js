import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import "./talks.scss";

const Talks = () => {
  return (
    <Container fluid className="container-fluid">
      <Row>
        <Col xs={0} md={3}></Col>
        <Col xs={12} md={6}>
          <h1 className="center-item">Technical Talks</h1>
          <section className="center-item">
            <h3 className="center-item page-title">Help Me: A Behind The Scenes look at winning the Digital Ocean hackathon by JC Smiley</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/CVrkP9AhSOk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <hr></hr>
          </section>

          <section className="center-item">
            <h3 className="center-item page-title">Project Development: A Farmer's Guide from Sprout to Sweet Potato Pie</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PsrLIrMcVDU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </section>          

        </Col>
        <Col xs={0} sm={3}></Col>
      </Row>
    </Container>
  );
};

export default Talks;