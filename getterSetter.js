class BankAccount {
  constructor(owner, balance) {
    this.owner = owner
    this._balance = balance // Using _balance to store private data
  }

  // Getter to retrieve the balance safely
  get balance() {
    return `Current balance: $${this._balance}`
  }

  // Setter to prevent negative balances
  set balance(amount) {
    if (amount < 0) {
      console.log('Error: Balance cannot be negative!')
    } else {
      this._balance = amount
    }
  }

  // Method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this._balance += amount
      console.log(`Deposited: $${amount}`)
    } else {
      console.log('Error: Deposit amount must be positive!')
    }
  }

  // Method to withdraw money
  withdraw(amount) {
    if (amount > this._balance) {
      console.log('Error: Insufficient funds!')
    } else {
      this._balance -= amount
      console.log(`Withdrew: $${amount}`)
    }
  }
}

// Creating an account
const myAccount = new BankAccount('Alice', 1000)

console.log(myAccount.balance) // Output: Current balance: $1000

myAccount.deposit(500)
console.log(myAccount.balance) // Output: Current balance: $1500

myAccount.withdraw(300)
console.log(myAccount.balance) // Output: Current balance: $1200

myAccount.withdraw(5000) // Error: Insufficient funds!

myAccount.balance = -100 // Error: Balance cannot be negative!

class Temperature {
  constructor(celsius) {
    this.celsius = celsius
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8)
  }
}

let temp = new Temperature(22)
console.log(temp.fahrenheit)
// → 71.6
temp.fahrenheit = 86
console.log(temp.celsius)
// → 30

let boil = Temperature.fromFahrenheit(212)
console.log(boil.celsius)
// → 100
