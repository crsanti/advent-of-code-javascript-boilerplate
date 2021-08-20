const solver = require("./part1")

describe.skip("Day 10 > part 1", () => {
  const cases = [
    ["1", 82350],
    ["11", 107312],
    ["21", 139984],
    ["1211", 182376],
    ["111221", 237746],
  ]

  test.each(cases)("'%s' results in %i", (input, output) => {
    expect(solver(input)).toBe(output)
  })
})
