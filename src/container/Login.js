import { connect } from "react-redux";
import Login from "../components/Login";
import { removeBusiness, setUser } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeBusiness: (id) => dispatch(removeBusiness(id)),
    setUser: (username) => dispatch(setUser(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
