const { sum, res, mul, div, pow, sqrt } = require("./fns.js");

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("rest 1 - 2 to equal -1", () => {
    expect(res(1, 2)).toBe(-1);
});

test("mul 1 * 2 to equal 2", () => {
    expect(mul(1, 2)).toBe(2);
});

test("div 4 / 2 to equal 2", () => {
    expect(div(4, 2)).toBe(2);
});

test('div 4 / 0 to equal "Error: div by 0"', () => {
    expect(div(4, 0)).toBe("Error: div by 0");
});

test("pow 4 ** 2 to equal 16", () => {
    expect(pow(4, 2)).toBe(16);
});

test("sqrt 4 to equal 2", () => {
    expect(sqrt(4)).toBe(2);
});
