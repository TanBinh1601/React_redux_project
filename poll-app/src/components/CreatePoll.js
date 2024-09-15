import { useRef } from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import { handleSaveQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const CreatePoll = ({ dispatch }) => {
  const navigate = useNavigate();
  const useRefOne = useRef();
  const useRefTwo = useRef();
  const addPoll = () => {
    if (useRefOne.current.value.trim() !== "" && useRefTwo.current.value.trim()) {
      dispatch(handleSaveQuestion(useRefOne.current.value, useRefTwo.current.value));
      navigate("/");
    }
  };

  return (
    <>
      <Nav />
      <div className="container">
        <div className="d-flex flex-column align-items-center">
          <h3>Would You Rather</h3>
          <p>Create Your Own Poll</p>
          <form className="row">
            <label htmlFor="optionOne" className="form-label">First Option</label>
            <input
              ref={useRefOne}
              type="text"
              id="optionOne"
              placeholder="Option 1"
              className="form-control"
            />
            <label htmlFor="optionTwo" className="form-label mt-3">Second Option</label>
            <input
              ref={useRefTwo}
              type="text"
              id="optionTwo"
              placeholder="Option 2"
              className="form-control"
            />
            <button type="button" className="btn btn-success" onClick={addPoll}>
              Create survey
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(CreatePoll);
