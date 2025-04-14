function limitCalls(fn, n) {
  let calledTimes = 0
  return function (...args) {
    if (calledTimes < n) {
      calledTimes++
      return fn(...args)
    }
  }
}

const log = () => console.log('Function called!')

const limitedLog = limitCalls(log, 2)

limitedLog() // ✅ "Function called!"
limitedLog() // ✅ "Function called!"
limitedLog() // ❌ nothing
limitedLog() // ❌ still nothing
