import { CREATE } from "../constants/actionTypes";

const reducer = (teams = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...teams, action.payload];
    default:
      return teams;
  }
};

export default reducer;
