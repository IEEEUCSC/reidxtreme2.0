/**
 * Form Validation
 */

// Checking if fields are empty
export const isFormValid = (teamData) => {
  // Checking team details
  if (teamData.teamName === "" || teamData.teamHandle === "") return false;

  // Checking member details
  const teamMembers = teamData.teamMembers.slice();
  if (teamMembers.length !== 0) {
    var valid = true;
    var memberNo = 1;
    for (let i = 0; i < teamMembers.length; i++) {
      const member = teamMembers[i];
      memberNo = i + 1;

      if (member.regNo === "") valid = false;
      if (member.name === "") valid = false;
      if (member.phNo === "") valid = false;
      if (member.email === "") valid = false;
      console.log(memberNo);

      if (!valid) {
        break;
      }
    }
    if (!valid)
      return {
        isValid: false,
        memberNo: memberNo,
      };
  } else {
    return {
      isValid: false,
      memberNo: 1,
    };
  }
  return {
    isValid: true,
    memberNo: null,
  };
};

// Checking if team handle is valid
export const isTeamHandleValid = (teamData) =>
  teamData.teamHandle.slice(0, 4) === "RX2_";

// Removing extra spaces
export const removeExtraSpace = (string) => string.replace(/\s+/g, " ").trim();
