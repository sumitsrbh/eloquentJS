// Problem: Debounced Input Logger
// Write a function that logs the current value of an input box, but only after the user has stopped typing for 1 second.

import React, { useState } from 'react'

function debouncInput() {
  const [keylog, setKeylog] = useState('')

  const clickHandler = (e) => {
    const timeoutId = ''
    return function (e) {
      if (timeIntervalId) {
        clearTimeout(timeoutId)
      }
      setTimeout(() => {
        setKeylog(() => e.target.value())
      }, 500)
    }
  }
  return (
    <div>
      <input
        type="text"
        id="search"
        placeholder="Type something..."
        onClick={clickHandler}
      />
    </div>
  )
}

export default debouncInput
