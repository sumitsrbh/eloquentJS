function powerOf(exp) {
  return (param) => exp ** param
}

const square = powerOf(2)
console.log(square(4)) // 16
