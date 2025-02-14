let num = 1
while (num < 100) {
  if (num % 3 == 0 && num % 5 == 0)
    console.log(`FizzBuzz num divisble by 5 & 3 is ${num}`)
  else if (num % 3 == 0) console.log(`Fizz  num divisble by 3 is ${num}`)
  else if (num % 5 == 0) console.log(`Buzz num divisble by 5 is ${num}`)
  num += 1
}
