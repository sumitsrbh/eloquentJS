// Write a function memoize(fn) that caches the result of calling fn with a given argument.
// If the same input is passed again, return the cached result instead of calling fn again.

function memoize(fn) {
  const cache = new Map()
  return function (...args) {
    const key = JSON.stringify(args)
    if (cache.has(key)) {
      return cache.get(key)
    }
    const result = fn(...args)
    cache.set(key, result)
    return result
  }
}

function slowAdd(...args) {
  console.log('Calculating...')
  return args.reduce((accum, current) => accum + current, 0)
}

const memoizedAdd = memoize(slowAdd)

console.log(memoizedAdd(1, 2)) // 🧠 Calculating...
console.log(memoizedAdd(1, 2)) // ⚡ From cache!
console.log(memoizedAdd(2, 3)) // 🧠 Calculating...
console.log(memoizedAdd(2, 3, 4)) // 🧠 Calculating...
console.log(memoizedAdd(2, 3, 4)) // 🧠 Calculating...
console.log(memoizedAdd(2, 3, 4, 7, 8)) // 🧠 Calculating...
