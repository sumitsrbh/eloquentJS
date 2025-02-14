const SCRIPTS = require('./scripts')

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

console.log(characterScript(121))
// → {name: "Latin", …}

// a way to loop over character
// If you have a character (which will be a string of one or two code units), you can use codePointAt(0) to get its code.
let roseDragon = '🌹🐉'
for (let char of roseDragon) {
  console.log(char)
}
// → 🌹
// → 🐉

function countBy(items, groupName) {
  let counts = []
  for (let item of items) {
    let name = groupName(item)
    let known = counts.find((c) => c.name == name)
    if (!known) {
      counts.push({ name, count: 1 })
    } else {
      known.count++
    }
  }
  return counts
}

// console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2))
// → [{name: false, count: 2}, {name: true, count: 3}]

function textScripts(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0))
    return script ? script.name : 'none'
  }).filter(({ name }) => name != 'none')

  let total = scripts.reduce((n, { count }) => n + count, 0)
  if (total == 0) return 'No scripts found'

  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name}`
    })
    .join(', ')
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'))
