export const addBusiness = (business) => {
  return async (dispatch) => {
    fetch(
      `https://maps.google.com/maps/api/geocode/json?key=AIzaSyD6VnBTdxR-tgn6yan3fgFQ_HBAVb5hLSI&address=${business.address}`
    )
      .then((res) => res.json())
      .then((response) => {
        business.lat = response.results[0].geometry.location.lat;
        business.lng = response.results[0].geometry.location.lng;
        const action = {
          type: "ADD_BUSINESS",
          value: business,
        };
        dispatch(action);
      });
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
