import React from "react";

import TShirt from "./assets/tshirt.png";
import IEEECard from "./assets/card.png";
import "./styles.css";

const Prizes = () => {
  return (
    <section id="prizes" className="prizes">
      <h1 className="section-title">PRIZES</h1>
      <div className="prizes-cards">
        <div className="prizes-card prizes-card-silver">
          <div className="prizes-front">
            <img
              className="prizes-img-tshirt"
              src={TShirt}
              alt="Github Tshirt"
            ></img>
            <div className="prizes-position">
              <b>2</b>
            </div>
          </div>
          <div className="prizes-back">
            <p>
              Github T-shirt <br /> for each member
            </p>
          </div>
        </div>

        <div className="prizes-card prizes-card-gold">
          <div className="prizes-front">
            <img
              className="prizes-img-tshirt"
              src={TShirt}
              alt="Github Tshirt"
            ></img>
            <img
              className="prizes-img-card"
              src={IEEECard}
              alt="IEEE Membership"
            ></img>
            <div className="prizes-position">
              <b>1</b>
            </div>
          </div>
          <div className="prizes-back">
            <p>
              IEEE Membership card + <br /> Github T-shirt <br /> for each
              member
            </p>
          </div>
        </div>

        <div className="prizes-card prizes-card-bronze">
          <div className="prizes-front">
            <img
              className="prizes-img-tshirt"
              src={TShirt}
              alt="Github Tshirt"
            ></img>
            <div className="prizes-position">
              <b>3</b>
            </div>
          </div>
          <div className="prizes-back">
            <p>
              Github T-shirt <br /> for each member
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
