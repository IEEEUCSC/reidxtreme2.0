import React from "react";
import { Container } from "react-bootstrap";
import CountdownElement from "react-countdown";
import { BsChevronCompactDown as ChevronDown } from "react-icons/bs";
import { Link } from "react-scroll";

import { countdownTo } from "../../data";
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
    return (
      <div className="countdown-timer">
        <CountdownNumber num={days} label="Days" />
        <div>:</div>
        <CountdownNumber num={hours} label="Hours" />
        <div>:</div>
        <CountdownNumber num={minutes} label="Minutes" />
        <div>:</div>
        <CountdownNumber num={seconds} label="Seconds" />
      </div>
    );
  };

  return (
    <section id="top" className="countdown">
      <Container>
        <h3>REGISTRATION CLOSES IN</h3>
        <CountdownElement
          date={new Date(countdownTo)}
          renderer={countdownRender}
        />
        <Link to="home">
          <div className="chevron">
            <ChevronDown />
          </div>
        </Link>
      </Container>
    </section>
  );
};

export default Countdown;
