import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDraggable } from "react-use-draggable-scroll";
import { Fade } from "react-awesome-reveal";

import {
  BsChevronRight as ChevronRight,
  BsChevronLeft as ChevrionLeft,
} from "react-icons/bs";

/* Badge Images */
import Badge1 from "./assets/badge-1.jpg";
import Badge2 from "./assets/badge-2.jpg";
import Badge3 from "./assets/badge-3.jpg";

import "./styles.css";

/* List of badges */
const badgeList = [
  {
    title: "Badge 1",
    desc: "This is the first badge lol, idk what to say.",
    src: Badge1,
  },
  {
    title: "Badge 2",
    desc: "This is the second badge lol, idk what to say.",
    src: Badge2,
  },
  {
    title: "Badge 3",
    desc: "This is the third badge lol, idk what to say.",
    src: Badge1,
  },
  {
    title: "Badge 4",
    desc: "This is the fourth badge lol, idk what to say.",
    src: Badge2,
  },
  {
    title: "Badge 5",
    desc: "This is the fifth badge lol, idk what to say.",
    src: Badge3,
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

  /* Draggable div */
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <section id="badges" className="badges">
      <Container>
        <Fade>
          <Row>
            <Col className="badges-group" lg={6}>
              <div className="badges-content">
                <h1 className="section-title">BADGES</h1>
                <div
                  className={`badges-description${animate ? " fade-in" : ""}`}
                >
                  <h4 className="title">{badgeList[page].title}</h4>
                  <p className="desc">{badgeList[page].desc}</p>
                </div>
              </div>
              <div className="badges-select-wrapper">
                <div className="badges-select" {...events} ref={ref}>
                  {badgeSelect}
                </div>
              </div>
            </Col>
            <Col className="badges-preview" lg={6}>
              <ChevrionLeft
                className="chevron-left"
                onClick={() =>
                  setPage(
                    (prevPage) =>
                      (prevPage + badgeList.length - 1) % badgeList.length
                  )
                }
              />
              <div
                className={`badges-preview-img${animate ? " fade-in" : ""}`}
                style={{ backgroundImage: `url(${badgeList[page].src})` }}
                onAnimationEnd={() => setAnimate(false)}
              ></div>
              <ChevronRight
                className="chevron-right"
                onClick={() =>
                  setPage((prevPage) => (prevPage + 1) % badgeList.length)
                }
              />
            </Col>
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Badges;
