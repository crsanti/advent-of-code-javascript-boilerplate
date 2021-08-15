const solver = require("./part1")

describe.skip("Day 06 > part 1", () => {
  const cases = [
    ["turn on 0,0 through 999,999", 1e6],
    ["toggle 0,0 through 999,0", 1e3],
    ["turn off 499,499 through 500,500", 4],
  ]

  test.each(cases)("'%s' results in %i", (input, output) => {
    expect(solver(input)).toBe(output)
  })
})
