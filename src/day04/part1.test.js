const solver = require("./part1")

describe.skip("Day 04 > part 1", () => {
  const cases = [
    ["abcdef", 609043],
    ["pqrstuv", 1048970],
  ]

  test.each(cases)("'%s' results in %i", (input, output) => {
    expect(solver(input)).toBe(output)
  })
})
