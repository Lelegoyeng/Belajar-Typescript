import { sayHello } from "../src/say-hello";

describe("sayHello", function (): void {
  it("should return hello kevin", function (): void {
    expect(sayHello("kevin")).toBe("Hello kevin");
  });
});
