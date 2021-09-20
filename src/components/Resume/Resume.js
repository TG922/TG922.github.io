import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Tarun-Gaur.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  //const [spojRank, upadteSpojRank] = useState(0);
  //const [hackerrank, upadteHackerank] = useState(0);
 // const [sem, upadateSem] = useState(0);
  //const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Summer Internship [IIT Kanpur]"
              date="Apr 2019 - June 2019"
              content={[
                  "Here I Worked on LAMP Architecture.",
                  "Used Mysql as the database for storing the records and later on fetch records through PHP",
                  "Used Virtual Box Machine and worked with ubuntu OS",
             /*   "Worked on the development of an E-commerce website",
                "Redesigned Wigme.com and created features to enhance the user experience and optimized designs for smartphones.",
                " Translated designs and wireframes into a highly responsive user interface and reusable components using React.js.",
                "Used Back-End APIs to display data using the Custom Components, library Components, and Redux.",
                "Used JIRA as the bug tracking system to track and maintain the history of bugs/issues on an everyday basis.",*/
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="eBoothathon 04 by AKTU in association with IIT Kanpur"
              content={[
                "Our team participated and represented our college in intercollege eBOOTATHON 04 by Dr A.P.J. Abdul Kalam Technical University Lucknow in association with IIT Kanpur and developed Virtual lab experiment.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="PSIT College of Engineering Kanpur "
              date="2018 - Present"
              //content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
              content={[`Board: Dr. APJ Abdul Kalam Technical University`]}
              content={[`Branch: Computer Science`]}
            />

            <h3 className="resume-title">Publications</h3>
            <Resumecontent
              title=""
              content={[
                "Article entitled An Overlapping Sliding Window and Combined Feature based Emotion Recognition System for EEG Signals publised in Emerald Publication;10.1108/ACI-05-2021-0130",
              ]}
            />

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Achieved 634th Rank in Hackerrank Contest COVID-19 Relief for India Coding Challenge`,
                //`Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "4 Star in C++ at Hackerrank",
                "3 Star at Codechef",
                "4 Star in Python at Hackerrank",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
