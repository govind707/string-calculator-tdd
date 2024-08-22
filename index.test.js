import { expect } from "chai";
import { add } from "./index.js";

describe("String Calculator", () => {
  it("when empty string return 0", () => {
    expect(add("")).to.equal(0);
  });
});
