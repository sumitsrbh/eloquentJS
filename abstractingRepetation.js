function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
}

// repeatLog(6)

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i)
  }
}

let labels = []
repeat(5, (i) => {
  labels.push(`Unit ${i + 1}`)
})
// console.log(labels)

// repeat(3, console.log)

// exercise 1 :Generating Even Numbers
//Write a function generateEvenNumbers(n, callback) that generates the first n even numbers and applies a callback function to each. Then use the function to print each even number.
function generateEvenNumbers(n, action) {
  let temp = 0
  while (n >= 0) {
    temp = temp + 2
    action(temp)
    n--
  }
}

function generateEvenNumbersBetter(n, callback) {
  for (let i = 0; i < n; i++) {
    callback(i * 2)
  }
}

// generateEvenNumbersBetter(15, console.log)

//exercise 3:: Filtering Numbers
// Write a function filterNumbers(n, predicate) that generates numbers from 0 to n-1 and returns only those that satisfy the predicate.

function filterNumbers(n, predicate) {
  let numbers = []
  for (let i = 0; i < n; i++) {
    predicate(i) && numbers.push(i)
  }
  return numbers
}

// console.log(filterNumbers(10, (i) => i % 2 === 0))

// exercise 4 : Mapping Over Repeated Actions
//Create a function mapRepeat(n, action) that runs action n times and returns an array of the results of action.
function mapRepeat(n, action) {
  let array = []
  for (let i = 0; i < n; i++) {
    array.push(action(i))
  }
  return array
}
// console.log(mapRepeat(5, (i) => i * i))

//Exercise 5 :Accumulating Results
// Write a function accumulate(n, reducer, initialValue) that calls reducer on each index from 0 to n-1, accumulating the result starting with initialValue.

function accumulate(n, reducer, initialValue) {
  let accumulator = initialValue
  let string = ''

  for (let i = 0; i < n; i++) {
    accumulator = reducer(accumulator, i)
    console.log('value of i', i, 'value of string', string)
    string += i + (i < n - 1 ? ' + ' : '')
  }
  return `${accumulator} (${string})`
}

// console.log(accumulate(5, (sum, i) => sum + i, 0))

// Problem 6: Simulating Multiplication
// Write a function multiply(a, b, action) that simulates multiplication by repeatedly adding a, b times. Call action for each addition step.

function multiply(a, b, action) {
  let mul = 0
  for (let i = 0; i < b; i++) {
    action((mul += a))
  }
}

multiply(3, 4, console.log)
