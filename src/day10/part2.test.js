const solver = require("./part2")

describe.skip("Day 10 > part 2", () => {
  const cases = [
    ["1", 1166642],
    ["11", 1520986],
    ["21", 1982710],
    ["1211", 2584304],
    ["111221", 3369156],
  ]

  test.each(cases)("'%s' results in %i", (input, output) => {
    expect(solver(input)).toBe(output)
  })
})
