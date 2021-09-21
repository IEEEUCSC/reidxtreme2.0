import { CREATE } from "../constants/actionTypes";
import * as api from "../api";

export const createTeam = (team) => async (dispatch) => {
  try {
    const { data } = await api.createTeam(team);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
