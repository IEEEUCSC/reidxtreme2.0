import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

// API
import { createTeam } from "../../actions/teams";

// data
import { countdownTo } from "../../data";

// form validation
import { isFormValid, isTeamHandleValid, removeExtraSpace } from "./validation";

// Components
import Team from "./components/Team/Team";
import Member from "./components/Team/Member";
import Modal from "./components/Modal/Modal";

import Egg from "./assets/egg.webp";

import "./styles.css";
import "./components/Team/styles.css"; // form group styling

const Register = () => {
  const dispatch = useDispatch();
  // Removing empty members
  const formatData = (teamData) => {
    const teamMembers = teamData.teamMembers.slice();
    return {
      ...teamData,
      teamMembers: teamMembers.filter((item) => {
        if (item.regNo !== "") return true;
        if (item.name !== "") return true;
        if (item.phNo !== "") return true;
        if (item.email !== "") return true;
        return false;
      }),
    };
  };

  // Default (empty form)
  const [teamData, setTeamData] = useState({
    teamName: "",
    teamHandle: "",
    teamMembers: [
      { regNo: "", name: "", phNo: "", email: "" },
      { regNo: "", name: "", phNo: "", email: "" },
      { regNo: "", name: "", phNo: "", email: "" },
    ],
  });

  // Form Pagination
  const [page, setPage] = useState(() => 0);
  const formElement =
    page === 0 ? (
      <Team
        teamData={teamData}
        setTeamData={setTeamData}
        format={removeExtraSpace}
      />
    ) : (
      <Member
        teamData={teamData}
        setTeamData={setTeamData}
        memberNo={page}
        format={removeExtraSpace}
      />
    );

  // Response message from server
  const [response, setResponse] = useState(() => ({
    success: null,
    message: null,
  }));

  // Fade animations
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, [page]);

  // Previous page
  const prevPage = () =>
    setPage((oldPage) => (oldPage > 0 ? oldPage - 1 : oldPage));
  // Next page
  const nextPage = () =>
    setPage((oldPage) => (oldPage < 3 ? oldPage + 1 : oldPage));

  // Checks if registrations are closed
  const isClosed = () => new Date() > new Date(countdownTo);

  // Code of conduct modal
  const [display, setDisplay] = useState(false);
  const [checked, setChecked] = useState(false);

  // Prevent scrolling when modal is visible
  const html = document.querySelector("html");
  if (display) {
    html.style.overflow = "hidden";
  } else {
    html.style.overflow = "auto";
  }

  const handleOnCheck = () => {
    if (checked) {
      setChecked(false);
    } else {
      setDisplay(true);
    }
  };

  // On submitting form
  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse(() => ({
      success: true,
      message: "Creating team...",
    }));
    const formattedTeamData = formatData(teamData);

    if (!isTeamHandleValid(teamData)) {
      setResponse({
        success: false,
        message: "The HackerRank handle should contain the prefix 'RX2_'",
      });
    } else if (!isFormValid(formattedTeamData)) {
      setResponse({
        success: false,
        message: "Some form fields are incomplete",
      });
    } else if (!checked) {
      setResponse({
        success: false,
        message: "You have not agreed to the Code of Conduct",
      });
    } else {
      dispatch(createTeam(formattedTeamData, setResponse));
    }
  };

  // Response message component
  const ResponseMessage = () => {
    if (response.success !== null)
      return (
        <div className={`message ${response.success ? "success" : "error"}`}>
          {response.message}
        </div>
      );
    return <div className="message"></div>;
  };

  return (
    <section id="register" className="register">
      <Container>
        <div className="register-row">
          <div className="register-form">
            {
              // Checking if registration is closed
              !isClosed() ? (
                <>
                  <h1 className="section-title">REGISTER</h1>
                  <Form onSubmit={(e) => e.preventDefault()}>
                    <div
                      className={animate ? "fade-in" : ""}
                      onAnimationEnd={() => setAnimate(false)}
                    >
                      {formElement}
                    </div>

                    <div className="form-checkbox">
                      <input
                        type="checkbox"
                        className="form-checkbox-input"
                        label="checkbox-code-of-conduct"
                        required={true}
                        checked={checked}
                        onChange={handleOnCheck}
                      />
                      <span className="form-checkbox-label">
                        I hereby adhere to the&nbsp;
                        <span
                          className="form-checkbox-conduct"
                          onClick={handleOnCheck}
                        >
                          Code of Conduct
                        </span>
                      </span>
                      {display ? (
                        <Modal
                          setDisplay={setDisplay}
                          setChecked={setChecked}
                        />
                      ) : null}
                    </div>

                    <div className="form-button-group">
                      <button
                        className="form-button"
                        onClick={prevPage}
                        disabled={page === 0}
                      >
                        PREVIOUS
                      </button>

                      <button
                        className="form-button"
                        onClick={nextPage}
                        disabled={page === 3}
                      >
                        NEXT
                      </button>

                      <button
                        className="form-button form-submit"
                        onClick={handleSubmit}
                      >
                        SUBMIT
                      </button>
                    </div>
                    <ResponseMessage />
                  </Form>
                </>
              ) : (
                <div className="register-closed">
                  <div>REGISTRATIONS ARE</div>
                  <div className="register-closed-word">CLOSED</div>
                </div>
              )
            }
          </div>

          <div className="register-image-wrapper">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Egg}
                alt="Egg"
                title="You are Eggcelent"
                className="register-image"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Register;
