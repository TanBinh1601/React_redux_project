const { default: authedUser } = require("./authedUser");

describe("setAuthedUser", () => {
  it("Test reducers authedUser", () => {
    const state = "AVAIBLE";
    const action = {
      type: "SET_AUTHED_USER",
      id: "123",
    };
    const result = authedUser(state, action);
    expect(result).toEqual("123");
  });

  it("Test reducers logout", () => {
    const state = "AVAIBLE";
    const action = {
      type: "LOGOUT",
    };
    const result = authedUser(state, action);
    expect(result).toEqual(null);
  });

  it("Test reducers state", () => {
    const state = "AVAIBLE";
    const action = {};
    const result = authedUser(state, action);
    expect(result).toEqual("AVAIBLE");
  });
});
