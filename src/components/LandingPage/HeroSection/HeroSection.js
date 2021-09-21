import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./styles.css";

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <Container>
        <Row>
          <Col lg={7}></Col>
          <Col className="hero-content" lg={5}>
            <h2 className="hero-countdown">05 : 01 : 20</h2>
            <p className="hero-desc">
              An upcoming competitive programming event for UCSC undergraduates
              where you can put your programming knowledge and problem solving
              skills to the test
            </p>
            <div>
              <button className="hero-button">START</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
