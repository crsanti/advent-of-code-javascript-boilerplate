const fs = require("fs")
const path = require("path")
const yargs = require("yargs/yargs")
const { hideBin } = require("yargs/helpers")
const { argv } = yargs(hideBin(process.argv))
const [day, part = 1] = argv._

const moduleName = path.resolve(__dirname, `${day}/${day}.js`)

const fail = (...args) => {
  console.log(...args)
  process.exit(0)
}

if (!fs.existsSync(moduleName)) {
  fail(`Module ${day} does not exist`)
}

let mod
try {
  mod = require(moduleName)
} catch (error) {
  if (error instanceof Error && error.code === "MODULE_NOT_FOUND") {
    fail(`Module ${day} exists but exports nothing. Ensure you use 'exports' or 'module.exports'.`, error)
  }
}

const fun = `run${part}`
if (typeof mod[fun] !== "function") {
  fail(`Module ${day} has not exported method ${fun}`)
}

console.log(mod[fun]())
