class City {
  constructor(name) {
    this.name = name
  }
  info(text) {
    console.log(`Welcome to  ${this.name}`)
  }
}

const newCity = new City('New York')
newCity.info()
City.prototype.pinCode = 811211
console.log(newCity.pinCode)
//adding properties on the fly.
newCity.pinCode = 123456
console.log('overrding pincode', newCity.pinCode)

console.log('basic value ', new City('basic').pinCode)

console.log('Object.getPrototypeOf(City)', Object.getPrototypeOf(City))
console.log('Object.getPrototypeOf(newCity)', Object.getPrototypeOf(newCity))
console.log('Object.getPrototypeOf(newCity)', Object.getPrototypeOf(newCity))
console.log('Object.getPrototypeOf(newCity)', newCity)
console.log(
  'Prototype Properties:',
  Object.getOwnPropertyNames(Object.getPrototypeOf(newCity))
)

// // Show prototype properties
// Outputs: ['constructor', 'info', 'pinCode']
