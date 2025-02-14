function isEven(N) {
  //   let value = N
  function find(N) {
    if (N == 0) return true
    else if (N == 1) return false
    else if (N < 0) return find(N + 2)
    else return find(N - 2)
  }
  return find(N)
}
console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-2))
