import { connect } from "react-redux";
import Home from "../components/Home";
import { removeBusiness } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    businesses: state.businesses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeBusiness: (id) => dispatch(removeBusiness(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
