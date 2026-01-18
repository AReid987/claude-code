'use client'

import { useCounter } from '@/lib/useCounter'
import { useEffect, useState } from 'react'

export function Counter() {
  const { count, increment, decrement, reset } = useCounter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          -
        </button>
        <span className="text-2xl font-mono min-w-[3ch] text-center">0</span>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          +
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
          Reset
        </button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={decrement}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        -
      </button>
      
      <span className="text-2xl font-mono min-w-[3ch] text-center">
        {count}
      </span>
      
      <button
        onClick={increment}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        +
      </button>
      
      <button
        onClick={reset}
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        Reset
      </button>
    </div>
  )
}