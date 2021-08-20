const solver = require("./part2")

describe.skip("Day 09 > part 2", () => {
  test("'a' should have 1968", () => {
    const input = [
      ["123 -> b"],
      ["456 -> y"],
      ["b AND y -> d"],
      ["b OR y -> e"],
      ["b LSHIFT 2 -> a"],
      ["y RSHIFT 2 -> g"],
      ["NOT b -> h"],
      ["NOT y -> i"],
    ].join("\n")
    expect(solver(input)).toBe(1968)
  })
})
