const solver = require("./part1")

describe.skip("Day 07 > part 1", () => {
  test("'a' should have 492", () => {
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
    expect(solver(input)).toBe(492)
  })
})
