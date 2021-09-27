import axios from "axios";

const url = "https://reidxtreme.herokuapp.com/";
// const url = "http://localhost:5000/";

export const createTeam = (newTeam) => axios.post(url, newTeam);
