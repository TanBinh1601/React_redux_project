import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { logoutAction, setAuthedUser } from "../actions/authedUser";
import { useRef } from "react";

const Nav = ({ authedUser, users, dispatch }) => {
  const navigate = useNavigate();
  const selectRef = useRef();

  const logout = () => {
    dispatch(logoutAction());
    navigate("/login");
  };

  const switchUser = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(selectRef.current.value));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/leaderboard">Leaderboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/add">New</Link>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-row-reverse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <img
                src={users[authedUser].avatarURL}
                alt="Avatar"
                className="nav-img"
              ></img>
            </li>
            <li className="nav-item p-2">
              <select
                className="form-select fw-bolder"
                ref={selectRef}
                onChange={switchUser}
                value={authedUser}
              >
                {Object.keys(users).map((key) => (
                  <option key={key} value={key}>
                    {users[key].name}
                  </option>
                ))}
              </select>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" onClick={logout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  users: users,
});

export default connect(mapStateToProps)(Nav);
