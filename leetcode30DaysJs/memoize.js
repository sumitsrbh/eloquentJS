function memoize(fn) {
  const cache = new Map() // Creates a Map to store previous function results

  return function (...args) {
    const key = args.join(',') // Convert arguments to a string key

    if (cache.has(key)) {
      console.log('Fetching from cache:', key)
      return cache.get(key) // Return cached result if available
    }

    console.log('Computing result for:', key)
    let result = fn(...args)
    cache.set(key, result) // Store new result in cache
    return result
  }
}

// Example: Memoizing a simple sum function
let callCount = 0
const memoizedSum = memoize(function (a, b) {
  callCount += 1
  return a + b
})

console.log(memoizedSum(2, 3)) // Computes: 5
console.log(memoizedSum(2, 3)) // Fetches from cache: 5
console.log(callCount) // 1 (Only computed once)
