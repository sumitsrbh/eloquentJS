function customForEach(arry, fn) {
  arry.forEach((element) => fn(element))
}

customForEach([1, 2, 3], function (num) {
  console.log(num * 2)
})
