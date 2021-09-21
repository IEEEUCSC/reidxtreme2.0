import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { createTeam } from "../../actions/teams";

import "./styles.css";

const Register = () => {
  const dispatch = useDispatch();
  const [teamData, setTeamData] = useState({
    teamName: "",
    teamHandle: "",
    teamMembers: [
      { regNo: "", name: "", phNo: "", email: "" },
      { regNo: "", name: "", phNo: "", email: "" },
      { regNo: "", name: "", phNo: "", email: "" },
    ],
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTeam(formatData(teamData)));
  };

  return (
    <div className="main">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="form-group">
          <Form.Control
            name="team-name"
            type="text"
            value={teamData.teamName}
            onChange={(e) =>
              setTeamData({ ...teamData, teamName: e.target.value })
            }
          ></Form.Control>
          <Form.Label>Team Name</Form.Label>
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Control
            name="hackerrank"
            type="text"
            value={teamData.teamHandle}
            onChange={(e) =>
              setTeamData({ ...teamData, teamHandle: e.target.value })
            }
          ></Form.Control>
          <Form.Label>Hackerrank Handle</Form.Label>
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Control
            name={`member-reg-1`}
            type="text"
            value={teamData.teamMembers[0].regNo}
            onChange={(e) => {
              const members = teamData.teamMembers.slice();
              members[0].regNo = e.target.value;
              return setTeamData({ ...teamData, teamMembers: members });
            }}
          ></Form.Control>
          <Form.Label>{`Member 1's registration number`}</Form.Label>
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Control
            name={`member-name-1`}
            type="text"
            value={teamData.teamMembers[0].name}
            onChange={(e) => {
              const members = teamData.teamMembers.slice();
              members[0].name = e.target.value;
              return setTeamData({ ...teamData, teamMembers: members });
            }}
          ></Form.Control>
          <Form.Label>{`Member 1's name`}</Form.Label>
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Control
            name={`member-email-1`}
            type="email"
            value={teamData.teamMembers[0].email}
            onChange={(e) => {
              const members = teamData.teamMembers.slice();
              members[0].email = e.target.value;
              return setTeamData({ ...teamData, teamMembers: members });
            }}
          ></Form.Control>
          <Form.Label>{`Member 1's email`}</Form.Label>
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Control
            name={`member-name-1`}
            type="tel"
            value={teamData.teamMembers[0].phNo}
            onChange={(e) => {
              const members = teamData.teamMembers.slice();
              members[0].phNo = e.target.value;
              return setTeamData({ ...teamData, teamMembers: members });
            }}
          ></Form.Control>
          <Form.Label>{`Member 1's contact number`}</Form.Label>
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Control
            name={`member-reg-2`}
            type="text"
            value={teamData.teamMembers[1].regNo}
            onChange={(e) => {
              const members = teamData.teamMembers.slice();
              members[1].regNo = e.target.value;
              return setTeamData({ ...teamData, teamMembers: members });
            }}
          ></Form.Control>
          <Form.Label>{`Member 2's registration number`}</Form.Label>
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Control
            name={`member-name-2`}
            type="text"
            value={teamData.teamMembers[1].name}
            onChange={(e) => {
              const members = teamData.teamMembers.slice();
              members[1].name = e.target.value;
              return setTeamData({ ...teamData, teamMembers: members });
            }}
          ></Form.Control>
          <Form.Label>{`Member 2's name`}</Form.Label>
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Control
            name={`member-email-2`}
            type="email"
            value={teamData.teamMembers[1].email}
            onChange={(e) => {
              const members = teamData.teamMembers.slice();
              members[1].email = e.target.value;
              return setTeamData({ ...teamData, teamMembers: members });
            }}
          ></Form.Control>
          <Form.Label>{`Member 2's email`}</Form.Label>
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Control
            name={`member-name-2`}
            type="tel"
            value={teamData.teamMembers[1].phNo}
            onChange={(e) => {
              const members = teamData.teamMembers.slice();
              members[1].phNo = e.target.value;
              return setTeamData({ ...teamData, teamMembers: members });
            }}
          ></Form.Control>
          <Form.Label>{`Member 2's contact number`}</Form.Label>
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Control
            name={`member-reg-3`}
            type="text"
            value={teamData.teamMembers[2].regNo}
            onChange={(e) => {
              const members = teamData.teamMembers.slice();
              members[2].regNo = e.target.value;
              return setTeamData({ ...teamData, teamMembers: members });
            }}
          ></Form.Control>
          <Form.Label>{`Member 3's registration number`}</Form.Label>
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Control
            name={`member-name-3`}
            type="text"
            value={teamData.teamMembers[2].name}
            onChange={(e) => {
              const members = teamData.teamMembers.slice();
              members[2].name = e.target.value;
              return setTeamData({ ...teamData, teamMembers: members });
            }}
          ></Form.Control>
          <Form.Label>{`Member 3's name`}</Form.Label>
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Control
            name={`member-email-3`}
            type="email"
            value={teamData.teamMembers[2].email}
            onChange={(e) => {
              const members = teamData.teamMembers.slice();
              members[2].email = e.target.value;
              return setTeamData({ ...teamData, teamMembers: members });
            }}
          ></Form.Control>
          <Form.Label>{`Member 3's email`}</Form.Label>
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Control
            name={`member-name-3`}
            type="tel"
            value={teamData.teamMembers[2].phNo}
            onChange={(e) => {
              const members = teamData.teamMembers.slice();
              members[2].phNo = e.target.value;
              return setTeamData({ ...teamData, teamMembers: members });
            }}
          ></Form.Control>
          <Form.Label>{`Member 3's contact number`}</Form.Label>
        </Form.Group>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Register;
