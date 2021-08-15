const solver = require("./part2")

describe.skip("Day 01 > part 2", () => {
  const cases = [
    [")", 1],
    ["()())", 5],
  ]

  test.each(cases)("'%s' results in %i", (input, output) => {
    expect(solver(input)).toBe(output)
  })
})
