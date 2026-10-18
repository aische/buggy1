import { describe, expect, it } from "vitest";
import { greet } from "../../src/greeter.js";

describe("greet", () => {
  it("reproduces issue 2: greet falls back to 'Hello, there!' for empty name", () => {
    expect(greet("")).toBe("Hello, there!");
  });
});
