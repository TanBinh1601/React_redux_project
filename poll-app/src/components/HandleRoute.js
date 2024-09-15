import { connect } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const HandleRoute = ({ children, authedUser }) => {
  const location = useLocation();
  return authedUser ? (
    children
  ) : (
    <Navigate to={`/login?redirect=${location.pathname}`} />
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(HandleRoute);
