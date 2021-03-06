import React from "react";
import { Form } from "react-bootstrap";

const Member = ({ teamData, setTeamData, memberNo, format }) => {
  return (
    <div className="form-group">
      <div className="form-group-title">
        {memberNo === 1 ? "Team Leader" : `Member ${memberNo}`}
      </div>
      <div className="form-sub-group-wrapper">
        <Form.Group className="form-sub-group">
          <Form.Control
            name={`member-reg-${memberNo}`}
            type="text"
            value={teamData.teamMembers[memberNo - 1].regNo}
            placeholder="Registration Number"
            onChange={(e) => {
              const members = teamData.teamMembers.slice();
              members[memberNo - 1].regNo = e.target.value.trim();
              return setTeamData({ ...teamData, teamMembers: members });
            }}
            required={memberNo === 1}
          />
          <Form.Label>Registration number</Form.Label>
        </Form.Group>
        <Form.Group className="form-sub-group">
          <Form.Control
            name={`member-name-${memberNo}`}
            type="text"
            value={teamData.teamMembers[memberNo - 1].name}
            placeholder="Name"
            onChange={(e) => {
              const members = teamData.teamMembers.slice();
              members[memberNo - 1].name = e.target.value;
              return setTeamData({ ...teamData, teamMembers: members });
            }}
            onBlur={(e) => {
              const members = teamData.teamMembers.slice();
              members[memberNo - 1].name = format(e.target.value);
              return setTeamData({ ...teamData, teamMembers: members });
            }}
            required={memberNo === 1}
          />
          <Form.Label>Name</Form.Label>
        </Form.Group>
        <Form.Group className="form-sub-group">
          <Form.Control
            name={`member-email-${memberNo}`}
            type="text"
            value={teamData.teamMembers[memberNo - 1].email}
            placeholder="Email"
            onChange={(e) => {
              const members = teamData.teamMembers.slice();
              members[memberNo - 1].email = e.target.value.trim();
              return setTeamData({ ...teamData, teamMembers: members });
            }}
            required={memberNo === 1}
          />
          <Form.Label>Email</Form.Label>
        </Form.Group>
        <Form.Group className="form-sub-group">
          <Form.Control
            name={`member-phno-${memberNo}`}
            type="tel"
            value={teamData.teamMembers[memberNo - 1].phNo}
            placeholder="Phone Number"
            onChange={(e) => {
              const members = teamData.teamMembers.slice();
              members[memberNo - 1].phNo = e.target.value;
              return setTeamData({ ...teamData, teamMembers: members });
            }}
            onBlur={(e) => {
              const members = teamData.teamMembers.slice();
              members[memberNo - 1].phNo = format(e.target.value);
              return setTeamData({ ...teamData, teamMembers: members });
            }}
            required={memberNo === 1}
          />
          <Form.Label>Contact number</Form.Label>
        </Form.Group>
      </div>
    </div>
  );
};

export default Member;
