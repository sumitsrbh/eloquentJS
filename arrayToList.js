function arrayToList(array) {
  let list = null
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list }
  }
  return list
}

function listToArray(list) {
  let array = []
  for (let node = list; node; node = node.rest) {
    array.push(node.value)
  }
  return array
}

function prepend(value, list) {
  let temp = list
  list = { value: value, rest: temp }
  return list
}

function nth(list, index) {
  let array = listToArray(list)
  for (let i = 0; i < array.length; i++) {
    if (i == index) return array[index]
    else undefined
  }
}

function nthRecursive(list, n) {
  if (!list) return undefined
  else if (n == 0) return list.value
  else return nth(list.rest, n - 1)
}

console.log(arrayToList([10, 20]))
console.log(listToArray(arrayToList([10, 20, 30])))
console.log(prepend(10, prepend(20, null)))
console.log(nth(arrayToList([10, 20, 30]), 1))
console.log(nthRecursive(arrayToList([10, 20, 30, 40, 50]), 4))
console.log(typeof { here: 1, object: 2 })
