import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import Typed from "typed.js";
import { Slide } from "react-awesome-reveal";

import "./styles.css";

const HeroSection = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'TEST YOUR <span class="key-word">PROGRAMMING</span> SKILLS',
        'TEST YOUR <span class="key-word">PROBLEM SOLVING</span> SKILLS',
        'TEST YOUR <span class="key-word">ANALYTICAL</span> SKILLS',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      cursorChar: "_",
      loop: true,
      smartBackspace: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);
  return (
    <section className="hero-section" id="home">
      <Container as="section">
        <Row>
          <Col lg={7} xl={8}></Col>
          <Col className="hero-content" lg={5} xl={4}>
            <Slide direction="right">
              <div>
                <div className="hero-header-wrapper">
                  <h1 className="hero-header">
                    <span ref={el} />
                  </h1>
                </div>
                <div>
                  <p className="hero-desc">
                    ReidXtreme - a competitive programming event exclusively for
                    UCSC students
                  </p>
                  <Link to="register">
                    <button className="hero-button">REGISTER</button>
                  </Link>
                </div>
              </div>
            </Slide>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
