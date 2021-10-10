import React, { useState } from "react";

import "./styles.css";

const Modal = ({ setDisplay, setChecked }) => {
  // Agree button state
  const [enabled, setEnabled] = useState(false);
  const [closing, setClosing] = useState(false);
  const [opening, setOpening] = useState(true);

  // Checks if user scrolled to bottom
  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop - 10 <= e.target.clientHeight;
    if (bottom) {
      setEnabled(true);
    }
  };

  // Buttons
  const handleClickCancel = () => {
    setClosing(true);
  };
  const handleClickAccept = () => {
    setChecked(true);
    setClosing(true);
  };

  const handleAnimationEnd = () => {
    if (closing) {
      setClosing(false);
      setDisplay(false);
    } else if (opening) {
      setOpening(false);
    }
  };

  return (
    <div className="modal">
      <div
        className={`modal-container ${closing ? "closing" : ""}${
          opening ? "opening" : ""
        }`}
        onAnimationEnd={handleAnimationEnd}
      >
        <h1 className="section-title">CODE OF CONDUCT</h1>
        <div className="modal-content" onScroll={handleScroll}>
          <p>
            We are doing our utmost to make sure that ReidXtreme will be a fun
            and fair experience for everyone involved (including yourself!). As
            means to that end, we kindly ask you to read through and take to
            heart the guidelines we’ve outlined below:
          </p>
          <h2 className="modal-content-heading">YEAS</h2>
          <ul>
            <li>
              Create a 1-3-member team consisting of UOC Undergraduates only.
            </li>
            <li>
              Contact a member of the Organizing Committee should you have any
              doubts about the competition before it starts.
            </li>
            <li>
              Message one of the posted Regulator’s numbers if you encounter any
              issue during the competition.
            </li>
            <li>
              Alert one of the Regulators should you come across a case of
              someone else compromising the integrity of the competition.{" "}
            </li>
            <li>
              Be logged in to HackerRank on only one device per person during
              the competition.
            </li>
          </ul>
          <h2 className="modal-content-heading">NAYS</h2>
          <ul>
            <li>
              Any form of abuse, harassment or offensive language towards fellow
              contestants.
            </li>
            <li>
              Impersonation of/collusion between other teams/team members.
            </li>
            <li>
              Sharing formulae, logic, or any other significant aspect of your
              code during a contest (you will be disqualified).
            </li>
            <li>
              Discussing the problem set with anyone other than your teammates.
            </li>
            <li>
              Sharing the whole/parts of the competition questions on any form
              of the internet.
            </li>
            <li>Travelling to restricted areas during lockdown.</li>
          </ul>
          <p>
            Overall, if you encounter an issue not mentioned above, please
            contact the Organizing Committee and, in general, use common sense.
            In such situations, any decision the Organizing Committee makes will
            be final.
          </p>
          <p>
            Thank you for reading thus far. With the official stuff out of the
            way, you can now go ahead and register. We appreciate your support
            in creating a just playing-field, and in turn helping the
            competition run smoothly. We hope you have a great time at
            ReidXtreme!
          </p>
          <p>
            If your team is in agreement with our Code of Conduct, please
            confirm via the 'I Agree' button below.
          </p>
          <p>Happy Coding!</p>
        </div>
        <div className="form-button-group">
          <button className="form-button" onClick={handleClickCancel}>
            CANCEL
          </button>
          <button
            className="form-button form-submit"
            onClick={handleClickAccept}
            disabled={!enabled}
          >
            I AGREE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
