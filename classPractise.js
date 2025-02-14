// Problem 1: Rectangle Class
// Task: Create a Rectangle class that represents a rectangle in two-dimensional space.
// class Rectangle {
//   constructor(width, length) {
//     this.length = length
//     this.width = width
//   }
//   area() {
//     return this.length * this.width
//   }
//   perimeter() {
//     return 2(this.length + this.width)
//   }
//   get isSquare() {
//     return this.length == this.width
//   }
//   static fromDimensions(width, length) {
//     return new Rectangle(width, length)
//   }
// }

// const rect = new Rectangle(10, 5)
// console.log(rect.area())
// console.log(rect.isSquare)
// console.log(rect.width === 10, 'Width should be 10')
// console.log(rect.length === 5, 'length should be 5')
// const rectFromDimensions = Rectangle.fromDimensions(8, 4)
// console.log(rectFromDimensions.width === 8, 'Width should be 8')
// console.assert(rectFromDimensions.length === 4, 'Height should be 4')

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber
    this.balance = 0
  }
  deposit(amount) {
    return amount < 0 ? this.balance : (this.balance += amount)
  }
  withdraw(amount) {
    amount > 0
      ? this.balance - amount < 0
        ? 'Insufficient balance'
        : (this.balance -= amount)
      : 'Invalid amount'
  }
  get formattedBalance() {
    return `$${this.balance.toFixed(2)}`
  }
  static createAccount(accountNumber) {
    return new BankAccount(accountNumber)
  }
}
const account = new BankAccount('123456')
console.log(account.accountNumber, "Account number should be '123456'")
console.log(account.balance, 'Initial balance should be 0')

account.deposit(100)
console.log(account.balance, 'Balance should be 100 after deposit')

account.withdraw(50)
console.log(account.balance, 'Balance should be 50 after withdrawal')

account.withdraw(150) // Attempt to withdraw more than balance
console.log(account.balance, 'Balance should remain 50 after failed withdrawal')

console.log('balance', account.balance)

account.deposit(250)
console.log(account.formattedBalance, "Formatted balance should be '$300.00'")

account.deposit(-50) // Attempt to deposit a negative amount
console.log(
  account.balance,
  'Balance should remain $300 after negative deposit'
)

const newAccount = BankAccount.createAccount('654321')
console.log(newAccount.accountNumber, "New account number should be '654321'")
console.log(newAccount.balance, 'New account initial balance should be 0')
