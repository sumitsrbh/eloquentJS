class InputError extends Error {} // Custom error class

function promptDirection(question) {
  let result = prompt(question)
  if (result.toLowerCase() == 'left') return 'L'
  if (result.toLowerCase() == 'right') return 'R'
  throw new InputError('Invalid direction: ' + result)
}

try {
  let dir = promptDirection('Which way?')
  console.log('You chose:', dir)
} catch (e) {
  if (e instanceof InputError) {
    console.log('Not a valid direction. Try again!')
  } else {
    throw e // Let other errors propagate
  }
}
