class Temperature {
  constructor(celsius) {
    this.celsius = celsius
  }
  get fahrenheit() {
    return (9 / 5) * this.celsius + 32
  }
  get kelvin() {
    return this.celsius + 273.15
  }
}

const temp = new Temperature(25)
console.log(temp.fahrenheit) // 77
console.log(temp.kelvin) // 298.15

temp.celsius = 0
console.log(temp.fahrenheit) // 32
console.log(temp.kelvin)
