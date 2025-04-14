function debounce(fn, delay) {
  let timeoutId = ''
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

const logSearch = (query) => console.log('Searching for:', query)

const debouncedSearch = debounce(logSearch, 500)

debouncedSearch('j')
debouncedSearch('ja')
debouncedSearch('jav')
debouncedSearch('javascript') // Only this one triggers after 500ms
