function reverseArrayInPlace(array) {
  let revArray = []
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    revArray = array[array.length - 1 - i]
    array[array.length - 1 - i] = array[i]
    array[i] = revArray
  }
  return array
}

let myArray = ['A', 'B', 'C']
let arrayValue = [1, 2, 3, 4, 5, 6]
console.log(reverseArrayInPlace(myArray))
console.log(reverseArrayInPlace(arrayValue))
