const fn = (start, stop) => {
  console.log(`Count: ${start}`)
  start++
  if (start > stop) clearInterval(setIntervalId)
}
const setIntervalId = setInterval(() => fn.bind(1, 10), 1000)
