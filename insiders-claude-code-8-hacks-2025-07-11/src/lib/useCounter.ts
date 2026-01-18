'use client'

import { useState } from 'react'

export function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState(initialValue)

  const increment = () => {
    // Intentional bug: using stale closure - won't work properly when clicked rapidly
    setTimeout(() => {
      setCount(count + 1)
    }, 10)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(initialValue)
  }

  return {
    count,
    increment,
    decrement,
    reset
  }
}