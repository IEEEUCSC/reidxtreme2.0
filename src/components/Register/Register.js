import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

// API
import { createTeam } from "../../actions/teams";

import Team from "./components/Team";
import Member from "./components/Member";
import Egg from "./assets/egg.png";

import "./styles.css";

const Register = () => {
  const dispatch = useDispatch();
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

  // Checking if fields are empty
  const isFormValid = (teamData) => {
    // Checking team details
    if (teamData.teamName === "" || teamData.teamHandle === "") return false;

    // Checking member details
    const teamMembers = teamData.teamMembers.slice();
    if (teamMembers.length !== 0) {
      var valid = true;
      teamMembers.forEach((item) => {
        if (item.regNo === "") valid = false;
        if (item.name === "") valid = false;
        if (item.phNo === "") valid = false;
        if (item.email === "") valid = false;
      });
      if (!valid) return valid;
    } else {
      return false;
    }
    return true;
  };

  // Checking if team handle is valid
  const isTeamHandleValid = () => teamData.teamHandle.slice(0, 4) === "RX2_";

  // Removing extra spaces
  const removeExtraSpace = (string) => string.replace(/\s+/g, " ").trim();

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

  // On submitting form
  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse(() => ({
      success: true,
      message: "Creating team...",
    }));
    const formattedTeamData = formatData(teamData);

    if (!isTeamHandleValid()) {
      setResponse({
        success: false,
        message: "The HackerRank handle should contain the prefix 'RX2_'",
      });
    } else if (!isFormValid(formattedTeamData)) {
      setResponse({
        success: false,
        message: "Some form fields are incomplete",
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

  return (
    <section id="register" className="register">
      <Container>
        <div className="register-row">
          <div className="register-form">
            <h1 className="section-title">REGISTER</h1>
            <Form onSubmit={(e) => e.preventDefault()}>
              <div
                className={animate ? "fade-in" : ""}
                onAnimationEnd={() => setAnimate(false)}
              >
                {formElement}
              </div>
              <div className="form-button-group">
                <button
                  className="form-button"
                  onClick={prevPage}
                  disabled={page === 0}
                >
                  Previous
                </button>

                <button
                  className="form-button"
                  onClick={nextPage}
                  disabled={page === 3}
                >
                  Next
                </button>

                <button
                  className="form-button form-submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
              <ResponseMessage />
            </Form>
          </div>
          <div className="register-image-wrapper">
            {/* <div className="empty-div"></div> */}
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
