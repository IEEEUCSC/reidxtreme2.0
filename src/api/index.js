import axios from "axios";

const url = "https://reidxtreme.herokuapp.com/";

export const createTeam = (newTeam) => axios.post(url, newTeam);
