function printFarmInventory(cows, chickens) {
  let cowString = String(cows)
  while (cowString.length < 3) {
    cowString = '0' + cowString
  }
  console.log(`${cowString} Cows`)
  let chickenString = String(chickens)
  while (chickenString.length < 3) {
    chickenString = '0' + chickenString
  }
  console.log(`${chickenString} Chickens`)
}
// printFarmInventory(7, 11)

// when farmer starts to keep pig
function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number)
  while (numberString.length < 3) {
    numberString = '0' + numberString
  }
  console.log(`${numberString} ${label}`)
}

function printFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, 'Cows')
  printZeroPaddedWithLabel(chickens, 'Chickens')
  printZeroPaddedWithLabel(pigs, 'Pigs')
}

// printFarmInventory(7, 11, 3)

// let’s try to pick out a single concept:

function zeroPadding(number, width) {
  let string = String(number)
  while (string.length < width) {
    string = '0' + string
  }
  return string
}

function printFarmInventoryUpgrd(cows, chickens, pigs) {
  console.log(`${zeroPadding(cows, 3)} Cows `)
}

printFarmInventoryUpgrd(7, 16, 3)
