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
export const isTeamHandleValid = (teamData) =>
  teamData.teamHandle.slice(0, 4) === "RX2_";

// Removing extra spaces
export const removeExtraSpace = (string) => string.replace(/\s+/g, " ").trim();
