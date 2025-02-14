const range = (start, end, step) => {
  let array = []
  if (start <= end) {
    while (start <= end) {
      step
        ? array.push(start) && (start = start + step)
        : array.push(start) && start++
    }
  } else {
    while (end <= start) {
      step
        ? array.push(start) && (start = start + step)
        : array.push(start) && start--
    }
  }
  return array
}
// const rangeStep=(start,end,step)=>{
//     let array=[]
//     start > end ? range(start,end):
// }

function sum(array) {
  let sum = 0
  for (let num of array) sum += num
  return sum
}

console.log(range(1, 10, 2))
console.log(range(5, 2, -1))
console.log(sum(range(1, 10)))
