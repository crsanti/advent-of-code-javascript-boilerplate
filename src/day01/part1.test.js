const solver = require("./part1")

describe.skip("Day 01 > part 1", () => {
  const cases = [
    ["(())", 0],
    ["()()", 0],
    ["(((", 3],
    ["(()(()(", 3],
    ["))(((((", 3],
  ]

  test.each(cases)("'%s' results in %i", (input, output) => {
    expect(solver(input)).toBe(output)
  })
})
