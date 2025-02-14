const SCRIPTS = require('./scripts')

function reduce(array, combine, start) {
  let current = start
  for (let element of array) {
    current = combine(current, element)
  }
  return current
}

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from)
  }, 0)
}

console.log(
  SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a
  })
)

// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0))

//To use reduce (twice) to find the script with the most characters,

//Problem 1: Product of Array Elements
// Write a function that uses reduce to calculate the product of all elements in an array.
// console.log(reduce([1, 2, 3, 4], (a, b) => a * b, 1))
