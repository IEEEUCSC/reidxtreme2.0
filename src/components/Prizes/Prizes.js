import React from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

import "./styles.css";

import GoldImg from "./assets/gold.svg";
import SilverImg from "./assets/silver.svg";
import BronzeImg from "./assets/bronze.svg";
import ConfettiImg from "./assets/confetti.png";
import TShirt from "./assets/tshirt.jpg";

// Each prizes card
const PrizeCard = ({ type, img, position, prize, order }) => {
  return (
    <Col className={`${type} ${order}`} lg={4}>
      <Card>
        <div className="medal">
          <img className="medal-img" src={img} alt="Gold medal" />
          <img className="confetti" src={ConfettiImg} alt="Confetti" />
        </div>
        <div className="card-body">
          <h1>{position} place</h1>
          <h4>{prize}</h4>
        </div>
      </Card>
    </Col>
  );
};

const Prizes = () => {
  return (
    <section className="prizes" id="prizes">
      <img className="prizes-tshirt" alt="Github T-shirt" src={TShirt}></img>
      <Container>
        <h1 className="section-title">PRIZES</h1>
        <Fade>
          <Row>
            <PrizeCard
              type="silver"
              img={SilverImg}
              position="2nd"
              prize="Github T-shirt for each member"
              order="order-12 order-lg-first"
            />
            <PrizeCard
              type="gold"
              img={GoldImg}
              position="1st"
              prize="IEEE Membership + GitHub T-shirt for each member"
              order="order-first order-lg-2"
            />
            <PrizeCard
              type="bronze"
              img={BronzeImg}
              position="3rd"
              prize="Github T-shirt for each member"
              order="order-last"
            />
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Prizes;
