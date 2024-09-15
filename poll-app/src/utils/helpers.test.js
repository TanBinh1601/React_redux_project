const { formatDate } = require("./helpers");

describe("formatDate", () => {
  it("Test in case have param is character", () => {
    const result = formatDate("abc");
    expect(result).toEqual("Invalte | Invalid Date");
  });
});
