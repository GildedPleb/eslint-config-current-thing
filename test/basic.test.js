/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/check-tag-names */
/* eslint-disable tsdoc/syntax */
// PathMark: ./test/basic.test.js
const multiply = (
  /** @type { number } */ first,
  /** @type { number } */ second,
) => first * second;

describe("multiply function", () => {
  it("multiplies two numbers correctly", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(4, 5)).toBe(20);
  });

  it("handles zeros correctly", () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(2, 0)).toBe(0);
    expect(multiply(0, 0)).toBe(0);
  });

  it("handles negatives correctly", () => {
    expect(multiply(-2, 4)).toBe(-8);
    expect(multiply(5, -3)).toBe(-15);
    expect(multiply(-2, -2)).toBe(4);
  });

  it("handles decimal numbers correctly", () => {
    expect(multiply(0.5, 0.5)).toBe(0.25);
  });

  it("handles large numbers correctly", () => {
    expect(multiply(1_000_000_000, 1_000_000_000)).toBe(
      1_000_000_000_000_000_000,
    );
  });
});
// EOF
