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

const Timeline = () => {
  return (
    <section id="timeline" className="timeline">
      <Container>
        <h1 className="section-title">TIMELINE</h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{
              background: "rgb(46, 46, 46)",
              color: "var(--green)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(46, 46, 46)" }}
            date="September 26th"
            dateClassName="date-light"
            iconStyle={{ background: "var(--green)", color: "#fff" }}
            icon={<Star />}
          >
            <h3 className="vertical-timeline-element-title">Launch Event</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background: "rgb(46, 46, 46)",
              color: "var(--green)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(46, 46, 46)" }}
            date="October 3"
            dateClassName="date-light"
            iconStyle={{ background: "var(--green)", color: "#fff" }}
            icon={<Workshop />}
          >
            <h3 className="vertical-timeline-element-title">Workshop I</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background: "rgb(46, 46, 46)",
              color: "var(--green)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(46, 46, 46)" }}
            date="October 9"
            dateClassName="date-light"
            iconStyle={{ background: "var(--green)", color: "#fff" }}
            icon={<Workshop />}
          >
            <h3 className="vertical-timeline-element-title">Workshop II</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background: "rgb(46, 46, 46)",
              color: "var(--green)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(46, 46, 46)" }}
            date="October 16 & 17"
            dateClassName="date-light"
            iconStyle={{ background: "var(--green)", color: "#fff" }}
            icon={<Launch />}
          >
            <h3 className="vertical-timeline-element-title">ReidXtreme</h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </section>
  );
};

export default Timeline;
