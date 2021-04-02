const { factorial, recursiveFactorial, recursiveFactorialUp } = require("./");

describe("factorialUp", () => {
  it("should return the correct factorial number", () => {
    const result = factorial(3);

    expect(result).toBe(6);
  });

  it("should return the correct factorial number recursively", () => {
    const result = recursiveFactorial(3);

    expect(result).toBe(6);
  });

  it("should return the correct factorial number recursively upwards", () => {
    const result = recursiveFactorialUp(3);

    expect(result).toBe(6);
  });
});
