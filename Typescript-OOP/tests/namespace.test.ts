import { MathUtil } from "../src/math-util";

describe("Namespace", () => {
  it("Should support", () => {
    console.info(MathUtil.PI);
    console.info(MathUtil.sum(1, 2, 3));
  });
});
