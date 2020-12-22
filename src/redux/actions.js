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

const loginUser = (User) => {
  return function (dispatch) {
    fetch("/auth/login", {
      method: "POST",
      body: JSON.stringify(User),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) =>
        res.json().then((data) => {
          document.cookie = "loggedIn=true;max-age=600*1000";
          dispatch(userLoaded(data));
        })
      )

      .catch((error) => {
        return {
          type: "error",
          value: error,
        };
      });
  };
};
const userLoaded = (data) => {
  return {
    type: "LOGIN",
    value: data,
  };
};

const userAdded = (data) => {
  return {
    type: "ADD_USER",
    value: data,
  };
};
const setUser = (User) => {
  return function (dispatch) {
    fetch("/signup", {
      method: "POST",
      body: JSON.stringify(User),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) =>
        res.json().then((data) => {
          dispatch(userAdded(data));
        })
      )

      .catch((error) => {
        return {
          type: "error",
          value: error,
        };
      });
  };
};

export { loginUser, setUser };