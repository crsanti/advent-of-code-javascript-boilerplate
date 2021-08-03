# Advent Of Code

This is a boilerplate to solve [Advent Of Code](https://adventofcode.com) exercises using JavaScript.

## How to use it

In order to run a specific day and part just use:

```bash
npm start day<number> [part]
```

Examples:

To run day 5, part 2:

```bash
npm start day5 2
```

To run day 7, part 1:

```bash
npm start day7 1
```

or

```bash
npm start day7
```

## How to add days

Just create a module in `./src/day<number>/day<number>.js` that exports two functions:

```js
exports.run1 = () => {
  // Code to solve Part One
}

exports.run2 = () => {
  // Code to solve Part Two
}
```

You may want to also add `./src/day<number>/day<number>.md` with the description.

---

Happy coding~🎄!
