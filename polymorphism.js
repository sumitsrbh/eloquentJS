// Define a Rabbit constructor function
function Rabbit(type) {
  this.type = type
}

// Add a custom toString method to the Rabbit prototype
Rabbit.prototype.toString = function () {
  return `a ${this.type} rabbit`
}

// Create an instance of Rabbit
const killerRabbit = new Rabbit('killer')

// Convert the rabbit object to a string
console.log(String(killerRabbit)) // Outputs: a killer rabbit
