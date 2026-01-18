import type { Metadata } from 'next'
import './globals.css'
import { ThemeWrapper } from '@/components/ThemeWrapper'

export const metadata: Metadata = {
  title: 'Claude Code Demo App',
  description: 'A demo app for showcasing Claude Code workflows',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors" suppressHydrationWarning>
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  )
}