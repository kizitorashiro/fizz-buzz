const assert = require("assert");
const fizzbuzz = require("../index.js");

describe("fizzbuxx", () => {
  it("return FizzBuzz when value is divisible by 15", () => {
    assert(fizzbuzz(30) === "FizzBuzz");
  });
  it("return Fizz when value is divisible by 3", () => {
    assert(fizzbuzz(9) === "Fizz");
  });
  it("return Buzz when value is divisible by 5", () => {
    assert(fizzbuzz(10) === "Buzz");
  });
  it("return the value when value is not divible by 3 or 5", () => {
    assert(fizzbuzz(71) === "71");
  });
});
