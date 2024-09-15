import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { saveUserAnswer, saveUserQuestion } from "./users";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const SAVE_ANSWER = "SAVE_ANSWER";
export const CREATE_QUESTION = "CREATE_QUESTION";

export function getQuestion(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

function saveAnswer(author, qid, answer) {
  return {
    type: SAVE_ANSWER,
    author,
    qid,
    answer,
  };
}

function createQuestion(question) {
  return {
    type: CREATE_QUESTION,
    question,
  };
}

export function handleSaveAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestionAnswer(authedUser, qid, answer).then(() => {
      dispatch(saveAnswer(authedUser, qid, answer));
      dispatch(saveUserAnswer(authedUser, qid, answer));
    });
  };
}

export function handleSaveQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion(optionOneText, optionTwoText, authedUser).then(
      (question) => {
        dispatch(createQuestion(question));
        dispatch(saveUserQuestion(question.id, question.author));
      }
    );
  };
}
