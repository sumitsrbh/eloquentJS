class Range {
  constructor(start, end) {
    this.start = start
    this.end = end
  }
  includes(value) {
    return value <= this.end && value >= this.start
  }
  toArray() {
    let array = []
    for (let index = this.start; index < this.end; index++) {
      array.push(index)
    }
    return array
  }
  [Symbol.iterator]() {
    return new RangeIterator(this.start, this.end)
  }
}

class RangeIterator {
  constructor(start, end) {
    this.start = start
    this.end = end
  }
  next() {
    if (this.start >= this.end) {
      return { done: true }
    } else {
      let result = { value: this.start, end: false }
      this.start++
      return result
    }
  }
}

const range = new Range(1, 5)
console.log(range.includes(3)) // true
console.log(range.includes(6)) // false
console.log(range.toArray()) // [1, 2, 3, 4, 5]
for (let num of range) {
  console.log(num) // 1 2 3 4 5
}
