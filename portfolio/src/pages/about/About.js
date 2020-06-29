import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.scss";

const About = () => {
  return (
    <Container fluid className="container-fluid">
      <Row>
        <Col xs={0} sm={3}></Col>
        <Col xs={12} sm={6}>
          <h1 className="page-title">Who is JC Smiley</h1>
          <section>
            <h3 className="page-title">Active in the Tech Community</h3>
            <p>Since 2018, I volunteered with the non-profit organization Code Connector Memphis
              chapter as a leader and helped co-found the North Mississippi chapter in 2019. As the 
              Online Community Manager for the overall organization, my duties are to stimulate conversation and 
              content in our online Slack community of over 500 members. On a monthly basic, I help 
              host up to three tech meetups (physical and virtual) a month in Memphis, TN. 
            </p>
            <p>
              Code Connector is a community of aspiring developers and mentors
              networking together. It hosts online and physical tech meetups to
              fosters a safe friendly environment for learning and for mentors
              teaching those trying to break into the field.
            </p>
            <p>
              Memphis, TN has a growing tech community and meetups for every technology and interest.
              I regularly attend DevMemphis, Memphis Web Workers, and GDGMemphis.
            </p>
          </section>

          <section>
            <h3 className="page-title">Technical Experience</h3>
            <p>I graduated from the University of Mississippi with a Bachelor degree in MIS and 
              North West Community College with an Associte degree in CIS.
            </p>
            <p>
              My education has extended to online conferences in 2020 such as DevFest Memphis, 
              JuneteenthConf, React Byte Conference, Magnolia.js, and Free Code Camp Lockdown Conf.            
            </p>
            <p>
            In 2019, I attended my first physical conferencs: Changing the Color of Tech Memphis and SQLSaturday Memphis.
            </p>
          </section>

          <section>
            <h3 className="page-title">Team Experience</h3>
            <p>Hackathons have offered great opportunities to work in teams.</p>
            <ul>
              <li>At GiveCamp 2019, worked with a team of 4 to build a WordPress website for the non-profit Sweet Cheeks Diaper Ministry. ​The non-profit purpose is to provide free diapers and other goods to single mothers.</li>
              <li>At SmartCity 2019, collaborated with a team of 5 to build a mobile app, LookOut. The objective was to warn drivers of approaching EMS vehicles.</li>
              <li>AT HackMemphis 2018, developed a web app named Posey with a team of 6. It was a video recording app that use machine learning to compare a picture of a person posing to the user’s pose.</li>
            </ul>
            <p>
            A software design firm contracted a friend and I to build a mobile app for the antique car museum Edge Motors Museum in Memphis.
            This endevor allowed me to work with designers, product owners, and a co-devloper on a product that was used by 700 users on Grand Opening day
            and every day at the museum since. 
            </p>
          </section>           
        </Col>
        <Col xs={0} sm={3}></Col>
      </Row>
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
