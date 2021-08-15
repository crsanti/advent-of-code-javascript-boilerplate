const solver = require("./part2")

describe.skip("Day 02 > part 2", () => {
  const cases = [
    ["2x3x4", 34],
    ["1x1x10", 14],
  ]

  test.each(cases)("'%s' results in %i", (input, output) => {
    expect(solver(input)).toBe(output)
  })
})
