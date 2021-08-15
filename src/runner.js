const fs = require("fs")
const path = require("path")
const yargs = require("yargs/yargs")
const { hideBin } = require("yargs/helpers")
const { argv } = yargs(hideBin(process.argv))
const [relSolverFilePath] = argv._

const absSolverFilePath = path.resolve(__dirname, relSolverFilePath)
const absSolverFileDirPath = path.dirname(absSolverFilePath)
const absInputFilePath = path.resolve(absSolverFileDirPath, "input")

const solver = require(absSolverFilePath)
let input

if (fs.existsSync(absInputFilePath)) {
  input = fs.readFileSync(absInputFilePath).toString()
}

console.log("Results:", solver(input))
