// function every(array, test) {
//   for (let element of array) {
//     if (!test(element)) return false
//   }
//   return true
// }
// console.log(every([1, 3, 5], (n) => n < 10))

// using some method
// function every(array, test) {
//   let flag = true
//   array.some((a) => {
//     if (!test(a)) flag = false
//   })
//   return flag
// }
function every(array, test) {
  return !array.some((element) => !test(element))
}

console.log(every([2, 4, 16], (n) => n < 10))
console.log(every([1, 3, 5], (n) => n < 10))
console.log(every([], (n) => n < 10))
