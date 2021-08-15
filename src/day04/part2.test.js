const solver = require("./part2")

describe.skip("Day 2 > part 2", () => {
  const cases = [
    ["abcdef", 6742839],
    ["pqrstuv", 5714438],
  ]

  test.each(cases)("'%s' results in %i", (input, output) => {
    expect(solver(input)).toBe(output)
  })
})
