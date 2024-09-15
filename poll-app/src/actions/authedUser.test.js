const { setAuthedUser } = require("./authedUser");

describe("setAuthedUser", () => {
  it("Test action authedUser", () => {
    const result = setAuthedUser("abc");
    expect(result.type).toEqual("SET_AUTHED_USER");
  });
});
