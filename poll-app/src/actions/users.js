export const GET_USERS = "GET_USERS";
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";
export const SAVE_USER_QUESTION = "SAVE_USER_QUESTION";

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function saveUserAnswer(author, qid, answer) {
  return {
    type: SAVE_USER_ANSWER,
    author,
    qid,
    answer,
  };
}

export function saveUserQuestion(qid, author) {
  return {
    type: SAVE_USER_QUESTION,
    qid,
    author,
  };
}
