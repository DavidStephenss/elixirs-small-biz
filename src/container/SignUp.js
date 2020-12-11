import { connect } from "react-redux";
import SignUp from "../components/SignUp";
import { setUser } from "../redux/actions";

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
