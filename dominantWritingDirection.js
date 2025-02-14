const SCRIPTS = require('./scripts')

function countBy(items, groupName) {
  let counts = []
  for (let item of items) {
    let name = groupName(item)
    let known = counts.find((c) => c.name == name)
    if (known) {
      counts.push({ name, count: 1 })
    } else {
      known.count++
    }
  }
  return counts
}
function textScripts(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0))
    return script ? script.name : 'none'
  }).filter(({ name }) => name != 'none')
  return scripts
}
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

function dominantDirection(text) {}

console.log(dominantDirection('Hello!'))
