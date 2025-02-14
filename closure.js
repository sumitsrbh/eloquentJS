function wrapValue(n) {
  let local = n
  return () => local
}

let wrap1 = wrapValue(1)
let wrap2 = wrapValue(2)

// console.log(wrap1())
// console.log(wrap2())
// console.log('hello', wrap1())

function wrapValue(n) {
  let local = n // Creates a local binding (variable)
  return () => local // Returns a function that captures and accesses `local`
}

function multiplier(factor) {
  return (number) => number * factor
}

let twice = multiplier(2)
// console.log(`Factor of 2 is ${twice(5)}`)
// → 10

//example 3
function delayedLog() {
  let count = 0

  setTimeout(function () {
    console.log(`Count is: ${count}`)
  }, 1000)
}

// delayedLog()

//exercise 4
// simple counter
function createCounter() {
  let counter = 1
  return () => counter++
}

const counter = createCounter()
// console.log(counter()) // 1
// console.log(counter()) // 2
// console.log(counter()) // 3

//exercise 5
//custom adder : Create a function makeAdder that takes a number x as an argument and returns a new function. The returned function takes another number y and returns the sum of x and y.
function makeAdder(x) {
  return (y) => x + y
}

const add5 = makeAdder(5)
// console.log(add5(10)) // 15
// console.log(add5(20)) // 25

//exercise 6
//private variables :Write a function createSecret that takes a "secret" string as input. It should return an object with two methods:
// getSecret: Returns the secret string.
// setSecret: Takes a new string and updates the secret.

function createSecret(secret) {
  return {
    getSecret: () => secret,
    setSecret: (newSecret) => (secret = newSecret),
  }
}

const mySecret = createSecret('MyPassword123')
// console.log(mySecret.getSecret()) // "MyPassword123"
// mySecret.setSecret('NewPassword456')
// console.log(mySecret.getSecret()) // "NewPassword456"

//exercise 7  Delayed output
// Modify the code below so that it prints numbers from 1 to 5, one second apart. Hint: Use closures to retain the value of i.
for (var i = 1; i <= 5; i++) {
  let count = i // this was modified
  setTimeout(function () {
    console.log(count) // instead of i count is used .
  }, i * 1000)
}

//exercise 8
// Function Cache : Write a function memoize that takes another function fn as input. It should return a new function that caches the results of fn based on its arguments.
function memoize(fn) {
  // Your code here
}

const slowFunction = (num) => {
  console.log('Computing...')
  return num * 2
}

const fastFunction = memoize(slowFunction)

console.log(fastFunction(5)) // "Computing..." followed by 10
console.log(fastFunction(5)) // 10 (cached result, no "Computing...")
