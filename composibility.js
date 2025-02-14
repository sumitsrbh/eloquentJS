const SCRIPTS = require('./scripts')
function average(array) {
  return array.reduce((a, b) => a + b) / array.length
}

// console.log(
//   Math.round(average(SCRIPTS.filter((s) => s.living).map((s) => s.year)))
// )
// → 1165
// console.log(
//   Math.round(average(SCRIPTS.filter((s) => !s.living).map((s) => s.year)))
// )
// → 204

// simialrly this can be done with for loop
let total = 0,
  count = 0
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year
    // console.log('Script year', script.year, '\n total ', total)
    count += 1
  }
}
// console.log(Math.round(total / count))
// → 1165

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to
      })
    ) {
      return script
    }
  }
  return null
}

console.log(characterScript(125184))

arrayObject.some(callback[, thisArg]);
