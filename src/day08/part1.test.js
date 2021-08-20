const solver = require("./part1")

describe.skip("Day 08 > part 1", () => {
  const input = ["", "abc", 'aa"aa', "\x27"].join("\n")

  test(`${input} returns 12`, () => {
    expect(solver(input)).toBe(12)
  })
})
