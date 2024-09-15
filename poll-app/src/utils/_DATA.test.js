const {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} = require("./_DATA");

describe("_getQuestions", () => {
  it("will return true if get success", async () => {
    const result = await _getQuestions();
    expect(Object.keys(result).length).toEqual(6);
  });
});

describe("_getUsers", () => {
  it("will return true if get success", async () => {
    const result = await _getUsers();
    expect(Object.keys(result).length).toEqual(4);
  });
});

describe("_saveQuestion", () => {
  it("will return true if save success", async () => {
    const mockObject = {
      optionOneText: "Question1",
      optionTwoText: "Question2",
      author: "sarahedo",
    };

    const result = await _saveQuestion(mockObject);
    expect(result).toBeTruthy();
    expect(result.author).toEqual("sarahedo");
    expect(result.optionOne.text).toEqual("Question1");
    expect(result.optionTwo.text).toEqual("Question2");
  });

  it("will return an error if the save fail", async () => {
    const mockObject = {
      optionOneText: null,
      optionTwoText: null,
      author: null,
    };

    await expect(_saveQuestion(mockObject)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("will return true if save success", async () => {
    const mockObject = {
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    };
    const result = await _saveQuestionAnswer(mockObject);

    expect(result).toBeTruthy();
  });

  it("will return an error if the save fail", async () => {
    const mockObject = {
      authedUser: null,
      qid: null,
      answer: null,
    };

    await expect(_saveQuestionAnswer(mockObject)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
