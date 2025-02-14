function countBs(string) {
  let count = 0
  for (i = 0; i < string.length; i++) {
    string[i] == 'B' && count++
  }
  return count
}

// console.log(countBs('BOB'))

function countChar(string, char) {
  let count = 0
  for (i = 0; i < string.length; i++) {
    string[i] == char && count++
  }
  return count
}

console.log(countChar('kakkerlak', 'k'))

for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events.`)
}
