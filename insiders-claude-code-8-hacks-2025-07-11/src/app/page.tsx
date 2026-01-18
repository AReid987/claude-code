'use client'

import { useState } from 'react'
import { AddTodo } from '@/components/AddTodo'
import { TodoList } from '@/components/TodoList'
import { ThemeToggle } from '@/components/ThemeToggle'

interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn Next.js', completed: true },
    { id: 2, text: 'Build a demo app', completed: false },
    { id: 3, text: 'Add dark mode', completed: false },
    { id: 4, text: 'Write documentation', completed: false },
  ])

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Math.max(...todos.map(t => t.id), 0) + 1,
      text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  return (
    <main className="min-h-screen p-8 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">Todo App - Claude Code Demo</h1>
        
        <div className="grid gap-8">
          <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Add New Todo</h2>
            <AddTodo onAddTodo={addTodo} />
          </section>
          
          <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Your Todos</h2>
            <TodoList todos={todos} onToggleTodo={toggleTodo} />
          </section>
          
          <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Theme Settings</h2>
            <ThemeToggle />
          </section>
        </div>
      </div>
    </main>
  )
}