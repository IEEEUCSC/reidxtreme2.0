import React from "react";

import TShirt from "./assets/tshirt.webp";
import IEEECard from "./assets/card.webp";
import Cash from "./assets/cash.webp";
import "./styles.css";

const Prizes = () => {
  return (
    <section id="prizes" className="prizes">
      <h1 className="section-title">PRIZES</h1>
      <div className="prizes-cards">
        <div className="prizes-card prizes-card-silver">
          <div className="prizes-front">
            <img className="prizes-img-left" src={Cash} alt="Cash Prize" />
            <div className="prizes-cash">
              Rs.
              <br /> 3,000
            </div>
            <div className="prizes-position">
              <b>2</b>
            </div>
          </div>
          <div className="prizes-back">
            <p>Rs. 3,000 Cash Prize</p>
          </div>
        </div>

        <div className="prizes-card prizes-card-gold">
          <div className="prizes-front">
            <img className="prizes-img-left" src={TShirt} alt="Github Tshirt" />
            <img
              className="prizes-img-right"
              src={IEEECard}
              alt="IEEE Membership"
            />
            <div className="prizes-position">
              <b>1</b>
            </div>
          </div>
          <div className="prizes-back">
            <p>
              3 &times; IEEE Membership <br /> + 3 &times; GitHub T-Shirt
            </p>
          </div>
        </div>

        <div className="prizes-card prizes-card-bronze">
          <div className="prizes-front">
            <img className="prizes-img-left" src={Cash} alt="Cash Prize" />
            <div className="prizes-cash">
              Rs.
              <br /> 2,000
            </div>
            <div className="prizes-position">
              <b>3</b>
            </div>
          </div>
          <div className="prizes-back">
            <p>Rs. 2,000 Cash Prize</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
