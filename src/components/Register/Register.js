import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { createTeam } from "../../actions/teams";
import Team from "./components/Team";
import Member from "./components/Member";

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

  // Removing invalid members (members with fields missing/empty)
  const formatData = (teamData) => {
    const teamMembers = teamData.teamMembers.slice();
    return {
      ...teamData,
      teamMembers: teamMembers.filter((item) => {
        if (item.regNo === "") return false;
        if (item.name === "") return false;
        if (item.phNo === "") return false;
        if (item.email === "") return false;
        return true;
      }),
    };
  };

  // Form Pagination
  const [page, setPage] = useState(() => 0);
  const formElement =
    page === 0 ? (
      <Team teamData={teamData} setTeamData={setTeamData} />
    ) : (
      <Member teamData={teamData} setTeamData={setTeamData} memberNo={page} />
    );

  // Response message from server
  const [response, setResponse] = useState({
    success: null,
    message: null,
  });

  // On submitting form
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTeam(formatData(teamData), setResponse));
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

  return (
    <section id="register" className="register">
      <Container>
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
              onClick={() =>
                setPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage))
              }
              disabled={page === 0}
            >
              Previous
            </button>
            <button
              className="form-button"
              onClick={() =>
                setPage((prevPage) => (prevPage < 3 ? prevPage + 1 : prevPage))
              }
              disabled={page === 3}
            >
              Next
            </button>
            <button className="form-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <ResponseMessage />
        </Form>
      </Container>
    </section>
  );
};

export default Register;
