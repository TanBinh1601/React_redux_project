import { setAuthedUser } from "./authedUser";
import { getUsers } from "./users";
import { getInitialData } from "../utils/api";
import { getQuestion } from "./questions";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(setAuthedUser(null));
      dispatch(getUsers(users));
      dispatch(getQuestion(questions));
    });
  };
}
