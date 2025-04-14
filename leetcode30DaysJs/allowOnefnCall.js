// var once = function (fn) {
//   let calledOnce = false
//   return function (...args) {
//     if (calledOnce) return undefined
//     else {
//       calledOnce = true
//       return fn(...args)
//     }
//   }
// }

// var once = function (fn) {
//   let calledOnce = false
//   if (calledOnce) return undefined
//   return function (...args) {
//     calledOnce = true
//     return fn(...args)
//   }
// }

// let fn = (a, b, c) => a + b + c
// let onceFn = once(fn)
// console.log(onceFn(1, 2, 3)) // 6
// console.log(onceFn(2, 3, 6)) // returns undefined without calling fn

// using class methods
class Once {
  hasBeenCalled = false
  result

  call(fn, ...args) {
    if (!this.hasBeenCalled) {
      this.result = fn(...args)
      this.hasBeenCalled = true
      return this.result
    } else {
      return undefined
    }
  }
}

function once(fn) {
  const instance = new Once()
  return instance.call.bind(instance, fn)
}
