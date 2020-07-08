import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./about.scss";

import CCMeetupPic from "../../assets/about/code-connector-group.jpg";
import LookOut from "../../assets/about/smartCityLookOut.jpg";
import Hike from "../../assets/about/hike.jpg";

const About = () => {
  return (
    <Container fluid className="container-fluid">
      <Row>
        <Col xs={0} md={3}></Col>
        <Col xs={12} md={6}>
          <h1 className="page-title">Who is JC Smiley</h1>
          <section>
            <h3 className="page-title">Active in the Tech Community</h3>
            <div className="page-title">
              <Image src={CCMeetupPic} className="image-style" />
            </div>
            <p>
              Since 2018, I volunteered with the non-profit organization Code
              Connector Memphis chapter as a leader and helped co-found the
              North Mississippi chapter in 2019. As the Online Community Manager
              for the overall organization, my duties are to stimulate
              conversation and content in our online Slack community of over 500
              members. On a monthly basic, I help host up to three tech meetups
              (physical and virtual) a month in Memphis, TN.
            </p>
            <p>
              Code Connector is a community of aspiring developers and mentors
              networking together. It hosts online and physical tech meetups to
              fosters a safe friendly environment for learning and for mentors
              teaching those trying to break into the field.
            </p>
            <p>
              Memphis, TN has a growing tech community and meetups for every
              technology and interest. I regularly attend DevMemphis, Memphis
              Web Workers, and GDGMemphis.
            </p>
          </section>

          <section>
            <h3 className="page-title">Technical Experience</h3>
            <p>
              I graduated from the University of Mississippi with a Bachelor
              degree in MIS and Northwest Community College with an Associate
              degree in CIS.
            </p>
            <p>
              My education has extended to online conferences in 2020 such as
              DevFest Memphis, JuneteenthConf, React Byte Conference,
              Magnolia.js, and Free Code Camp Lockdown Conf.
            </p>
            <p>
              In 2019, I attended my first physical conferencs: Changing the
              Color of Tech Memphis and SQLSaturday Memphis.
            </p>
          </section>

          <section>
            <h3 className="page-title">Team Experience</h3>
            <div className="page-title">
              <Image src={LookOut} className="image-style" />
            </div>
            <p>
              A software design firm contracted a friend and I to build a mobile
              app for the antique car museum Edge Motors Museum in Memphis. This
              endeavor allowed me to work with designers, product owners, and a
              co-developer on a product that was used by 700 users on Grand
              Opening day and every day at the museum since.
            </p>
            <p>Hackathons have offered great opportunities to work in teams.</p>
            <ul>
              <li>
                At GiveCamp 2019, worked with a team of 4 to build a WordPress
                website for the non-profit Sweet Cheeks Diaper Ministry. ​The
                non-profit purpose is to provide free diapers and other goods to
                single mothers.
              </li>
              <li>
                At SmartCity 2019, collaborated with a team of 5 to build a
                mobile app, LookOut. The objective was to warn drivers of
                approaching EMS vehicles.
              </li>
              <li>
                AT HackMemphis 2018, developed a web app named Posey with a team
                of 6. It was a video recording app that use machine learning to
                compare a picture of a person posing to the user’s pose.
              </li>
            </ul>
          </section>
          <section>
            <h3 className="page-title">Non-tech Related</h3>
            <div className="page-title">
              <Image src={Hike} className="image-style" />
            </div>
            <p>
              I come from a family of gardeners and my personal favorite plants
              to growing is peppers, cucumbers, melons, green beans, lettuce,
              and sweet potatoes.
            </p>
            <p>
              I fell in love with hiking. I have hiked most of the state parks
              in north Mississippi and around Memphis, TN.
            </p>
          </section>
        </Col>
        <Col xs={0} sm={3}></Col>
      </Row>
    </Container>
  );
};

export default About;
