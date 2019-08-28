const sum = require("./index");

test("", () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
});