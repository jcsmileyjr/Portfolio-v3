import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import "./blog.scss";
import blogs from "../../data/blogPosts.js";

const Blog = () => {
  return (
    <Container>
      <Row>
        <Col className="center-content page-title">
          <h1>Blogs and Articles</h1>
        </Col>
      </Row>
      <Row>
        <Col className="left-align-content page-title">
          <p>Read my technical articles and follow me on Medium.com at <a href="https://medium.com/@jcsmileyjr">https://medium.com/@jcsmileyjr</a>. I have lots of blog posts using a question and answer format on Dev.to at <a href="https://dev.to/jcsmileyjr" > https://dev.to/jcsmileyjr </a></p>
        </Col>
      </Row>
      {blogs.map((blog, id) => {
        return (
          <Row key={id}>
            <Col></Col>
            <Col sm="auto" className="post-container">
              <h3 className="center-content blog-title">{blog.title}</h3>
              <p>{blog.content} <a href={blog.link}>Click here to read the rest of the Article</a></p>              
            </Col>
            <Col></Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default Blog;
