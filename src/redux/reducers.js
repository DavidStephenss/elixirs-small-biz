import { combineReducers } from "redux";

const businesses = (state = [], action) => {
  switch (action.type) {
    case "ADD_BUSINESS":
      return [...state, action.value];
    case "REMOVE_BUSINESS":
      const businesses = [...state];
      businesses.splice(action.value, 1);
      return businesses;
    default:
      return state;
  }
};

const loggedIn = (state = [], action) => {
  switch (action.type) {
    case "LOGS_IN":
      return (state = action.value);
    default:
      return state;
  }
};

const user = (state = "", action) => {
  switch (action.type) {
    case "SET_USER":
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({ user, businesses, loggedIn });
