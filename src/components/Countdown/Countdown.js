import React from "react";
import { Container } from "react-bootstrap";
import CountdownElement from "react-countdown";
import { BsChevronCompactDown as ChevronDown } from "react-icons/bs";
import { Link } from "react-scroll";

import { competitionBegin } from "../../data";
import "./styles.css";

const CountdownNumber = ({ num, label }) => {
  return (
    <div className="countdown-number">
      <div className="countdown-number-num">{num < 10 ? `0${num}` : num}</div>
      <div className="countdown-number-label">{label}</div>
    </div>
  );
};

const Countdown = () => {
  // Countdown
  const countdownRender = ({ days, hours, minutes, seconds, completed }) => {
    if (!completed) {
      return (
        <>
          <div className="countdown-title">
            BRACE YOURSELVES FOR&nbsp;
            <span className="countdown-battle">BATTLE</span>
          </div>
          <div className="countdown-timer">
            <CountdownNumber num={days} label="DAYS" />
            <div>:</div>
            <CountdownNumber num={hours} label="HOURS" />
            <div>:</div>
            <CountdownNumber num={minutes} label="MINUTES" />
            <div>:</div>
            <CountdownNumber num={seconds} label="SECONDS" />
          </div>
        </>
      );
    } else {
      return (
        <div className="countdown-completed">
          THE&nbsp;<span className="countdown-end">BATTLE</span>&nbsp;HAS&nbsp;
          <span className="countdown-end">COMMENCED</span>
        </div>
      );
    }
  };

  return (
    <section id="top" className="countdown">
      <Container>
        <CountdownElement
          date={new Date(competitionBegin)}
          renderer={countdownRender}
        />
        <Link to="home">
          <div className="countdown-chevron">
            <ChevronDown />
          </div>
        </Link>
      </Container>
    </section>
  );
};

export default Countdown;
