import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import MRS from "../../Assets/Projects/MRS.jpeg";
import RP from "../../Assets/Projects/RP.png";
import RC from "../../Assets/Projects/RC.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MRS}
              isBlog={false}
              title="Movie Recommendation System"
              description="Project on developing a recommendation system and here we try to search for look alike customers and offer products based on what his/her look alike has chosen on the platform."
              link="https://github.com/TG922/Movie_Recommendation_System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RP}
              isBlog={false}
              title="REACTJS_PORTFOLIO"
              description="Created my portfolio website which features some of my github projects as well as my resume and technical skills which is developed with the help of Reactjs."
              link="https://github.com/TG922/REACTJS_PORTFOLIO"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RC}
              isBlog={false}
              title="RAP_CART"
              description="Project on designing a website that compares price of products on different platform, Like-amazon, flipkart, snapdeal and display the price and other details of product on single screen."
              link="https://github.com/TG922/RAP_CART"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
