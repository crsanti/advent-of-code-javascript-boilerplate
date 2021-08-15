const solver = require("./part1")

describe.skip("Day 02 > part 1", () => {
  const cases = [
    ["2x3x4", 58],
    ["1x1x10", 43],
  ]

  test.each(cases)("'%s' results in %i", (input, output) => {
    expect(solver(input)).toBe(output)
  })
})
