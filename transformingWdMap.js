const SCRIPTS = require('./scripts')
function map(array, transform) {
  let mapped = []
  for (let element of array) {
    mapped.push(transform(element))
  }
  return mapped
}
function count(array, condition) {
  let count = 0
  for (let element of array) {
    if (condition(element)) count++
  }
  return count
}

let rtlScripts = SCRIPTS.filter((s) => s.direction == 'rtl')
let livingScripts = SCRIPTS.filter((s) => s.living == true)

console.log(map(rtlScripts, (s) => s.name))
console.log(map(livingScripts, (s) => s.name))
console.log(count(livingScripts, (s) => s.name))
