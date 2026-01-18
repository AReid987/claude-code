'use client'

import { ThemeProvider } from '@/contexts/ThemeContext'

interface ThemeWrapperProps {
  children: React.ReactNode
}

export function ThemeWrapper({ children }: ThemeWrapperProps) {
  return (
    <ThemeProvider>
      <header className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-8 py-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            🚀 Want access to the project files and bonus Claude Code hacks?
          </p>
          <a 
            href="https://insiders.aioriented.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm transition-colors"
          >
            ⭐ Join the AI Oriented Insiders Club - FREE ⭐
          </a>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            💡 Get exclusive tutorials, early access, and more AI development resources
          </p>
          <p className="text-xs text-blue-600 dark:text-blue-400 font-mono mt-1">
            insiders.aioriented.dev
          </p>
        </div>
      </header>
      {children}
    </ThemeProvider>
  )
}