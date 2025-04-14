// Create a function once that ensures a function can only be called once.

function once(fn) {
  let called = false
  return function (...args) {
    if (!called) {
      called = true
      return fn(...args)
    }
  }
}

const sayHello = once(() => console.log('Hello!'))
sayHello() // Hello!
// sayHello() // Nothing happens
console.log('Second call', sayHello())
