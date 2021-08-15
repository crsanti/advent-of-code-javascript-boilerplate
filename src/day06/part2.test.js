const solver = require("./part2")

describe.skip("Day 06 > part 2", () => {
  const cases = [
    ["turn on 0,0 through 0,0", 1],
    ["toggle 0,0 through 999,999", 2e6],
  ]

  test.each(cases)("'%s' results in %i", (input, output) => {
    expect(solver(input)).toBe(output)
  })
})
