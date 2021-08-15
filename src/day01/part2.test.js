const solver = require("./index")

xdescribe("Day 01 > part 2", () => {
  const cases = [
    [")", 1],
    ["()())", 5],
  ]

  test.each(cases)("'%s' results in %i", (input, output) => {
    expect(solver(input)).toBe(output)
  })
})
