class LRUCache {
  #current
  #key
  value
  constructor(capacity) {
    this.capacity = capacity
    this.cache = [{ key: '', value: '' }]
    this.#current
  }
  get(key) {
    this.#current = key
    this.cache.forEach((e) => {
      return e.key == key && e.value
    })
  }
  put(key, value) {
    this.capacity < this.cache.length
      ? this.cache.push({ key: key, value: value })
      : this.get(this.#current)
  }
}

const cache = new LRUCache(2)
cache.put(1, 'A')
cache.put(2, 'B')
console.log(cache.get(1)) // "A"
console.log(cache) // "A"
