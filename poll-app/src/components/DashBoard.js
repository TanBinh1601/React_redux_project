import { useState } from "react";
import Nav from "./Nav";
import Question from "./QuestionList";
import { connect } from "react-redux";
import clsx from "clsx";

const DashBoard = ({ authedUser, questions }) => {
  const [isToggle, setIsToggle] = useState(true);

  const toggleChange = () => {
    setIsToggle(!isToggle);
  };

  const unanswered = questions.filter(
    (question) =>
      !question.optionOne.votes.includes(authedUser) &&
      !question.optionTwo.votes.includes(authedUser)
  );

  const answered = questions.filter(
    (question) =>
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
  );
  return (
    <>
      <Nav />
      <div className="container">
        <div className="mt-4">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button
                className={clsx(
                  "nav-link",
                  isToggle ? "disabled-button" : ""
                )}                
                onClick={toggleChange}
                disabled={isToggle}
              >
                New Questions
              </button>
            </li>
            <li className="nav-item">
              <button
                className={clsx(
                  "nav-link",
                  !isToggle ? "disabled-button" : ""
                )}                
                onClick={toggleChange}
                disabled={!isToggle}
              >
                Done
              </button>
            </li>
          </ul>
          <Question questions={isToggle ? unanswered : answered} />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ authedUser, questions }) => ({
  authedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
});

export default connect(mapStateToProps)(DashBoard);
