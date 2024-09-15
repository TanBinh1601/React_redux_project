import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Nav from "./Nav";
import Poll from "./Poll";
import { connect } from "react-redux";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const PollDetail = ({ authedUser, question, users }) => {
  if (!question) {
    return <Navigate to="/error" />;
  }

  const hasVote =
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser);

  return (
    <>
      <Nav />
      <div className="container">
        <div className="d-flex flex-column align-items-center">
          <div className="poll-title">Poll by {users[question.author].name}</div>
          <img
            src={users[question.author].avatarURL}
            alt="Avatar"
            className="poll-img"
          ></img>
          <div className="poll-title">Would You Rather</div>
          <div className="row container d-flex justify-content-center">
            <div className="col-4">
              <Poll
                hasVote={hasVote}
                question={question}
                answer={"optionOne"}
                text={question.optionOne.text}
              />
            </div>
            <div className="col-4">
              <Poll
                hasVote={hasVote}
                question={question}
                answer={"optionTwo"}
                text={question.optionTwo.text}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { question_id } = props.router.params;
  const question = Object.values(questions).find(
    (item) => item.id === question_id
  );
  return {
    authedUser,
    question,
    users,
  };
};

export default withRouter(connect(mapStateToProps)(PollDetail));
