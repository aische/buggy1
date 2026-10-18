import { describe, expect, it } from "vitest";
import { calculateTotal } from "../../src/cart.js";

describe("calculateTotal", () => {
  it("reproduces issue 1: applies discountPercent as a percentage of subtotal before tax", () => {
    expect(
      calculateTotal([{ name: "Item", price: 30, quantity: 1 }], 10, 8),
    ).toBe(29.16);
  });
});
