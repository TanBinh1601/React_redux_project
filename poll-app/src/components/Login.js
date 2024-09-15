import { useState } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";

const Login = ({ users, dispatch }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("sarahedo");
  const [pass, setPass] = useState("password123");
  const [error, setError] = useState(false);
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get("redirect");

  const handleLogin = (e) => {
    e.preventDefault();
    const checkLogin = Object.keys(users).includes(name);
    if (checkLogin) {
      dispatch(setAuthedUser(name));
      setError(false);
      navigate(redirect ? redirect : "/");
    } else {
      setError(true);
    }
  };

  return (
    <div className="container">
      <form className="row d-flex flex-column align-items-center">
        <h2 className="p-4 d-flex justify-content-center">Login</h2>
        {error && (
          <span data-testid="error" className="alert alert-danger col-6">
            Please enter username
          </span>
        )}
        <div className="col-4 mb-2">
          <label htmlFor="inputUsername" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="inputUsername"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="username"
            data-testid="username"
          />
        </div>
        <div className="col-4">
          <label htmlFor="inputPassword" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            autoComplete="current-password"
            data-testid="password"
          />
        </div>
        <button className="btn btn-primary" data-testid="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Login);
