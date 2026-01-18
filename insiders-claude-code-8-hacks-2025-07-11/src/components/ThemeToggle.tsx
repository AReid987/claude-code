'use client'

import { useTheme } from '@/contexts/ThemeContext'

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme:</span>
      
      <button
        onClick={toggleTheme}
        className={`
          relative inline-flex h-8 w-16 items-center rounded-full 
          transition-colors duration-200 ease-in-out focus:outline-none 
          focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          ${isDark 
            ? 'bg-gray-800' 
            : 'bg-blue-400'
          }
        `}
        aria-label="Toggle theme"
      >
        <span
          className={`
            inline-block h-6 w-6 transform rounded-full 
            transition duration-200 ease-in-out
            ${isDark 
              ? 'translate-x-9 bg-gray-900' 
              : 'translate-x-1 bg-white'
            }
          `}
        >
          <span className="absolute inset-0 flex items-center justify-center">
            {isDark ? (
              <span className="text-xs">🌙</span>
            ) : (
              <span className="text-xs">☀️</span>
            )}
          </span>
        </span>
      </button>
      
      <span className="text-xs text-gray-500 dark:text-gray-400">
        {isDark ? 'Dark mode' : 'Light mode'}
      </span>
    </div>
  )
}