class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b
  } else {
    throw new MultiplicatorUnitFailure('Klunk')
  }
}

function reliableMultiply(a, b) {
  try {
    return primitiveMultiply(a, b) // Return the result
  } catch (error) {
    if (error instanceof MultiplicatorUnitFailure) {
      return reliableMultiply(a, b) // Recursive call with return
    } else {
      throw error // Throw other unexpected errors
    }
  }
}

console.log(reliableMultiply(8, 8))
// → 64
