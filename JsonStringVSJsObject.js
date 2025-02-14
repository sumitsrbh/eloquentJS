const jsonString =
  '{"name": "John", "age": 30, "isStudent": false, "hobbies": ["reading", "sports"], "address": {"city": "New York", "zip": "10001"}}'

// console.log(JSON.parse(jsonString).name)
// console.log(jsonString.)

const jsonObject = {
  name: 'John',
  age: 30,
  isStudent: false,
  hobbies: ['reading', 'sports'],
  address: {
    city: 'New York',
    zip: '10001',
  },
  greet: function () {
    console.log('Hello!')
  },
}

// console.log(jsonObject.name, jsonObject.age)
