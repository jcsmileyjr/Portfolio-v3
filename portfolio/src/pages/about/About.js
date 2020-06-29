import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.scss";

const About = () => {
  return (
    <Container fluid className="container-fluid">
      <Row>
        <Col>
          <h1 className="page-title">Who is JC Smiley</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Education</h3>
          <p>MIS degree from University of Mississippi</p>
          <p>CIS degrees from North West Community College</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Code Connector Leader</h4>
          <p>
            Code Connector is a community of aspiring developers and mentors
            networking together. It host online and physical tech meetups to
            fosters an safe, friendly environment for learning and for mentors
            to teaching those trying to break into the field.{" "}
          </p>
          <p>
            Since 2018, I volunteered with the Code Connector Memphis
            chapter as a leader and helped co-found the North Mississippi
            chapter in 2019. As the Online Community Leader for the overall 
            organization, I stimulate conversation and content in our online
            Slack community of over 500 members.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Active in the Community</h4>
          <h5>Meetup Groups</h5>
          <ul>
            <li>DevMemphis</li>
            <li>GDGMemphis</li>
            <li>Memphis Web Workers</li>
            <li>Code Connector's Memphis and North Mississippi chapters</li>
          </ul>
          <h5>Hackathons</h5>
          <ul>
            <li>Give-Camp 2020 Hackathon</li>
            <li>Give-Camp 2019 Hackathon:</li>
            <li>Smart City Hackathon 2019</li>
            <li>Hack-Memphis 2018</li>
          </ul>
          <h5>Conferences</h5>
          <ul>
            <li>DevFest Memphis 2020</li>
            <li>JuneteenthConf 2020</li>
            <li>React Byte Conference 2020</li>
            <li>Magnolia.js 2020</li>
            <li>Free Code Camp Lockdown Conf 2020</li>
            <li>Changing the Color of Tech Memphis 2019</li>
            <li>SQLSaturday Memphis 2019</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
        <h4>Nature Ethusiastic</h4>        
          <p>I love to garden. My favorite vegetables to plant is peppers, cucumbers, melons, green beans, lettuce, and sweet potatoes.</p>
          <p>I am a amature long-distance bicycle rider. The farthest I have ridden on a single ride is 35 miles.</p>
          <p>I fell in love with hiking. I have hiked most of the state parks in north Mississippi and around Memphis, TN.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
