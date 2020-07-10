import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./blog.scss";
import Hike from '../../assets/about/hike.jpg';

const Blog = () => {
  return (
    <Container>
      <Row>
        <Col className="center-content page-title">
          <h1>Blogs and Articles</h1>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <h3>Hello Universe</h3>
          <Image src={Hike} />
          <p>fdsfsf</p>
          <a href="www.google.com" >Hello World</a>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Blog;
