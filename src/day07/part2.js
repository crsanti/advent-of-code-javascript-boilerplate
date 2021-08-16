const solver = require("./part1")

// This uses part1 to retrieve the value of 'a' and prepare the input for part2
const prepareInput = (input) => {
  const a_value = solver(input)
  return input.replace(/\d+ -> b\n/, `${a_value} -> b\n`)
}

module.exports = (input) => {
  input = prepareInput(input)
  throw new Error("To be implemented")
}

// Helper to be called at last instance to retrieve the value of 'a'.
// It is not tied to any data structure.
const getA = (data) => {
  throw new Error("To be implemented")
}
