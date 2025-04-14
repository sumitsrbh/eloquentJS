function customFilter(arry, fn) {
  // console.log(arry.filter((element) => fn(element)))
  console.log(arry.map((element) => fn(element)))
}

const result = customFilter([5, 12, 8], function (num) {
  return num > 10
})
// Output: [12]
