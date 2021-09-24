import { CREATE } from "../constants/actionTypes";
import * as api from "../api";

export const createTeam = (team, setResponse) => async (dispatch) => {
  try {
    const { data } = await api.createTeam(team);
    dispatch({ type: CREATE, payload: data });
    setResponse({ success: true, message: "Team registered successfully" });
  } catch (error) {
    setResponse({ success: false, message: "Unable to register team" });
  }
};
