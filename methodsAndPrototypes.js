// Task: Create a Library System
// Objective: Implement a simple library system using constructor functions and prototypes. You will create a Book constructor to represent individual books and a Library constructor to manage collections of books.

function Book(title, author, year) {
  this.title = title
  this.author = author
  this.year = year
}
// constructor function
//When you create a new instance of Book using the new keyword, it initializes a new object with these properties.

Book.prototype.getInfo = function () {
  return `${this.title} by  ${this.author} published in ${this.year} `
} // defining a method on the prototype.
// a method getInfo is defined on the Book prototype.
//The function assigned to getInfo will be available to all instances of Book. This means you do not need to redefine this method for every book object you create.
//In JavaScript, every function has a prototype property. This property is an object that can hold methods and properties that should be shared among all instances created by that constructor.

const myBook = new Book('1984', 'George Orwell', 1949)
// When you call myBook.getInfo(), inside the method, this will refer to myBook. Therefore, it will access myBook.title, myBook.author, and myBook.year.

console.log(myBook.getInfo())

//  Summary
// Purpose: The purpose of defining methods on the prototype (like getInfo) is to allow all instances of a constructor (like Book) to share that method without each instance having its own copy. This is memory efficient and promotes code reuse.
// Instance Context: The use of this within the method allows it to operate on the specific instance that calls it, giving each book its unique information when you call getInfo.
