import React from "react";
import { Container } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

// Icons
import { AiFillStar as Star } from "react-icons/ai";
import { GrWorkshop as Workshop } from "react-icons/gr";
import { GrLaunch as Launch } from "react-icons/gr";

import "react-vertical-timeline-component/style.min.css";
import "./styles.css";

// List of events
const timelineList = [
  { date: "September 26", icon: <Star />, title: "Launch Event" },
  { date: "October 3", icon: <Workshop />, title: "Workshop I" },
  { date: "October 9", icon: <Workshop />, title: "Workshop II" },
  { date: "October 16", icon: <Launch />, title: "ReidXtreme" },
];

const Timeline = () => {
  // Timeline element
  const timelinElement = timelineList.map((item, index) => (
    <VerticalTimelineElement
      key={index}
      contentStyle={{
        background: "rgb(46, 46, 46)",
        color: "var(--green)",
      }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(46, 46, 46)" }}
      date={item.date}
      dateClassName="date-light"
      iconStyle={{ background: "var(--green)", color: "#fff" }}
      icon={item.icon}
    >
      <h3 className="vertical-timeline-element-title">{item.title}</h3>
    </VerticalTimelineElement>
  ));

  return (
    <section id="timeline" className="timeline">
      <Container>
        <h1 className="section-title">TIMELINE</h1>
        <VerticalTimeline>{timelinElement}</VerticalTimeline>
      </Container>
    </section>
  );
};

export default Timeline;
