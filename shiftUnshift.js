let todoList = []

function remember(task) {
  todoList.push(task) // Add the task to the end of the list
}

function getTask() {
  return todoList.shift() // Remove and return the first task in the list
}

function rememberUrgently(task) {
  todoList.unshift(task) // Add the task to the beginning of the list
}

// Add some tasks
remember('Buy groceries')
remember('Clean the house')

// Add an urgent task
rememberUrgently('Pay electricity bill')

// Display the current todo list
console.log('Current To-Do List:', todoList) // ["Pay electricity bill", "Buy groceries", "Clean the house"]

// Get and complete the first task
console.log('Task to complete:', getTask()) // "Pay electricity bill"

// Display the updated todo list
console.log('Updated To-Do List:', todoList) // ["Buy groceries", "Clean the house"]

console.log([0, 1, 2, 3, 4].slice(2, 4))
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2))
// → [2, 3, 4]

function max(...numbers) {
  let result = -Infinity
  for (let number of numbers) {
    if (number > result) result = number
  }
  return result
}
console.log(max(4, 1, 9, -2))
// → 9

console.log('string'.notAMethod?.())
// → undefined
console.log({}.arrayProp?.[0])
// → undefined
