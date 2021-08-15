const solver = require("./part2")

describe.skip("Day 05 > part 2", () => {
  const cases = [
    ["qjhvhtzxzqqjkmpb", 1],
    ["xxyxx", 1],
    ["uurcxstgmygtbstg", 0],
    ["ieodomkazucvgmuy", 0],
  ]

  test.each(cases)("'%s' results in %i", (input, output) => {
    expect(solver(input)).toBe(output)
  })
})
