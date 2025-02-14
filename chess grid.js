for (let i = 0; i < 8; i++) {
  char = ''
  for (let j = 0; j < 8; j++) {
    char += (i + j) % 2 == 0 ? ' ' : '#'
  }
  console.log(char)
}
