import { expect } from "chai";
import { add } from "./index.js";

describe("String Calculator", () => {
  it("when empty string return 0", () => {
    expect(add("")).to.equal(0);
  });

  it("when one number is provided return the number itself", () => {
    expect(add("7")).to.equal(7);
  });

  it("when two comma-separated numbers return the sum of numbers", () => {
    expect(add("3,4")).to.equal(7);
  });

  it("when multiple comma-separated numbers return the sum of numbers", () => {
    expect(add("1,2,4")).to.equal(7);
  });

  it("when new lines between numbers return the sum of numbers", () => {
    expect(add("1\n2,4")).to.equal(7);
  });

  it("when different delimiters present in the string return sum of numbers", () => {
    expect(add("//;\n5;2")).to.equal(7);
    expect(add("//|\n1|2|4")).to.equal(7);
    expect(add("//***\n1***2***4")).to.equal(7);
    expect(add("//*[*]*\n1*[*]*2*[*]*4")).to.equal(7);
  });
});
