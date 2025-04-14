/*  Problem: Throttle Button Click Logger
Objective: Create a button that logs "Button clicked" — but throttled so it logs only once every 2 seconds, even if you click multiple times rapidly */

function throttle(fn, delay) {
  // your logic here
  let lastCall = 0
  return function throttledFunc(...args) {
    // throttling logic
    const now = Date.now()
    if (now - lastCall > delay) {
      lastCall = now
      fn(...args)
    } else {
      console.log(`Wait for ${delay} seconds`)
    }
  }
}
