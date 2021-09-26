import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

import {
  BsChevronRight as ChevronRight,
  BsChevronLeft as ChevrionLeft,
} from "react-icons/bs";

/* Badge Images */
import StarterGambit from "./assets/startergambit.png";
import AnswerSeeker from "./assets/answerseeker.png";
import PointHunter from "./assets/pointhunter.png";
import Brawler from "./assets/brawler.png";
import Duelist from "./assets/duelist.png";
import DragonSlayer from "./assets/dragonslayer.png";
import "./styles.css";

/* List of badges */
const badgeList = [
  {
    title: "STARTER'S GAMBIT",
    desc: "Venture into ReidXtreme",
    src: StarterGambit,
  },
  {
    title: "ANSWER SEEKER",
    desc: "Complete 10 Problems Successfully",
    src: AnswerSeeker,
  },
  {
    title: "POINT HUNTER",
    desc: "Score over 15K Points",
    src: PointHunter,
  },
  {
    title: "THE BRAWLER",
    desc: "Finish Second Runner's Up in ReidXtreme",
    src: Brawler,
  },
  {
    title: "THE DUELIST",
    desc: "Finish First Runner's Up in ReidXtreme",
    src: Duelist,
  },
  {
    title: "THE DRAGONSLAYER",
    desc: "Win ReidXtreme",
    src: DragonSlayer,
  },
];

const Badges = () => {
  /* Pagination */
  const [page, setPage] = useState(0);

  /* Animating components that change */
  const [animate, setAnimate] = useState(false);

  /* Animate whenever page changes */
  useEffect(() => {
    setAnimate(true);
  }, [page]);

  /* Badge selector */
  const badgeSelect = badgeList.map((item, index) => (
    <div
      key={index}
      className="badges-select-item"
      style={{ backgroundImage: `url(${item.src})` }}
      onClick={() => setPage(index)}
    />
  ));

  return (
    <section id="badges" className="badges">
      <Container>
        <Fade>
          <h1 className="section-title">BADGES</h1>
          <Row className="badges-group">
            <Col className="badges-preview" lg={6}>
              <div
                className={`badges-preview-img${animate ? " fade-in" : ""}`}
                style={{ backgroundImage: `url(${badgeList[page].src})` }}
                onAnimationEnd={() => setAnimate(false)}
              ></div>
            </Col>
            <Col
              lg={6}
              className={`badges-description${animate ? " fade-in" : ""}`}
            >
              <h4 className="title">{badgeList[page].title}</h4>
              <p className="desc">{badgeList[page].desc}</p>
            </Col>
            <ChevrionLeft
              className="chevron-left"
              onClick={() =>
                setPage(
                  (prevPage) =>
                    (prevPage + badgeList.length - 1) % badgeList.length
                )
              }
            />
            <ChevronRight
              className="chevron-right"
              onClick={() =>
                setPage((prevPage) => (prevPage + 1) % badgeList.length)
              }
            />
          </Row>
          <div className="badges-select">{badgeSelect}</div>
        </Fade>
      </Container>
    </section>
  );
};

export default Badges;
