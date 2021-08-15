const solver = require("./part1")

describe("Day 03 > part 1", () => {
  const cases = [
    [">", 2],
    ["^>v<", 4],
    ["^v^v^v^v^v", 2],
  ]

  test.each(cases)("'%s' results in %i", (input, output) => {
    expect(solver(input)).toBe(output)
  })
})
