// Using map, filter, reduce Together
const nums = [1, 2, 3, 4, 5]

function filter(arry, fn) {
  return arry.filter((element) => fn(element))
}
function reduceSum(arry) {
  return arry.reduce((accum, currentVal) => accum + currentVal ** 2, 0)
}

console.log(reduceSum(filter(nums, (element) => element % 2 === 0)))
