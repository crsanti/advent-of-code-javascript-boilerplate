const solver = require("./part2")

describe("Day 03 > part 2", () => {
  const cases = [
    ["^v", 3],
    ["^>v<", 3],
    ["^v^v^v^v^v", 11],
  ]

  test.each(cases)("'%s' results in %i", (input, output) => {
    expect(solver(input)).toBe(output)
  })
})
