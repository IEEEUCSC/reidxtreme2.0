import { CREATE } from "../constants/actionTypes";
import * as api from "../api";

export const createTeam = (team, setResponse) => async (dispatch) => {
  try {
    const { data } = await api.createTeam(team);
    dispatch({ type: CREATE, payload: data });
    setResponse({ success: true, message: "Team registered successfully" });
  } catch (error) {
    const message = error.response?.data?.message || null;
    let errorMessage = String;
    if (message && message.slice(0, 6) === "E11000") {
      if (message.includes("teamName")) {
        errorMessage = "Team Name already taken";
      } else {
        errorMessage = "HackerRank Handle already taken";
      }
    } else {
      errorMessage = "Unable to register team";
    }
    setResponse({ success: false, message: errorMessage });
  }
};
