const { test, expect } = require("@jest/globals");
const fetch = require("fetch").fetchUrl;

test("returns first user", () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1", (err, meta, body) => {
    expect.assertions(1);
    const data = JSON.parse(body.toString());
    expect(data).toStrictEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    });
  });
});
