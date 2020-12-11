export const addBusiness = (business) => {
  return  {
          type: "ADD_BUSINESS",
          value: business,
      };
};

export const removeBusiness = (id) => {
  return {
    type: "REMOVE_BUSINESS",
    value: id,
  };
};

export const loggedIn = (Boolean) => {
  return { type: "LOGS_IN", value: Boolean };
};

export const setUser = (username) => {
  return {
    type: "SET_USER",
    value: username,
  };
};


