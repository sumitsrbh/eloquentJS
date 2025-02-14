let sym1 = Symbol('name')
let sym2 = Symbol('name')
console.log(sym1 == sym2) // Outputs: false

let user = { name: 'Alice' }
user[Symbol('id')] = '123' // Unique property

const obj = {
  [Symbol('hidden')]: 'secret',
  visible: 'public',
}

for (let key in obj) {
  console.log(key) // Outputs: visible
}
// Properties keyed by symbols do not appear in for...in loops or Object.keys(), making them less accessible and effectively "hidden" from standard enumeration methods.

const myObj = {
  [Symbol('foo')]: 'bar',
}

const symKey = Object.getOwnPropertySymbols(myObj)[0]
console.log(myObj[symKey]) // Outputs: bar
// To access properties keyed by symbols, you must use bracket notation:

let myTrip = {
  length: 2,
  0: 'Lankwitz',
  1: 'Babelsberg',
  [length]: 21500,
}
console.log(myTrip[length], myTrip.length)
// → 21500 2

const mySymbol = Symbol('example')
console.log(mySymbol.description) // Outputs: example
