let agess = {
  Boris: 39,
  Liang: 22,
  Júlia: 62,
}

console.log(`Júlia is ${agess['Júlia']}`)
// → Júlia is 62
console.log("Is Jack's age known?", 'Jack' in agess)
// → I's age known? fals08ujy7hn fc
console.log("Is toString's age known?", 'toString' in agess)
// → Is toString's age known? true

let ages = new Map()
ages.set('Boris', 39)
ages.set('Liang', 22)
ages.set('Júlia', 62)

console.log(`Júlia is ${ages.get('Júlia')}`)
// → Júlia is 62
console.log("Is Jack's age known?", ages.has('Jack'))
// → Is Jack's age known? false
console.log(ages.has('toString'))
// → false

console.log(Object.hasOwn({ x: 1 }, 'x'))
// → true
console.log(Object.hasOwn({ x: 1 }, 'toString'))
// → false
