import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./about.scss";

import CCMeetupPic from "../../assets/about/code-connector-group.jpg";
import LookOut from "../../assets/about/smartCityLookOut.jpg";
import Hike from "../../assets/about/hike.jpg";
import BikeRide from "../../assets/about/bike-ride.jpg";
import HelpMeTablet from "../../assets/about/help-me-tablet.PNG"

const About = () => {
  return (
    <Container fluid className="container-fluid">
      <Row>
        <Col xs={0} md={3}></Col>
        <Col xs={12} md={6}>
          <h1 className="page-title">Who is JC Smiley?</h1>
          <section>
          <h3 className="page-title">Hackathon Winner</h3>
            <div className="page-title">
              <Image src={HelpMeTablet} className="image-style" />
            </div>
            <p>
            On January 10, 2021, a friend and I submitted a mental health crisis app to the DigitalOcean 2021 App Hackathon. 
            To our surprise, out of 4 categories and 600 teams, we won the grand prize in the “Power to the People” category. 
            My greatest joy is that I helped create something that supports my friends and family who struggle with mental health issues.
            </p>
            <p>
            The app is called “Help Me” and is designed primarily as an “SOS” (distress signal) to a selected circle of trusted people 
            when someone is going through a mental health crisis. The goal is for the user to build a trusted community around themselves 
            with private conversations and provide a system to show the user's range of emotions.
            </p>
            <hr></hr>
          </section>
          <section>
            <h3 className="page-title">Active in the Tech Community</h3>
            <div className="page-title">
              <Image src={CCMeetupPic} className="image-style" />
            </div>
            <p>
            Since 2018, I have volunteered as a leader with the Memphis chapter of the 
            non-profit organization Code Connector. I also co-founded 
            the North Mississippi chapter in 2019. As the online community manager 
            for the overall organization, my duties are to stimulate conversation 
            and content within our online Slack community which consists of over 
            700 members.  On a monthly basis, I help host up to seven physical 
            or virtual tech meetups a month in Memphis, TN.
            </p>
            <p>
            Code Connector is a community of aspiring developers and mentors networking 
            together. It hosts online and physical tech meetups to foster a safe, friendly 
            environment for learning and for mentors to teach people trying to break 
            into the field of development.
            </p>
            <p>
            Memphis, TN has a growing tech community and meetups for every technology and 
            interest. I regularly attend DevMemphis, Memphis Web Workers, and GDGMemphis.
            </p>
            <hr></hr>
          </section>

          <section>
            <h3 className="page-title">Technical Experience</h3>
            <p>
            I graduated from the University of Mississippi with a Bachelor degree in MIS 
            and from Northwest Community College with an Associate degree in CIS.
            </p>
            <p>
            My education has extended to online conferences in 2020 such as DevFest Memphis, 
            JuneteenthConf, React Byte Conference, Magnolia.js, and Free Code Camp Lockdown Conf.
            </p>
            <p>
              In 2019, I attended my first physical Conference: Changing the
              Color of Tech in Memphis. Later that year I attended a SQLSaturday Memphis conference.
            </p>
            <hr></hr>
          </section>

          <section>
            <h3 className="page-title">Team Experience</h3>
            <div className="page-title">
              <Image src={LookOut} className="image-style" />
            </div>
            <p>
            A software design firm contracted a friend and I to build a mobile app for Edge Motors 
            Museum, which is a museum for antique cars located in Memphis. This endeavor allowed me 
            to work with designers, product owners, and a co-developer on a product that was used 
            by over 700 users on the grand opening day.  Since then, it is used heavily daily.
            </p>
            <p>Hackathons have offered great opportunities to work in teams.</p>
            <ul>
              <li>
              At GiveCamp 2019, I worked with a team of 4 to build a WordPress website for the non-profit 
              Sweet Cheeks Diaper Ministry. ​This non-profit’s purpose is to provide free diapers and other 
              goods to single mothers.
              </li>
              <li>
              At SmartCity 2019, I collaborated with a team of 5 to build LookOut, a mobile app. The objective 
              was to warn drivers of approaching EMS vehicles.
              </li>
              <li>
              At HackMemphis 2018, I developed a web app named Posey with a team of 6 other members. It was 
              a video recording app that uses machine learning to compare a picture of a person posing to the user’s pose.
              </li>
            </ul>
            <hr></hr>
          </section>
          <section>
            <h3 className="page-title">Non-tech Related Passions</h3>
            <div className="page-title multiple-images">
              <Image src={Hike} className="image-style" />
              <Image src={BikeRide} className="image-style" />
            </div>
            <p>
            I come from a family of gardeners and my personal favorite plants to grow are peppers, cucumbers, melons, green beans, lettuce, and sweet potatoes.
            </p>
            <p>I am an avid bicyclist. The farthest I have biked in one day is 36 miles (57.94 kilometers).
            </p>
            <p>
            I fell in love with hiking. I have hiked most of the state parks in north Mississippi and around Memphis, TN.
            </p>
          </section>
        </Col>
        <Col xs={0} sm={3}></Col>
      </Row>
    </Container>
  );
};

export default About;
