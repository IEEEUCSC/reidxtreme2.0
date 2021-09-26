import React from "react";
import { Form } from "react-bootstrap";

const Team = ({ teamData, setTeamData }) => {
  return (
    <div className="form-group">
      <h4 className="form-group-title">Team Details</h4>
      <div className="form-sub-group-wrapper">
        <Form.Group className="form-sub-group">
          <Form.Control
            name="team-name"
            type="text"
            value={teamData.teamName}
            placeholder="Team Name"
            required={true}
            onChange={(e) =>
              setTeamData({ ...teamData, teamName: e.target.value })
            }
          ></Form.Control>
          <Form.Label>Team Name</Form.Label>
        </Form.Group>

        <Form.Group className="form-sub-group">
          <Form.Control
            name="hackerrank"
            type="text"
            value={teamData.teamHandle}
            placeholder="Hackerrank Handle"
            required={true}
            onChange={(e) =>
              setTeamData({ ...teamData, teamHandle: e.target.value })
            }
          ></Form.Control>
          <Form.Label>HackerRank Handle</Form.Label>
        </Form.Group>
      </div>
    </div>
  );
};

export default Team;
