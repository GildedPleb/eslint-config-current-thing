/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
// PathMark: ./test/basic.test.js
/**
 * @param {number} first - numberator
 * @param {number} second - denominator
 * @returns {number} - returning a number
 */
const multiply = (first, second) => first * second;

/**
 *
 */
class TestCLass {
  /**
   *
   * @param {number} number - hello
   */
  constructor(number) {
    this.num = number ?? 0;
  }

  /**
   * @returns {number} sdfg
   */
  getNum() {
    return this.num;
  }
}

describe("multiply function", function a() {
  it("multiplies two numbers correctly", function b() {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(4, 5)).toBe(20);
  });

  it("handles zeros correctly", function c() {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(2, 0)).toBe(0);
    expect(multiply(0, 0)).toBe(0);
  });

  it("handles negatives correctly", function d() {
    expect(multiply(-2, 4)).toBe(-8);
    expect(multiply(5, -3)).toBe(-15);
    expect(multiply(-2, -2)).toBe(4);
  });

  it("handles decimal numbers correctly", function g() {
    expect(multiply(0.5, 0.5)).toBe(0.25);
  });

  it("handles large numbers correctly", function f() {
    expect(multiply(1_000_000_000, 1_000_000_000)).toBe(
      1_000_000_000_000_000_000,
    );
  });

  it("returns number", function h() {
    const t = new TestCLass(4);

    expect(t.getNum()).toBe(4);
  });
});
// EOF
