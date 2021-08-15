const solver = require("./part1")

describe.skip("Day 05 > part 1", () => {
  const cases = [
    ["ugknbfddgicrmopn", 1],
    ["aaa", 1],
    ["jchzalrnumimnmhp", 0],
    ["haegwjzuvuyypxyu", 0],
    ["dvszwmarrgswjxmb", 0],
  ]

  test.each(cases)("'%s' results in %i", (input, output) => {
    expect(solver(input)).toBe(output)
  })
})
