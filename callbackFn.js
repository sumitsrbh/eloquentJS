function fetchData(callback) {
  setTimeout(() => {
    console.log('Data fetched')
    callback() // Executes the callback after data is fetched
  }, 2000)
}

function processData() {
  console.log('Processing data...')
}

fetchData(processData)
